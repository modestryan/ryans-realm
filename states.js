/************************** 
 * routes.js - Provide angular-ui routes for different 'states'
 * 
 * This will serve up the different pages using the routing defined by /routes/main.js
 *
 ********/

myApp.config(function ($stateProvider,$urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('welcome', {
			url: '/',
			templateUrl: '/welcome'
		})
		.state('about-me', {
			url: '/about-me',
			templateUrl: '/about-me'
		})
		.state('site-statistics', {
			url: '/site-statistics',
			templateUrl: '/site-statistics'
		})
});