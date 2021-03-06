import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordCreatedAt: DS.attr('date'),
  isDisabled: DS.attr('boolean'),

  //relationships, if any
  updatedBy: DS.belongsTo('user'),
  shelterClientAdditionalStaffs: DS.hasMany('shelter-client-additional-staff'),
  userRoles: DS.hasMany('user-role'),
  person: DS.belongsTo('person')
});
