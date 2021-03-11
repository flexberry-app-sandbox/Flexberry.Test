import { Serializer as СтрокаПродажиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-строка-продажи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтрокаПродажиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
