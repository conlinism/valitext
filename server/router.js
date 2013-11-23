Router.map(function() {
	this.route('API', {
		where:'server',
		path:'/api/sendsms/:phone/:msg',
		action: function() {
			this.response.writeHead(200, {"Content-Type": "application/json"});
			this.response.write('{');
			this.response.write('"phone_number":'+this.params.phone+',');
			this.response.write('"msg":"'+this.params.msg+'"');
			this.response.write(' }');
		},
	});
});
