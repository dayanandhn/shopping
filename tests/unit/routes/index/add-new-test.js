import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/add-new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:index/add-new');
    assert.ok(route);
  });
});
