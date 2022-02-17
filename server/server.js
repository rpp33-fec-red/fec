var express = require('express');
var app = express();
var port = 8080;
var path = require('path')
var config = require('../config');
var options = new config(false);
options = options.getOptions();
var axios = require('axios')
var bp = require('body-parser')
app.use(bp.json())
var cors = require('cors');


app.use(cors());
app.use(express.static(path.join(__dirname,'../client/public')));

//changed this file to accept an array of routes in order and removed query params. you must have an array and a callback
app.get('/getData',function(request, response) {
  var url = options.APIURL;
  if (request.query.route1){
    url+=`/${request.query.route1}`;
  }
  if (request.query.route2){
    url+=`/${request.query.route2}`;
  }
  if (request.query.route3){
    url+=`/${request.query.route3}`;
  }


  console.log('url',url)
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

})


app.listen(port,function(){
  console.log('listenening on ',port)
})
