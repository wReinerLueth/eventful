import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log('params', params);
    let eventID = params.id;
    let events = this.modelFor('search');
    // ^^^ get parent
    console.log(events);

    return events.find(function(event) {
      return event.id === eventID;
      // return event.id if it's the same as the one coming from the URL
    });
  }
});
