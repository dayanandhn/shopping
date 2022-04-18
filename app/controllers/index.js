import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
export default class IndexController extends Controller {

  @service store;

  @action
  refreshList() {
    console.log(this.model);
    this.model;
  }

  @action
  delete(itemid) {
    
    // console.log(itemid);
    alert(`click ${itemid}`);
    let items = this.store.peekRecord('item-model', itemid);

    items.deleteRecord();
    console.log(items.isDeleted);

    items.save();
    // console.log(this.itemarray.splice(itemid - 1, 1));
    console.log(this.itemarray, this.store.peekAll('item-model'));
    let itemslist = this.store.peekAll('item-model');
    let itemarray = [];

    for (let i = 0; i < itemslist.length; i++) {
      let data = itemslist.objectAt(i);
      let itemData = {};
      itemData['itemName'] = data.itemName;
      itemData['itemId'] = data.itemId;
      itemData['itemPrice'] = data.itemPrice;

      itemarray.push(itemData);
    }
    this.model = itemarray;
  }

  @tracked itemName = '';
  @tracked itemPrice = '';
  @tracked itemId = '';
  @service('cart-data') itemList;
  @service store;

  @action
  addItem() {
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

    let itemslist = this.store.peekAll('item-model');
    let itemarray = [];

    for (let i = 0; i < itemslist.length; i++) {
      let data = itemslist.objectAt(i);
      let itemData = {};
      itemData['itemName'] = data.itemName;
      itemData['itemId'] = data.itemId;
      itemData['itemPrice'] = data.itemPrice;

      itemarray.push(itemData);
    }
    this.model = itemarray;
  }

}
