ACCOUNT_SID = "AC24e11a739579776a5b9dd5244d05d908";
AUTH_TOKEN = "f67b01477f2e4fd5402d0d2ba56aba6d";
Meteor.methods({
	'sendSMS': function(msg, number) {
		twilio = Twilio(ACCOUNT_SID, AUTH_TOKEN);
		/*twilio.sendSms({
			to:number,
			from: '+18127164814',
			body: msg
		}, function(err, responseData) {
			if (!err) {
				return responseData;
			} else {
				console.log(err);
			}
		});*/
		console.log(msg, number);
	}
});
