
var config = {
  'serverURL':'/',
  "testURL":'http://localhost:8080/'
}
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
      } else {
        throw new Error('ROUTES parameter passeed to getData must be an array in order for example ["products",128823,"styles"]; the product id is 128823');
      }
  }

}
export default Model;
