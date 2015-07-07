import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Component.extend({
  tagName: '',
  // value - passed in, required, the value for this radio button
  // groupValue - passed in, required, the currently selected value

  // optionally passed in:
  // disabled - boolean
  // required - boolean
  // name - string

  // is this needed here or just on radio-button-input?
  defaultLayout: null, // ie8 support

  checked: computed('groupValue', 'value', function(){
    return this.get('groupValue') === this.get('value');
  }).readOnly(),

  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  }
});

