
import $ from 'jquery';
class GetRequests {
  constructor(){
    this.config = {
      'serverURL':'/',
      "testURL":'http://localhost:8080/'
    };
    this.getProductData = this.getProductData.bind(this)
  }
  checkURL(data) {
    var errorcheck = null;
    if (typeof data !== 'string'){
      errorcheck = "path is not a string please make sure the path is passed in the options";
    }
    if (data[data.length -1] === '/'){
      errorcheck = 'make sure the path does not end with / please remove it should look like get/19191/styles';
    }
    if (errorcheck !== null){
      throw new Error(errorcheck);
    }
  }
  checkParams(data){
    var errorcheck = null;
    if (typeof data !== 'object' || Array.isArray(data)){
      errorcheck = "params accepts a object of params  options:{params:{product_id:4}}";
    }
    if (data === undefined){
      errorcheck = null;
    }
    if (errorcheck !== null){
      throw new Error(errorcheck);
    }
  }

  compareOptions(options){
    Object.keys(options).forEach(key=>{
      switch (key ){
      case 'path': this.checkURL(options[key]);
        break;
      case 'params': this.checkParams(options[key]);
        break;
      }
    });
  }

  getData(options,callback){
    this.compareOptions(options);
    if (options.params === undefined){
      options.params = {};
    }
    options.params['path'] = options.path;
    if (options.path === undefined){
      options.path = '';
    }
    var url = this.config.serverURL+'getDatav2?' + $.param(options.params);
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

  }

  getProductData(id, cb) {
    var that = this;
    console.log('is here', id);
    this.getData({path:'/products/'+id}, function(data) {
      var product = data.data;
      console.log('success', product)
      that.getData({path:'/products/'+id+'/styles'}, function(data) {
        cb({product: Object.assign(product,{styles:data.data.results})});
      });
    });
  }
}
export default GetRequests;