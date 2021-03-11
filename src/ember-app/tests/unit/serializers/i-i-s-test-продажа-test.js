import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-продажа', 'Unit | Serializer | i-i-s-test-продажа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-продажа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-test-покупатель',
    'model:i-i-s-test-продажа',
    'model:i-i-s-test-строка-продажи',
    'model:i-i-s-test-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
