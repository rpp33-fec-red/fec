var config = require('../config');

var options = new config(false);
options = options.getOptions();
var axios = require('axios');

class Model {

  constructor(deploy) {
    this.deploy = deploy;
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    this.putData = this.putData.bind(this);
    this.APIURL = options.APIURL;
    this.placeParams = this.placeParams.bind(this);
  }


  placeParams(params){
    var url = this.APIURL+params['path']+'?';
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

  getData(params,body,callback){
    var url = this.placeParams(params);
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
  }

  postData(params,body,callback){
    var url = this.placeParams(params);

    var axiosoptions = {
      method:'post',
      url:url,
      data:body.data,
      headers:{'authorization':`${options.APIKEY}`,'Accept':'*'}
    };
    axios(axiosoptions).then(response=>{
      if (response.status !== 201){
        var error = new Error('response status is not 201');
        callback({Error:response.status,err:error},null);
      } else {
        callback(null,response.data);
      }
    }).catch(err=>{
      console.log(err);
    });
  }

  putData(params, body, callback){
    var url = this.placeParams(params);
    var axiosoptions = {
      method:'put',
      url:url,
      data: body.data,
      headers:{'authorization':`${options.APIKEY}`,'Accept':'*'}
    };
    axios(axiosoptions).then(response=>{
      if (response.status !== 204){
        var error = new Error('response status is not 204');
        callback({Error:response.status,err:error},null);
      } else {
        callback(null,response.data);
      }
    }).catch(err=>{
      console.log(err);
    });
  }
}

module.exports =  Model;