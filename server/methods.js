ACCOUNT_SID = "AC24e11a739579776a5b9dd5244d05d908";
AUTH_TOKEN = "f67b01477f2e4fd5402d0d2ba56aba6d";
Meteor.methods({
	'sendSMS': function(msg, number) {
		twilio = Twilio(ACCOUNT_SID, AUTH_TOKEN);
		twilio.sendSms({
			to:'+18126142061', // Any number Twilio can deliver to
			from: '+14506667788', // A number you bought from Twilio and can use for outbound communication
			body: 'word to your mother.' // body of the SMS message
		}, function(err, responseData) { //this function is executed when a response is received from Twilio
			if (!err) { // "err" is an error received during the request, if any
				// "responseData" is a JavaScript object containing data received from Twilio.
				// A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
				// http://www.twilio.com/docs/api/rest/sending-sms#example-1
				console.log(responseData.from); // outputs "+14506667788"
				console.log(responseData.body); // outputs "word to your mother."
			}
		});
	}
});
