define(function() {
	function Controller($scope, dog, cat) {
		dog.addListener(function() { cat.runAway(); });
		$scope.dog = dog;
	}

	return Controller;
});