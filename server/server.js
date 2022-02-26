var express = require('express');
var app = express();
var port = 8080;
var path = require('path');
app.use(express.static(path.join(__dirname + '/../client/public')));
var bp = require('body-parser');
app.use(bp.json());
var cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname,'../client/public')));
app.use('/coverage', express.static(path.join(__dirname,'../coverage')) );

var Model = require('./model');
var model = new Model(false);

app.get('/getData',function(req, res) {
  model.getData(req.query,req.body,function(err,data){
    if (err){
      res.json({Error:err,data:null});
    } else {
      res.json({Error:null,data:data});
    }  });
});
app.post('/postData',function(req, res) {
  model.postData(req.query,req.body,function(err,data){
    console.log('got data back');
    if (err){
      res.json({Error:err,data:null});
    } else {
      res.json({Error:null,data:data});
    }
  });
});
<<<<<<< HEAD

app.put('/putData',function(req, res) {
  model.putData(req.query,req.body,function(err,data){
    console.log('got data back');
    if (err){
      res.json({Error:err,data:null});
    } else {
      res.json({Error:null,data:data});
    }
  });
=======


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
>>>>>>> f870b9a4b9ebaae9e793f8ac2ba1fe43a13e8c3f
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
      res.send();
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


app.listen(port,function(){
  console.log('listening on ',port);
});

