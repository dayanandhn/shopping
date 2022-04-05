import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexAddNewRoute extends Route {
  @service admin;
  beforeModel() {
    if (!this.admin.get()) this.transitionTo('index');
  }
}
