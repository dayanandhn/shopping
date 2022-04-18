import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class EditItemComponent extends Component {
  @tracked itemName = '';
  @tracked itemPrice = '';
  @tracked itemId = '';
  @service store;

  @action
  submit() {
    // console.log(this.itemName, " ", this.itemPrice);
    //    this.store.findRecord('item-model', this.itemId).then(()=>{
    //        if(!(this.itemName=='')){
    //            itemName = this.itemName
    //        }
    //        if(!(this.itemPrice=='')){
    //         itemPrice = this.itemPrice
    //     }
    //    })
    let data = this.store.peekRecord('item-model', this.itemId);
    if (!(this.itemName == '')) {
      data.itemName = this.itemName;
    }
    if (!(this.itemPrice == '')) {
      data.itemPrice = this.itemPrice;
    }
    console.log(data.itemName);
    // console.log(this.store.peekAll('item-model'));
  }
}
