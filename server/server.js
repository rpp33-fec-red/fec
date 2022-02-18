var express = require('express');
var app = express();
var port = 8080;
var path = require('path')
var config = require('../config');
var options = new config(false);
options = options.getOptions();
var axios = require('axios')
var bp = require('body-parser')
var cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname,'../client/public')));
app.use(bp.json());
app.get('/getData',function(request, response) {
  var url = options.APIURL;
  if (request.query.route){
    url+=`/${request.query.route}?`;
  }
  Object.keys(request.query).forEach((param)=>{
    console.log('url',url)
    console.log(param)
    var value = request.query[param];
    if (param !== 'route'){
      url+=`&${param}=${value}`;
    }
  });
  axios({
    method: 'get',
    url:url,
    headers:{'authorization':`${options.APIKEY}`,'Accept':'*'}
  }).then(function(results) {
    console.log(results);
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
  console.log('listenening on ',port);
})
