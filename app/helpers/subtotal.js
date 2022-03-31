import { helper } from '@ember/component/helper';

export default helper(function subtotal(params) {
  let [objs] = params;
  let subtotal = 0;
  for (let i = 0; i < objs.length; i++) {
    subtotal += objs[i].price;
  }
  console.log(subtotal);
  return subtotal;
});
