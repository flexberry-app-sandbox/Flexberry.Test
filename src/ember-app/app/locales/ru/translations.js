import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Test',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        test: {
          caption: 'Test',
          title: 'Test',
          'i-i-s-test-покупатель-l': {
            caption: 'Покупатель',
            title: ''
          },
          'i-i-s-test-продажа-l': {
            caption: 'Продажа',
            title: ''
          },
          'i-i-s-test-товар-l': {
            caption: 'Товар',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
