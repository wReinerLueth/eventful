import Ember from 'ember';
import moment from 'moment';

export function formatDate(params/*, hash*/) {
  let datetime = params[0];
  return moment(datetime).format('MMMM Do, YYYY');
}

export default Ember.Helper.helper(formatDate);
