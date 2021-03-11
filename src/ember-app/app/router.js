import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-покупатель-l');
  this.route('i-i-s-test-покупатель-e',
  { path: 'i-i-s-test-покупатель-e/:id' });
  this.route('i-i-s-test-покупатель-e.new',
  { path: 'i-i-s-test-покупатель-e/new' });
  this.route('i-i-s-test-продажа-l');
  this.route('i-i-s-test-продажа-e',
  { path: 'i-i-s-test-продажа-e/:id' });
  this.route('i-i-s-test-продажа-e.new',
  { path: 'i-i-s-test-продажа-e/new' });
  this.route('i-i-s-test-склад-l');
  this.route('i-i-s-test-склад-e',
  { path: 'i-i-s-test-склад-e/:id' });
  this.route('i-i-s-test-склад-e.new',
  { path: 'i-i-s-test-склад-e/new' });
  this.route('i-i-s-test-товар-l');
  this.route('i-i-s-test-товар-e',
  { path: 'i-i-s-test-товар-e/:id' });
  this.route('i-i-s-test-товар-e.new',
  { path: 'i-i-s-test-товар-e/new' });
});

export default Router;
