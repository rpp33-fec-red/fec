
var config = {
  'serverURL':'/',
  "testURL":'http://localhost:8080/'
}
import $ from 'jquery';
class Model {

  constructor(deploy) {
    this.deploy = deploy;
    this.url = config.serverURL;
    if (!deploy){
      this.url = config.testURL
    }
    this.getData = this.getData.bind(this)
  }

  getData(route,params,cb){
    var url = this.url + `getData?route=${route}`;
    Object.keys(params).forEach((param)=>{
      var value = params[param];
      if (param !== 'route'){
        url+=`&${param}=${value}`;
      }
    });
   var options = {
      url:url,
      method: 'GET',
      success:function(data){
        cb(data)
      }
    }
    console.log(options)
if (options){
  $.ajax(options)
}
  }



}
export default Model