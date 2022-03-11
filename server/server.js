require('dotenv').config();
var express = require('express');
var app = express();
const multer = require('multer');
var port = 8080;
var path = require('path');
var config = require('../config');
var options = new config(false);
options = options.getOptions();
var axios = require('axios');
var bp = require('body-parser');
app.use(bp.json());
var cors = require('cors');
var gzipStatic = require('connect-gzip-static');
app.use(cors());
app.use(express.static(path.join(__dirname,'../client/compile/Questions/photos')));
app.use(gzipStatic(path.join(__dirname,'../client/public')));
app.use('/coverage', express.static(path.join(__dirname,'../coverage')) );
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

//ajuna beats;
//changed this file to accept an array of routes in order and removed query params. you must have an array and a callback
app.get('/getDatav2',function(req, res){
  function placeParams(params){
    var url = options.APIURL+params['path']+'?';
    Object.keys(params).forEach((queryparam,index)=>{
      if (queryparam !== 'path'){
        if (index >0){
          url+=`&${queryparam}=${params[queryparam]}`;
        } else {
          url+=`${queryparam}=${params[queryparam]}`;
        }
      }
    });
    return url;
  }
  var params = req.query;
  var url = placeParams(params);
  var callback = function(err,data) {
    if (err){
      res.json({Error:err,data:null});
    } else {
      res.json({Error:null,data:data});
    }
  };
  var axiosoptions = {
    method:'get',
    url:url,
    headers:{'authorization':`${options.APIKEY}`,'Accept':'*'}
  };
  axios(axiosoptions).then(response=>{
    if (response.status !== 200){
      var error = new Error('response status is not 200');
      callback({Error:response.status,err:error},null);
    } else {
      callback(null,response.data);
    }
  }).catch(err=>{
    console.log(err);
  });
});


app.get('/getData',function(request, response) {
  var url = options.APIURL;
  if (request.query.route1) {
    url+=`/${request.query.route1}`;
  }
  if (request.query.route2){
    url+=`/${request.query.route2}`;
  }
  if (request.query.route3){
    url+=`/${request.query.route3}`;
  }

  axios({
    method: 'get',
    url:url,
    headers:{'authorization':`${options.APIKEY}`,'Accept':'*'}
  }).then(function(results){
    if (results.data){
      response.json({results:results.data});
    } else {
      response.json({Error: new Error('no data')});
    }
  }).catch(err=>{
    response.json({results:[],Error:err});
  });
});


app.post('/getQuestions', (req, res) => {
  let url = options.APIURL + req.body.endpoint;
  let config = {
    headers: {
      authorization:`${options.APIKEY}`
    },
    params: req.body.params
  };
  axios.get(url, config)
    .then(function(response) {
      console.log('Status 200 OK');
      res.send(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.post('/postData', (req, res) => {
  let data = req.body.data;
  let url = options.APIURL + req.body.endpoint;
  let config = {
    headers: {
      authorization:`${options.APIKEY}`
    },
    params: req.body.params
  };
  axios.post(url, data, config)
    .then(function() {
      console.log('Status 201 CREATED');
      res.sendStatus(201);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.put('/putData', (req, res) => {
  let data = req.body.data;
  let url = options.APIURL + req.body.endpoint;
  let config = {
    headers: {
      authorization:`${options.APIKEY}`
    },
    params: req.body.params
  };
  axios.put(url, data, config)
    .then(function() {
      console.log('Status: 204 NO CONTENT');
      res.send();
    })
    .catch(function(error) {
      console.log(error);
    });
});

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../client/compile/Questions/photos'),
  filename: function(req, file, callback) {
    callback(null, Date.now() + '.png');
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('photoUpload'), (req, res) => {
  res.send(req.file.path);
});

const uploadReviews = multer();

app.post('/reviews', uploadReviews.array('photos', 5), async (req, res) => {

  // save photos to AWS S3
  const files = req.files;
  const s3Instance = new S3Client({
    region: 'us-east-1' ,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  });
  let photos = [];
  for (const file in files) {
    var params = {
      Key: files[file].originalname,
      Bucket: 'fec-project-rpp33',
      Body: files[file].buffer
    };
    const command = new PutObjectCommand(params);
    // eslint-disable-next-line no-unused-vars
    const fileUploadResponse = await s3Instance.send(command);
    const url = `https://fec-project-rpp33.s3.amazonaws.com/${files[file].originalname}`;
    photos.push(url);
  }
  let reviewData = req.body;
  // convert form data for API as form data sends values as string
  if (reviewData.recommend === 'true') {
    reviewData.recommend = true;
  } else {
    reviewData.recommend = false;
  }

  reviewData.rating = parseInt(reviewData.rating);
  reviewData.product_id = parseInt(reviewData.product_id);
  for (const key in reviewData.characteristics) {
    reviewData.characteristics[key.substring(1, key.length - 1)] = parseInt(reviewData.characteristics[key]);
    delete reviewData.characteristics[key];
  }


  reviewData.photos = photos;
  let url = options.APIURL + '/reviews';
  const config = {
    method: 'POST',
    url: url,
    headers: {
      'authorization':`${options.APIKEY}`
    },
    data: reviewData
  };


  axios(config)
    .then(() => {
      console.log('Status 201 CREATED');
      res.sendStatus(201);
    }).catch((error) => {
      console.log('Error recieved when adding review:', error.response);
    });
});

app.put('/reviews', (req, res) => {
  let url = options.APIURL + `/reviews/${req.body.review_id}/helpful`;
  const config = {
    method: 'PUT',
    url: url,
    headers: {
      'authorization':`${options.APIKEY}`
    }
  };
  axios(config)
    .then(() => {
      console.log('Status: 204 NO CONTENT');
      res.sendStatus(204);
    }).catch((error) => {
      console.log('Error recieved when voting helpfulness:', error.response);
    });
});

app.listen(port,function(){
  console.log('listening on ',port);
});

