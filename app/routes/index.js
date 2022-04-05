import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('admin') admin;

  beforeModel() {
    if (this.admin.get()) this.transitionTo('index.add-new');
  }

  model() {
    const items = [
      { name: 'pencil', id: 1, price: 5.5 },
      { name: 'pen', id: 2, price: 50 },
      { name: 'paper', id: 3, price: 70 },
      { name: 'note', id: 4, price: 40 },
    ];
    console.log(this.admin.get());
    return items;
  }
}
