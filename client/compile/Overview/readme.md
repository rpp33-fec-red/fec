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


### what does the testData file looklike?
  ```json
  {
  "id": 64620,
  "campus": "hr-rpp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2022-01-28T00:20:03.466Z",
  "updated_at": "2022-01-28T00:20:03.466Z",
  "styles": [
    {
      "style_id": 398226,
      "name": "White Sole",
      "original_price": "120.00",
      "sale_price": null,
      "default?": false,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
      ],
      "skus": {
        "2313270": {
          "quantity": 14,
          "size": "7"
        },
        "2313271": {
          "quantity": 25,
          "size": "7.5"
        },
        "2313272": {
          "quantity": 9,
          "size": "8"
        },
        "2313273": {
          "quantity": 2,
          "size": "8.5"
        },
        "2313274": {
          "quantity": 18,
          "size": "9"
        },
        "2313275": {
          "quantity": 12,
          "size": "9.5"
        },
        "2313276": {
          "quantity": 10,
          "size": "10"
        },
        "2313277": {
          "quantity": 18,
          "size": "10.5"
        },
        "2313278": {
          "quantity": 11,
          "size": "11"
        },
        "2313279": {
          "quantity": 35,
          "size": "11.5"
        },
        "2313280": {
          "quantity": 25,
          "size": "12"
        }
      }
    },
    {
      "style_id": 398227,
      "name": "Black Sole",
      "original_price": "120.00",
      "sale_price": null,
      "default?": false,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
        },
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
      ],
      "skus": {
        "2313281": {
          "quantity": 14,
          "size": "7"
        },
        "2313282": {
          "quantity": 25,
          "size": "7.5"
        },
        "2313283": {
          "quantity": 9,
          "size": "8"
        },
        "2313284": {
          "quantity": 2,
          "size": "8.5"
        },
        "2313285": {
          "quantity": 18,
          "size": "9"
        },
        "2313286": {
          "quantity": 12,
          "size": "9.5"
        },
        "2313287": {
          "quantity": 10,
          "size": "10"
        },
        "2313288": {
          "quantity": 18,
          "size": "10.5"
        },
        "2313289": {
          "quantity": 11,
          "size": "11"
        },
        "2313290": {
          "quantity": 35,
          "size": "11.5"
        },
        "2313291": {
          "quantity": 25,
          "size": "12"
        }
      }
    },
    {
      "style_id": 398228,
      "name": "Tan Sole",
      "original_price": "120.00",
      "sale_price": null,
      "default?": false,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        },
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        }
      ],
      "skus": {
        "2313292": {
          "quantity": 14,
          "size": "7"
        },
        "2313293": {
          "quantity": 25,
          "size": "7.5"
        },
        "2313294": {
          "quantity": 9,
          "size": "8"
        },
        "2313295": {
          "quantity": 2,
          "size": "8.5"
        },
        "2313296": {
          "quantity": 18,
          "size": "9"
        },
        "2313297": {
          "quantity": 12,
          "size": "9.5"
        },
        "2313298": {
          "quantity": 10,
          "size": "10"
        },
        "2313299": {
          "quantity": 18,
          "size": "10.5"
        },
        "2313300": {
          "quantity": 11,
          "size": "11"
        },
        "2313301": {
          "quantity": 35,
          "size": "11.5"
        },
        "2313302": {
          "quantity": 25,
          "size": "12"
        }
      }
    },
    {
      "style_id": 398229,
      "name": "Red Sole",
      "original_price": "120.00",
      "sale_price": null,
      "default?": false,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
      ],
      "skus": {
        "2313303": {
          "quantity": 14,
          "size": "7"
        },
        "2313304": {
          "quantity": 25,
          "size": "7.5"
        },
        "2313305": {
          "quantity": 9,
          "size": "8"
        },
        "2313306": {
          "quantity": 2,
          "size": "8.5"
        },
        "2313307": {
          "quantity": 18,
          "size": "9"
        },
        "2313308": {
          "quantity": 12,
          "size": "9.5"
        },
        "2313309": {
          "quantity": 10,
          "size": "10"
        },
        "2313310": {
          "quantity": 18,
          "size": "10.5"
        },
        "2313311": {
          "quantity": 11,
          "size": "11"
        },
        "2313312": {
          "quantity": 35,
          "size": "11.5"
        },
        "2313313": {
          "quantity": 25,
          "size": "12"
        }
      }
    },
    {
      "style_id": 398230,
      "name": "Yellow Sole",
      "original_price": "120.00",
      "sale_price": null,
      "default?": false,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
        },
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        }
      ],
      "skus": {
        "2313314": {
          "quantity": 14,
          "size": "7"
        },
        "2313315": {
          "quantity": 25,
          "size": "7.5"
        },
        "2313316": {
          "quantity": 9,
          "size": "8"
        },
        "2313317": {
          "quantity": 2,
          "size": "8.5"
        },
        "2313318": {
          "quantity": 18,
          "size": "9"
        },
        "2313319": {
          "quantity": 12,
          "size": "9.5"
        },
        "2313320": {
          "quantity": 10,
          "size": "10"
        },
        "2313321": {
          "quantity": 18,
          "size": "10.5"
        },
        "2313322": {
          "quantity": 11,
          "size": "11"
        },
        "2313323": {
          "quantity": 35,
          "size": "11.5"
        },
        "2313324": {
          "quantity": 25,
          "size": "12"
        }
      }
    }
  ]
}
```

### STATE
  ## there are many state objects in this wigit and is easy to get lost with whats going on

  ### are main state object in overview component has these properies.
  ```javascript
    this.state = {
      productquery:64620,
      styles: testData.styles,
      onstyle:Object.assign(testData.styles[0],testData),
      image:testData.styles[0].photos[0].url,
      showBigImage:false,
    }
```
### what can we do with this state?

## well first we want to start off and build the left side of the componet which deals with the image.

```javascript
  // in our leftContainer we need to have state there as well with things for the image;

```


### TESTING?

## we use reacttestRenderer library for jest to test react components are working properly

** overview.test.js

```javascript
  import renderer from 'react-test-renderer';
  //using renderer to fake render react componets without the DOM.

```
