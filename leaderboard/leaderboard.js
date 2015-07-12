if (Meteor.isClient) {
  Template.leaderboard.helpers({
    players: function () {
      return Players.find({}, { sort: { score: -1, name: 1 } });
    }
  });

  Template.leaderboard.events({
    'click .player': function () {
      Players.update({_id: this._id}, {$inc: {score: 5}});
    }
  });
}
