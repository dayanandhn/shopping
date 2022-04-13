import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ItemModelListComponent extends Component {

    @service store;
    @action
    delete(itemid){
        // console.log(itemid);
        let items = this.store.peekRecord('item-model', itemid);
        console.log(items);
        alert(`click ${itemid}`);
    }
}
