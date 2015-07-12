Players = new Mongo.Collection("players");


if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Players.find().count() === 0) {
      var names = ["Liz Penny", "Isabella Tea",
                   "Nick Ferraro", "Chris Schepman", "Adam Van Antwerp", "John Games", "Alexis Rodriguez", "Andrey Azov", "Charles  Crame", "Chris Griffis", "Cliff Saporta Cheng", "David Craven", "Diedra Rater", "Derek Olson", "Eric King", "Greg Varias", "Hailey Foster", "Jonathan Mason", "Kamerynn Harrah", "Kevin Chiang", "Kwang Kim", "Logan Low", "Luke Savage", "Marq Short", "Nathaniel Parrish", "Nick Balestra", "Owen Dismuke", "Peter Richmond", "Wesley Tsai", "Zach Sebag", "Syed Jafri"];
      _.each(names, function (name) {
        Players.insert({
          name: name,
          score: 0
        });
      });
    }
  });
}