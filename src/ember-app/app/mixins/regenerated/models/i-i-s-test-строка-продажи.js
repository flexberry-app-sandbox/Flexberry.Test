import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колво: DS.attr('number'),
  жБС: DS.attr('string'),
  товар: DS.belongsTo('i-i-s-test-товар', { inverse: null, async: false }),
  продажа: DS.belongsTo('i-i-s-test-продажа', { inverse: 'строкаПродажи', async: false })
});

export let ValidationRules = {
  колво: {
    descriptionKey: 'models.i-i-s-test-строка-продажи.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  жБС: {
    descriptionKey: 'models.i-i-s-test-строка-продажи.validations.жБС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-test-строка-продажи.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  продажа: {
    descriptionKey: 'models.i-i-s-test-строка-продажи.validations.продажа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрокаПродажиE', 'i-i-s-test-строка-продажи', {
    колво: attr('', { index: 0 }),
    товар: belongsTo('i-i-s-test-товар', 'Товар', {
      название: attr('Название', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'название' })
  });
};
