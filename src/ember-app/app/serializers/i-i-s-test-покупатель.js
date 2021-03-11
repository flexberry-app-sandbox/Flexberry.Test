import { Serializer as ПокупательSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-покупатель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПокупательSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
