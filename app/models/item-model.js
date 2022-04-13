import Model, { attr } from '@ember-data/model';

export default class ItemModelModel extends Model {
  @attr('number') itemId;
  @attr('number') itemPrice;
  @attr('string') itemName;
}
