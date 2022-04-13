import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CartDataService extends Service {
  @tracked items = [
    { name: 'box', id: 1, price: 55 },
    { name: 'paper', id: 2, price: 5 },
    { name: 'scale', id: 3, price: 10 },
    { name: 'eraser', id: 4, price: 3 },
    { name: 'pen', id: 5, price: 6 },
  ];

  @action
  add(item) {
    this.items.push(item);
    console.log(this.items);
    return this.items;
  }
}
