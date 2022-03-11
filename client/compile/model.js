import $ from 'jquery';
class Model {

  constructor() {
    this.url = '/';
    this.getData = this.getData.bind(this);
  }

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
    // console.log(type,routes,params,callback);

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
    } else {
      throw new Error('ROUTES parameter passeed to getData must be an array in order for example ["products",128823,"styles"]; the product id is 128823');
    }
  }

}
export default Model;