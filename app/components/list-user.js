import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),

  actions: {
    setUser(user) {
      this.get('currentUser').add(user);
    }
  }
});
