import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  общаяЦена: DS.attr('decimal'),
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
  общаяЦена: {
    descriptionKey: 'models.i-i-s-test-продажа.validations.общаяЦена.__caption__',
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
    общаяЦена: attr('Общая цена', { index: 1 }),
    покупатель: belongsTo('i-i-s-test-покупатель', 'Покупатель', {
      навзвание: attr('Навзвание', { index: 3 })
    }, { index: 2 }),
    строкаПродажи: hasMany('i-i-s-test-строка-продажи', 'Строка продажи', {
      
    })
  });

  modelClass.defineProjection('ПродажаL', 'i-i-s-test-продажа', {
    дата: attr('Дата', { index: 0 }),
    общаяЦена: attr('Общая цена', { index: 1 }),
    покупатель: belongsTo('i-i-s-test-покупатель', 'Навзвание', {
      навзвание: attr('Навзвание', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
