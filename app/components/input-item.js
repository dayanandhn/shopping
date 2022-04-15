import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class InputItenClass extends Component {
  @tracked itemName = '';
  @tracked itemPrice = '';
  @tracked itemId = '';
  @service('cart-data') itemList;
  @service store;

  @action
  submit() {
    // console.log(this.itemName, " ", this.itemPrice);
    let item = {
      name: this.itemName,
      price: this.itemPrice,
      id: this.itemList.length + 1,
    };

    this.store.createRecord('item-model', {
      itemId: this.itemId,
      id: this.itemId,
      itemName: this.itemName,
      itemPrice: this.itemPrice,
    });
    console.log(this.store.peekAll('item-model'));
  }
}
