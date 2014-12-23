define(function() {
	return function(dog) {
		return {
			scope: {},
			link: function(scope, elem) {
				console.log("I'm a directive");
				elem.append("<button>Bark</button>");
				elem.bind("click", function() {
					dog.bark();
				});
			}
		};
	};
});