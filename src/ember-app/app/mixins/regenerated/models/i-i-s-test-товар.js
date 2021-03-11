import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  цена: DS.attr('decimal'),
  склад: DS.belongsTo('i-i-s-test-склад', { inverse: null, async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-test-товар.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-test-товар.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-test-товар.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-test-товар', {
    название: attr('Название', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-test-товар', {
    название: attr('Название', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });
};
