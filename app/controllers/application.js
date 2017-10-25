import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchForEvents(event) {
      event.preventDefault();
      let keywords = this.get('keywords');
      this.transitionToRoute('search', keywords);
    }
  }
});
