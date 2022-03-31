import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    const items = [
      { name: 'pencil', id: 1, price: 5.5 },
      { name: 'pen', id: 2, price: 50 },
      { name: 'paper', id: 3, price: 70 },
      { name: 'note', id: 4, price: 40 },
    ];
    return items;
  }
}
