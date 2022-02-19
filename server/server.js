var express = require('express');
var app = express();
var port = 8080;
var path = require('path')
app.use(express.static(path.join(__dirname + '/../client/public')));
var config = require('../config');
var options = new config(false);
options = options.getOptions();
var axios = require('axios')
var bp = require('body-parser')
var cors = require('cors');


app.use(cors());
app.use(express.static(path.join(__dirname,'../client/public')));
app.use(bp.json())

let headers = {
  headers: {'authorization':`${options.APIKEY}`}
}

app.get('/getData',function(request, response) {
  var url = options.APIURL;
  if (request.query.route){
    url+=`/${request.query.route}?`;
  }
  Object.keys(request.query).forEach((param)=>{
    var value = request.query[param];
    if (param !== 'route'){
      url+=`&${param}=${value}`;
    }
  });
  axios({
    method: 'get',
    url:url,
    headers:{'authorization':`${options.APIKEY}`,'Accept':'*'}
  }).then(function(results){
    if (results.data){
      response.json({results:results.data});
    } else {
      response.json({Error: new Error('no data')})
    }
  }).catch(err=>{
    response.json({results:[],Error:err});
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
  .then(function(response) {
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
  .then(function(response) {
    console.log('Status: 204 NO CONTENT');
    res.send();
  })
  .catch(function(error) {
    console.log(error);
  })
})

app.listen(port,function(){
  console.log('listenening on ',port)
})

