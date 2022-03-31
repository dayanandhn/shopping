import Route from '@ember/routing/route';

export default class CartItemsPreviewRoute extends Route {
  model(params) {
    const items = {
      1: { id: 1, name: 'pencil', price: 5.5 },
      2: { id: 2, name: 'pen', price: 50 },
      3: { id: 3, name: 'paper', price: 70 },
      4: { id: 4, name: 'note', price: 40 },
    };
    const { item_id } = params;
    return items[item_id];
  }
}
