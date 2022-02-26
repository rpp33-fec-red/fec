var campusCode ='hr-rpp'

var options = {
  APIURL:`https://app-hrsei-api.herokuapp.com/api/fec2/${campusCode}/`,
  database: null,
  APIKEY:'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'
}


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
module.exports = config