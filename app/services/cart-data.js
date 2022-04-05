import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CartDataService extends Service {
  @tracked items = [
    { name: 'pencil', id: 1, price: 5.5 },
    { name: 'pen', id: 2, price: 50 },
    { name: 'paper', id: 3, price: 70 },
    { name: 'note', id: 4, price: 40 },
  ];

  @action
  add(item) {
    this.items.push(item);
    console.log(this.items);
    return this.items;
  }
}
