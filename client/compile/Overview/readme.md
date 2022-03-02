<h1 align="center"> The overview wigit</h1>

<p align="center">
  <img src="./overview.png" alt="overviewimg" width="800px" height="600px"/>
  <br>
  <i>Overview is a wiget where a customer can overview the product details. the most important details of them all.
  </i>
  <br>
</p>

## Documentation
Getting started with how to use this wigits code;


### API MODEL

# how to import the model;

```javascript
// this model connects to the backend to make requests for data
import Model from 'pathtomodelFile';
var newModel = new Model(false|true);
// if you choose false then you are not ready to deploy and the functionality may be slightly diffrent.

```
## how to use the model for overview component?;
## the overview uses getdata function to retrieve information from the api
```javascript
  newModel.getData;
  parameters required (Array, function)
  // the array must be array of routes for an example
  newModel.getData(['products'],function(data){
    console.log(data);
  });
  //thats it
```

### STATE
  ## there is many state objects in this wigit and is easy to get lost with whats going on


### TESTING?



