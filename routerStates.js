define(function() {
	return function($stateProvider, $urlRouterProvider) {
		$stateProvider.state("cat", {
			url: "cat",
			templateUrl: "cat/cat.html",
			controller: "CatController"
		});

		$stateProvider.state("dog", {
			url: "dog",
			templateUrl: "dog/dog.html",
			controller: "DogController"
		});

		$stateProvider.state("index", {
			url: "/",
			template: "<a ui-sref='cat'>Cat</a><a ui-sref='dog'>Dog</a>"
		});

		$urlRouterProvider.otherwise("/")
	};
});
