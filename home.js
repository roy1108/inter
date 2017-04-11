angular.module("sunckAXF.homePage", [])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: "home",
				url: "/home",
				templateUrl: "app/pages/home/home.html",
				css: "app/pages/home/home.css",
				controller: "homeController"
			})
	})
	.controller("homeController", function($scope, $timeout) {
//		$scope.flag = true;
//		$timeout(function() {
//			$scope.flag = false;
//		}, 3000);
	})