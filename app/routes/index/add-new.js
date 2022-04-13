import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexAddNewRoute extends Route {
  @service admin;
  @service router;

  beforeModel() {
    if (!this.admin.get()) {
      console.log('You need admin permission');
      this.transitionTo('index');
    }
  }

  // afterModel(){
  //     this.router.on('routeWillChange', (transition)=>{
  //       if(!transition.to.find(route => route.name === this.routeName)
  //       && !confirm('Leave the form??')){
  //         transition.abort();
  //       }
  //     });
  //   };
}
