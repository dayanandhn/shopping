import Route from '@ember/routing/route';

export default class CartItemsRoute extends Route {
  model() {
    const items = [{ price: 5.5 }, { price: 50 }];
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
