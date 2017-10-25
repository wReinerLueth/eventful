import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
  add(eventfulEvent){
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/favorites',
      data: {
        event_id: eventfulEvent.id,
        title: eventfulEvent.title
      }
    });
  }
});
