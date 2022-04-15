import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ItemModelListComponent extends Component {
  @service store;

  @tracked itemarray = [];

  get il() {
    this.itemarray = this.args.itemarray;
    return this.itemarray;
  }

  //   constructor() {
  // let itemslist = this.store.peekAll('item-model');
  // for (let i = 0; i < itemslist.length; i++) {
  //     let data = itemslist.objectAt(i);
  //     let itemData = {};
  //     itemData['itemName'] = data.itemName;
  //     itemData['itemId'] = data.itemId;
  //     itemData['itemPrice'] = data.itemPrice;
  //     itemarray.push(itemData);
  //   }
  //   }

  @action
  delete(itemid) {
    // console.log(itemid);
    alert(`click ${itemid}`);
    let items = this.store.peekRecord('item-model', itemid);

    items.deleteRecord();
    console.log(items.isDeleted);

    items.save();
    console.log(this.itemarray.splice(itemid - 1, 1));
    console.log(this.itemarray, this.store.peekAll('item-model'));
  }
}
