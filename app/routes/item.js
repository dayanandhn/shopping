import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;
  async model(params) {
    //   const items = {
    //     1: { id: 1, name: 'pencil', price: 5.5 },
    //     2: { id: 2, name: 'pen', price: 50 },
    //     3: { id: 3, name: 'paper', price: 70 },
    //     4: { id: 4, name: 'note', price: 40 },
    //   };

    const res = await fetch('/api/shopping-list.json');
    const { data } = await res.json();
    const { item_id } = params;
    for (item in data) {
      if (item.id == item_id) return item;
    }
  }
}
