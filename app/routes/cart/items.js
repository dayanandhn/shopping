import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CartItemsRoute extends Route {
  @service store;
  async model() {
    const items = [
      { name: 'box', id: 1, price: 55 },
      { name: 'paper', id: 2, price: 5 },
      { name: 'scale', id: 3, price: 10 },
      { name: 'eraser', id: 4, price: 3 },
      { name: 'pen', id: 5, price: 6 },
    ];
    return items;
    // let response = await fetch('/api/shopping-list.json');
    // let { itemModel } = await response.json();
    // console.log(typeof Array(itemModel));
    // return itemModel;
  }

  // model() {

  // return this.store.findAll('item-model');
  // }
}
