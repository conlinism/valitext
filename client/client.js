//client.js
Template.home.events({
	'click .sendSMS': function() {
		Meteor.call('sendSMS', 'this is a test', '+18126142061', function(err, data) {
			if(err) {
				console.log(err);
			} else {
				console.log(data);
			}
		});
	}
});
