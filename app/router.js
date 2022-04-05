import EmberRouter from '@ember/routing/router';
import config from 'shopping/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('item', { path: '/item/:item_id' });
  this.route('not-found', { path: '/*path' });
  this.route('cart', { path: 'shopping-cart' }, function () {
    this.route('items', function () {
      this.route('preview', { path: '/preview/:item_id' });
    });
  });
  this.route('index', function () {
    this.route('add-new');
  });
});
