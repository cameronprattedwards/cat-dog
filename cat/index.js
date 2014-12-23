define(["angular", "cat/cat", "cat/catController"], function(angular, cat, CatController) {
	angular.module("cat", [])
		.value("cat", cat)
		.controller("CatController", CatController);
});