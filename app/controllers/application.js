import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchForEvents: function() {
      let keywords = this.get('keywords');
      this.transitionToRoute('search', keywords);
    }
  }
});
