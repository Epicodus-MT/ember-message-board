import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});

// import Ember from 'ember';
//
// var questions = [{
//   id: 1,
//   question: "Where do babies come from?",
//   author: "Angela Merkel",
//   genre: "Reproductive Health",
//   notes: "Keep it PG",
//   image: "https://i.ytimg.com/vi/wfvxTyFJOiU/maxresdefault.jpg"
// }, {
//   id: 2,
//   question: "How to act presidential?",
//   author: "Donnie Trump",
//   genre: "Leadership",
//   notes: "Keep it simple",
//   image: "http://assets.nydailynews.com/polopoly_fs/1.22081.1313689570!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/gal-obama-20-jpg.jpg"
// }, {
//   id: 3,
//   question: "Why am I so handsome?",
//   author: "Justin Trudeau",
//   genre: "Genetics",
//   notes: "Everything is better in Canada",
//   image: "http://imageslogotv-a.akamaihd.net//uri/mgid:ao:image:logotv.com:239396?quality=0.8&format=jpg"
// }];
//
// export default Ember.Route.extend({
//   model() {
//     return questions;
//   },
// });
