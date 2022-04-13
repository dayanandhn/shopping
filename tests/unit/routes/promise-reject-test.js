import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | promiseReject', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:promise-reject');
    assert.ok(route);
  });
});
