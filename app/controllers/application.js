import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchForEvents: function() {
      let keywords = this.get('keywords');
      console.log(keywords);
      let url = `https://api-eventful.herokuapp.com/api/events?keywords=${keywords}`
      // just use the fat arrow '=>' instead of function
      $.getJSON(url).then((events) => {
        this.set('events', events);
      });
    }
  }
});
