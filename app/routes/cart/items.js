import Route from '@ember/routing/route';
import { helper } from '@ember/component/helper';
export default class CartItemsRoute extends Route {
  model() {
    const items = [
      { name: 'pencil', id: 1, price: 5.5 },
      { name: 'pen', id: 2, price: 50 },
      { name: 'paper', id: 3, price: 70 },
      { name: 'note', id: 4, price: 40 },
    ];
    return items;
  }

  // setupController(controller, model) {
  //   super.setupController(controller, model);
  //   const subtotal = model.reduce((acc, item) => {
  //     return acc + item.price;
  //   }, 0);
  //   const tax = 0.05*subtotal;
  //   const total = tax+subtotal;
  //   controller.set('subtotal', subtotal);
  //   controller.set('tax', tax.toFixed(2));
  //   controller.set('total', total.toFixed(2));
  // }
}
