import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('покупатель', 'Покупательs');
inflector.irregular('продажа', 'Продажаs');
inflector.irregular('продажи', 'Продажиs');
inflector.irregular('склад', 'Складs');
inflector.irregular('товар', 'Товарs');

export default {};
