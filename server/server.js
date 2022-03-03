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
  console.log('listenening on ',port);
});

