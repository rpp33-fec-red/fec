/* eslint-disable no-empty */
var dot = require('dotenv').config();
var campusCode ='hr-rpp';
var options = {
  APIURL:`https://app-hrsei-api.herokuapp.com/api/fec2/${campusCode}`,
  database: null,
  APIKEY:process.env.APIKEY
};


class config {
  constructor(deploy){
    this.deploy;
    this.options = options;
    if (deploy) {

    } else {

    }
    this.getOptions = this.getOptions.bind(this);
  }

  getOptions(){
    return this.options;
  }

}
module.exports = config;