import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  name: attr('string'),
  isAvailable: attr('boolean'),
  students: attr('number'),
  description:attr('string')
});
