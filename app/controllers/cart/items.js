import Controller from '@ember/controller';

export default class CartItemsController extends Controller {
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  get itemPrice() {
    console.log(this.model);
    return this.model;
  }

  get tax() {
    return (this.subtotal * 0.05).toFixed(2);
  }

  get total() {
    return parseFloat(this.tax) + this.subtotal;
  }
}
