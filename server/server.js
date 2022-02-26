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

app.put('/putData',function(req, res) {
  model.putData(req.query,req.body,function(err,data){
    console.log('got data back');
    if (err){
      res.json({Error:err,data:null});
    } else {
      res.json({Error:null,data:data});
    }
  });
});



app.listen(port,function(){
  console.log('listening on ',port);
});

