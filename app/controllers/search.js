import Ember from 'ember';
import moment from 'moment';
export default Ember.Controller.extend({
    sortedEvents: Ember.computed('model', function() { // putting 'model' says to continue refreshing which model is being used when the model changes
        let events = this.get('model');
        let sortedEventsVar = events.sort(function(eventA, eventB) {
            let aUnix = moment(eventA.start_time); // getting int, milliseconds from some time in 1970
            let bUnix = moment(eventB.start_time);
            if (aUnix < bUnix) {
                return -1;
              }
             if (aUnix > bUnix) {
               return 1;
             }
             return 0;
        });

        return sortedEventsVar;
    })
});
