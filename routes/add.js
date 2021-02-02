var data = require("../data.json");

exports.addFriend = function(request, response) {
  var newFriend = {
    "name": request.query.name,
    "description": request.query.name,
    "imageURL": "http://lorempixel.com/400/400/people/"
  }
  data.friends.push(newFriend);
  response.render('index', data);
  console.log("Added new friend");
}