import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 5.5 }, { price: 50 }];
    return items;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    const subtotal = model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    controller.set('subtotal', subtotal);
  }
}
