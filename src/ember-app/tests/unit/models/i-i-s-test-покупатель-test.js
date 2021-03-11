import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-покупатель', 'Unit | Model | i-i-s-test-покупатель', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test-покупатель',
    'model:i-i-s-test-продажа',
    'model:i-i-s-test-склад',
    'model:i-i-s-test-строка-продажи',
    'model:i-i-s-test-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
