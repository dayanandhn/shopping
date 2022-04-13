import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CartItemsPreviewRoute extends Route {
  @service router;
  @service admin;
  beforeModel() {
    if (!this.admin.get()) this.router.transitionTo('cart.items');
  }
  model(params) {
    const items = {
      1: { name: 'box', id: 1, price: 55 },
      2: { name: 'paper', id: 2, price: 5 },
      3: { name: 'scale', id: 3, price: 10 },
      4: { name: 'eraser', id: 4, price: 3 },
      5: { name: 'pen', id: 5, price: 6 },
    };
    const { item_id } = params;
    return items[item_id];
  }
}
