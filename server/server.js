var express = require('express');
var app = express();
var port = 8080;
var path = require('path');
app.use(express.static(path.join(__dirname + '/../client/public')));
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

//added coverage file for serving

//ajuna beats presents best techno music
app.get('/getData',function(request, response) {
  var type =  request.query.type;
  var url = options.APIURL;
  Object.keys(request.query).forEach((key)=>{
    var value = request.query[key];
    if (key.includes('route') ){
      url+=`/${value}`;
    }
  });
  // url+='?';
  Object.keys(request.query).forEach((param, index)=>{
    var value = request.query[param];
    if (param.includes('route') === false && param.includes('type') === false){
      if (url.includes('=') === false) {
        url+=`${param}=${value}`;
      } else {
        url+=`&${param}=${value}`;
      }
    }

  });


  console.log('url',url);
  axios({
    method: type,
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


app.listen(port,function(){
  console.log('listenening on ',port);
});

