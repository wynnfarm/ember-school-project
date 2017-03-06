import Ember from 'ember';

export default Ember.Controller.extend({
  newItem:null,
  studentCount: null,

  totalChefs: Ember.computed.alias('model.length'),
  chefStudents: Ember.computed.mapBy('model', 'students'),
  totalStudents: Ember.computed.sum('chefStudents'),
  availableChefs: Ember.computed.filterBy('model', 'isAvailable', true),
  actions: {
    makeUnavailable(chef){
      chef.set('isAvailable', false);
      chef.save();
    },
    makeAvailable(chef){
      chef.set('isAvailable', true);
      chef.save();
    },
    saveNewItem(){
      this.store.createRecord('chef',{
        isAvailable: false,
        name: this.get('newItem'),
        students: 0
      }).save();
      this.set('newItem', '');
    },
    destroyItem(chef){
      chef.destroyRecord();
    },
    addStudent(chef){
      chef.incrementProperty('students');
      chef.save();
    },
    subtractStudent(chef){
      if(chef.get('students') > 0){
        chef.decrementProperty('students');
      }
      chef.save();
    }
  }
});
