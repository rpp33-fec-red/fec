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
  console.log('queryparams',req.query);
  console.log('body',req.body);

  model.getData(req.query,req.body,function(err,data){
    if (err){
      res.json({Error:err,data:null});
    } else {
      res.json({Error:null,data:data});
    }  });

});
app.post('/postData',function(req, res) {
  console.log('queryparams',req.query);
  console.log('body',req.body);

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
  console.log('queryparams',req.query);
  console.log('body',req.body);
  model.putData(req.query,req.body,function(err,data){
    console.log('got data back');
    if (err){
      res.json({Error:err,data:null});
    } else {
      res.json({Error:null,data:data});
    }
  });
  // model.getData()

});



// app.get('/getData',function(request, response) {
//   var url = options.APIURL;
//   Object.keys(request.query).forEach((key)=>{
//     var value = request.query[key];
//     if (key.includes('route') ){
//       url+=`/${value}`;
//     }
//   });
//   // url+='?';
//   Object.keys(request.query).forEach((param, index)=>{
//     var value = request.query[param];
//     if (param.includes('route') === false && param.includes('type') === false){
//       if (url.includes('=') === false) {
//         url+=`${param}=${value}`;
//       } else {
//         url+=`&${param}=${value}`;
//       }
//     }
//   });



//   console.log('url',url);
//   axios({
//     method: 'GET',
//     url:url,
//     headers:{'authorization':`${options.APIKEY}`,'Accept':'*'}
//   }).then(function(results){
//     if (results.data){
//       response.json({results:results.data});
//     } else {
//       response.json({Error: new Error('no data')});
//     }
//   }).catch(err=>{
//     response.json({results:[],Error:err});
//   });
// });

// app.get('/postData',function(request, response) {
//   console.log('body',request.body);
//   var url = options.APIURL;
//   Object.keys(request.query).forEach((key)=>{
//     var value = request.query[key];
//     if (key.includes('route') ){
//       url+=`/${value}`;
//     }
//   });
//   var body = request.body;
//   Object.keys(request.query).forEach((param)=>{
//     var value = request.query[param];
//     if (param.includes('route') === false){
//       if (url.includes('=') === false) {
//         url+=`${param}=${value}`;
//       } else {
//         url+=`&${param}=${value}`;
//       }
//     }
//   });

//   axios({
//     method: 'POST',
//     url:url,
//     data: body,
//     headers:{'authorization':`${options.APIKEY}`,'Accept':'*'}
//   }).then(function(results){
//     if (results.data){
//       response.json({results:results.data});
//     } else {
//       response.json({Error: new Error('no data in post')});
//     }
//   }).catch(err=>{
//     response.json({results:[],Error:err});
//   });
// });



// //nicks code below
// app.post('/getQuestions', (req, res) => {
//   let url = options.APIURL + req.body.endpoint;
//   let config = {
//     headers: {
//       authorization:`${options.APIKEY}`
//     },
//     params: req.body.params
//   };
//   axios.get(url, config)
//     .then(function(response) {
//       console.log('Status 200 OK');
//       res.send(response.data);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });


// app.post('/postData', (req, res) => {
//   let data = req.body.data;
//   let url = options.APIURL + req.body.endpoint;
//   let config = {
//     headers: {
//       authorization:`${options.APIKEY}`
//     },
//     params: req.body.params
//   };
//   axios.post(url, data, config)
//     .then(function() {
//       console.log('Status 201 CREATED');
//       res.send();
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

// app.put('/putData', (req, res) => {
//   let data = req.body.data;
//   let url = options.APIURL + req.body.endpoint;
//   let config = {
//     headers: {
//       authorization:`${options.APIKEY}`
//     },
//     params: req.body.params
//   };
//   axios.put(url, data, config)
//     .then(function() {
//       console.log('Status: 204 NO CONTENT');
//       res.send();
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

app.listen(port,function(){
  console.log('listenening on ',port);
});

