import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  ценуличка: DS.attr('decimal'),
  покупатель: DS.belongsTo('i-i-s-test-покупатель', { inverse: null, async: false }),
  строкаПродажи: DS.hasMany('i-i-s-test-строка-продажи', { inverse: 'продажа', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test-продажа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  ценуличка: {
    descriptionKey: 'models.i-i-s-test-продажа.validations.ценуличка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  покупатель: {
    descriptionKey: 'models.i-i-s-test-продажа.validations.покупатель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаПродажи: {
    descriptionKey: 'models.i-i-s-test-продажа.validations.строкаПродажи.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродажаE', 'i-i-s-test-продажа', {
    дата: attr('Дата', { index: 0 }),
    ценуличка: attr('', { index: 1 }),
    покупатель: belongsTo('i-i-s-test-покупатель', 'Покупатель', {
      навзвание: attr('Навзвание', { index: 3 })
    }, { index: 2 }),
    строкаПродажи: hasMany('i-i-s-test-строка-продажи', 'Строка продажи', {
      колво: attr('', { index: 0 }),
      товар: belongsTo('i-i-s-test-товар', 'Товар', {
        название: attr('Название', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ПродажаL', 'i-i-s-test-продажа', {
    дата: attr('Дата', { index: 0 }),
    ценуличка: attr('', { index: 1 }),
    покупатель: belongsTo('i-i-s-test-покупатель', 'Навзвание', {
      навзвание: attr('Навзвание', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
