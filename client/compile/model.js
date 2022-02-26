
var config = {
  'serverURL':'/',
  "testURL":'http://localhost:8080/'
};
import $ from 'jquery';
class Model {

  constructor(deploy) {
    this.deploy = deploy;
    this.url = config.serverURL;
    if (!deploy) {
      this.url = config.testURL;
    }
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    this.compareOptions = this.compareOptions.bind(this);

  }
  checkURL(options) {
    var errorcheck = null;
    if (typeof options.path !== 'string'){
      errorcheck = "path is not a string please make sure the path is passed in the options";
    }
    if (options.path[options.path.length -1] === '/'){
      errorcheck = 'make sure the path does not end with / please remove it should look like get/19191/styles';
    }
    if (errorcheck !== null){
      return new Error(errorcheck);
    }
    return null;
  }
  checkParams(options){
    var errorcheck = null;

    if (typeof options.params !== 'object' || Array.isArray(options.params)){
      errorcheck = "params accepts a object of params  options:{params:{product_id:4}}";
    }
    if (options.params === undefined){
      errorcheck = null;
    }
    if (errorcheck !== null){
      throw new Error(errorcheck);
    }
  }

  compareOptions(options){
    var error =null;
    switch (Object.keys(options)){
    case 'path': error = this.checkURL(options);
      break;
    case 'params': error =this.checkParams(options);
      break;
    default: error = new Error('its missing param and or path option properties');
    }
    return error;
  }

  getData(options,callback){
    var error = this.compareOptions(options);
    if (error == null){
      if (options.path === undefined){
        options.path = '';
      }
      options.params['path'] = options.path;
      var url = this.url+'getData?' + $.param(options.params);

      var ajaxoptions = {
        url: url,
        method: 'GET',
        contentType:'application/json',
        success: function(info){
          if (info){
            callback(info);
          } else {
            throw new Error('there is no data send back please fix your error!');
          }
        }
      };
      $.ajax(ajaxoptions);
    }  else {
      throw error;
    }
  }
  postData(options,data,callback){
    var error =  this.compareOptions(options);
    if (error == null) {

      if (options.path === undefined){
        options.path = '';
      }
      options.params['path'] = options.path;
      var url = this.url+'postData?' + $.param(options.params).toString();
      if (data === undefined){
        throw Error('there is no data for this post requests please fix it');
      }
      var ajaxoptions = {
        url: url,
        method: 'POST',
        contentType:'application/json',
        data: JSON.stringify({data:data}),
        success: function(info){
          callback(info);
        }
      };
      $.ajax(ajaxoptions);
    } else {
      throw error;
    }
  }
  putData(options,data,callback){
    this.compare(options);
    if (options.path === undefined){
      options.path = '';
    }
    options.params['path'] = options.path;
    var url = this.url+'putData?' + $.param(options.params);
    if (data === undefined){
      throw Error('there is no data for this post requests please fix it');
    }
    var ajaxoptions = {
      url: url,
      method: 'PUT',
      data:JSON.stringify({data:data}),
      contentType:'application/json',
      success: function(info){
        callback(info);
      }
    };
    $.ajax(ajaxoptions);
  }






}
export default Model;
