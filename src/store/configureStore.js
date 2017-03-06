if(process.env.NODE_ENV === 'production'){
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}

//Dybamic imports aren't supported by ES6 so using reuire instead of import
