import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | shopping', function (hooks) {
  setupApplicationTest(hooks);

  test('item manipulation page', async function (assert) {
    await visit('/index');

    assert.strictEqual(currentURL(), '/index');
    await fillIn('[data-test-itemname]', 'item10');
    await fillIn('[data-test-itemprice]', 150);
    await fillIn('[data-test-itemid]', 100);
    await click('[data-test-submit]');
    assert
      .dom('[data-test-itemfill]')
      .hasText('item10');
    // await this.pauseTest();

    await click('[data-test-delete]');
  });
});
