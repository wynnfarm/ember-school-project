import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

//Hey, I'm a comment
//Hey, I'm in a new branch "branch-name"
Router.map(function() {
});

export default Router;
