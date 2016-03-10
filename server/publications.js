Meteor.publish('posts', function() {
	return Posts.find();

});
//This file allows posts to be added to the page

