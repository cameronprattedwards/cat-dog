define(["angular", "controller", "barkButton", "routerStates", "cat/index", "dog/index", "angular-ui-router"], function(angular, controller, barkButton, routerStates) {
	angular.module("cat-dog", ["ui.router", "cat", "dog"])
		.controller("Controller", controller)
		.config(routerStates);
});
