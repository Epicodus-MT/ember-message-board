import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  // rating: DS.attr(),
  reply: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
});
