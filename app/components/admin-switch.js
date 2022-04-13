import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class AdminSwitchComponent extends Component {
  @service admin;

  @action
  change() {
    // console.log('action click');
    this.admin.update();
  }
}
