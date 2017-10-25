import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('search', { path: 'search/:keywords' }, function() {
    this.route('details', { path: 'details/:id' });
  });
  this.route('playground');
});

export default Router;
