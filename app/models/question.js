import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(),
  author: DS.attr(),
  topic: DS.attr(),
  image: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
