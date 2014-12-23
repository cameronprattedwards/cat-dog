define(function() {
	var listeners = [];
	return {
		addListener: function(callback) {
			listeners.push(callback);
		},
		bark: function() {
			console.log("Bark bark!");
			listeners.forEach(function(listener) {
				listener();
			});
		}
	};
});