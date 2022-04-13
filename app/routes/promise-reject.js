import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class PromiseRejectRoute extends Route {
  model() {
    return Promise.reject('FAIL');
  }

  @action
  error(reason) {
    alert(reason);
    // this.transitionTo('index');
    // return true;
  }
}
