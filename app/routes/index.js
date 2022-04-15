import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class IndexRoute extends Route {
  @service('admin') admin;
  @service store;
  @tracked load = 0;

  beforeModel() {
    if (this.admin.get()) this.transitionTo('index.add-new');
  }

  // model() {
  //   const items = [
  //     { name: 'pencil', id: 1, price: 5.5 },
  //     { name: 'pen', id: 2, price: 50 },
  //     { name: 'paper', id: 3, price: 70 },
  //     { name: 'note', id: 4, price: 40 },
  //   ];
  //   return items;
  // }

  create() {
    this.store.createRecord('item-model', {
      itemId: 1,
      id: 1,
      itemName: 'pen',
      itemPrice: 50,
    });

    this.store.createRecord('item-model', {
      itemId: 2,
      id: 2,
      itemName: 'pencil',
      itemPrice: 5,
    });

    for (let i = 3; i < 7; i++) {
      let obj = JSON.parse(
        `{"id":${i},"itemId":${i}, "itemName":"item${i}", "itemPrice":${i * 2}}`
      );
      this.store.createRecord('item-model', obj);
    }
  }

  model() {
    if (this.load == 0) {
      this.create();
      this.load = 1;
    }

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
    console.log(itemarray);

    return itemarray;
  }
}
