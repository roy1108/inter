angular.module("sunckAXF", ["ui.router", "angularCSS",
		"sunckAXF.homePage",
		"sunckAXF.marketPage",
		"sunckAXF.cartPage",
		"sunckAXF.minePage"
	])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
	})