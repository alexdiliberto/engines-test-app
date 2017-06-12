import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  engines: {
    engineOne: {
      dependencies: {
        externalRoutes: {
          home: 'index',
        }
      }
    },
    engineTwo: {
      dependencies: {
        externalRoutes: {
          one: 'engine-one',
        }
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
