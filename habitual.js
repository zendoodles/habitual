Habits = new Mongo.Collection("habits");

if (Meteor.isClient) {
  Template.body.helpers({
    habits: function () {
      return Habits.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
