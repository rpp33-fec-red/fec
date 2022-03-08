var express = require('express');
var app = express();
var port = 8080;
var path = require('path');
var config = require('../config');
var options = new config(false);
options = options.getOptions();
var axios = require('axios');
var bp = require('body-parser');
app.use(bp.json());
var cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname,'../client/public')));
app.use('/coverage', express.static(path.join(__dirname,'../coverage')) );

//ajuna beats;
//changed this file to accept an array of routes in order and removed query params. you must have an array and a callback
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

app.post('/reviews', (req, res) => {
  let reviewData = req.body;
  console.log(reviewData);
  let url = options.APIURL + '/reviews';
  const config = {
    method: 'POST',
    url: url,
    headers: {
      'authorization':`${options.APIKEY}`
    },
    data: reviewData
  };
  // axios(config)
  //   .then(() => {
  //     console.log('Status 201 CREATED');
  //     res.sendStatus(201);
  //   }).catch((error) => {
  //     console.log('Error recieved when adding review:', error.response);
  //   });

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
  console.log('listenening on ',port);
});

