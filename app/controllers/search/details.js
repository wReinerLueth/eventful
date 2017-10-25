import Ember from 'ember';

export default Ember.Controller.extend({
  favorites: Ember.inject.service(),
  actions: {
    favorite(eventfulEvent, jQueryEvent) {
      this.get('favorites').add(eventfulEvent);
    }
  }
});
