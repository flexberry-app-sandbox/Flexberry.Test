import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  навзвание: DS.attr('string')
});

export let ValidationRules = {
  навзвание: {
    descriptionKey: 'models.i-i-s-test-покупатель.validations.навзвание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупательE', 'i-i-s-test-покупатель', {
    навзвание: attr('Навзвание', { index: 0 })
  });

  modelClass.defineProjection('ПокупательL', 'i-i-s-test-покупатель', {
    навзвание: attr('Навзвание', { index: 0 })
  });
};
