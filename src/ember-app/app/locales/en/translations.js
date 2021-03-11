import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestПокупательLForm from './forms/i-i-s-test-покупатель-l';
import IISTestПродажаLForm from './forms/i-i-s-test-продажа-l';
import IISTestТоварLForm from './forms/i-i-s-test-товар-l';
import IISTestПокупательEForm from './forms/i-i-s-test-покупатель-e';
import IISTestПродажаEForm from './forms/i-i-s-test-продажа-e';
import IISTestТоварEForm from './forms/i-i-s-test-товар-e';
import IISTestПокупательModel from './models/i-i-s-test-покупатель';
import IISTestПродажаModel from './models/i-i-s-test-продажа';
import IISTestСтрокаПродажиModel from './models/i-i-s-test-строка-продажи';
import IISTestТоварModel from './models/i-i-s-test-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-покупатель': IISTestПокупательModel,
    'i-i-s-test-продажа': IISTestПродажаModel,
    'i-i-s-test-строка-продажи': IISTestСтрокаПродажиModel,
    'i-i-s-test-товар': IISTestТоварModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test: {
          caption: 'test',
          title: 'test',
          'i-i-s-test-покупатель-l': {
            caption: 'i-i-s-test-покупатель-l',
            title: 'i-i-s-test-покупатель-l'
          },
          'i-i-s-test-продажа-l': {
            caption: 'i-i-s-test-продажа-l',
            title: 'i-i-s-test-продажа-l'
          },
          'i-i-s-test-товар-l': {
            caption: 'i-i-s-test-товар-l',
            title: 'i-i-s-test-товар-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-покупатель-l': IISTestПокупательLForm,
    'i-i-s-test-продажа-l': IISTestПродажаLForm,
    'i-i-s-test-товар-l': IISTestТоварLForm,
    'i-i-s-test-покупатель-e': IISTestПокупательEForm,
    'i-i-s-test-продажа-e': IISTestПродажаEForm,
    'i-i-s-test-товар-e': IISTestТоварEForm
  },

});

export default translations;
