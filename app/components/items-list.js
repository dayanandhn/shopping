import Component from '@glimmer/component';
import { service } from '@ember/service';
export default class ItemsList extends Component {
  @service('cart-data') itemList;
}
