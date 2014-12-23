define(["angular", "dog/dog", "dog/dogController"], function(angular, dog, DogController) {
	angular.module("dog", [])
		.value("dog", dog)
		.controller("DogController", DogController);
});