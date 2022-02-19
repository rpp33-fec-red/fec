
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
  }

<<<<<<< HEAD
  getData() {
    var type = 'GET';
    var params = {};
    var routes =[];
    var callback;
    //  console.log(arguments)
    Object.keys(arguments).forEach(key=>{
      if (typeof arguments[key] === "string"){
        type = arguments[key];
      } else if ( Array.isArray(arguments[key]) ) {
        routes = arguments[key];
      } else if (typeof arguments[key] === 'object') {
        params = arguments[key];
      } else {
        callback = arguments[key];
      }
    });
    console.log(type,routes,params,callback);

    if (Array.isArray(routes)) {
      var url = this.url + `getData?`;
      routes.forEach((route,index)=>{
        if (index > 0) {
          url += `&route${index+1}=${route}`;
        } else {
          url += `route${index+1}=${route}`;
        }
      });
      if (typeof params !== 'function') {
        Object.keys(params).forEach((param)=> {
          var value = params[param];
          url+=`&${param}=${value}`;
        });
      }
      // console.log(type)
      if (type){
        url+=`&type=${type}`;
      }
      // console.log(url);
      var options = {
        url:url,
        method: 'GET',
        success:function(data) {
          callback(data);
        }
      };
      if (options) {
        $.ajax(options);
      }
=======
  getData(routes, cb) {
    if (Array.isArray(routes)) {
      var url = this.url + `getData?route1=${routes[0]}&route2=${routes[1]}&route3=${routes[2]}`;
      var options = {
        url:url,
        method: 'GET',
        success:function(data) {
          cb(data);
        }
      };
      if (options) {
        $.ajax(options);
      }
>>>>>>> f5f872e29bda1330e5ebae66331c79d471c3583f
    } else {
      throw new Error('ROUTES parameter passeed to getData must be an array in order for example ["products",128823,"styles"]; the product id is 128823');
    }
  }

}
export default Model;
