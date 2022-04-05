import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AdminService extends Service {
  @tracked isAdmin = true;
  isAdmin = false;

  get() {
    return this.isAdmin;
  }

  // @action
  update() {
    this.isAdmin = !this.isAdmin;
    console.log(this.admin);
  }
}
