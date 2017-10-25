import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // console.log(params.keywords);
    let keywords = params.keywords;
    let url = `https://api-eventful.herokuapp.com/api/events?keywords=${keywords}`;
    // just use the fat arrow '=>' instead of function
    return $.getJSON(url);
  }
});
