angular.module('pigeon', ['ui.router', 'pigeon.registration', 'pigeon.chat'])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/chat');

        $stateProvider
            .state('registration', {
                url: '/registration',
                controller: 'RegistrationCtrl',
				template: '<ui-view></ui-view>',
				abstract: true
            })
			.state('registration.welcome', {
				url: '/registration/welcome',
				templateUrl: 'app/registration/welcome-view.html'
			})
			.state('registration.profile', {
				url: '/registration/profile',
				templateUrl: 'app/registration/profile-view.html'
			})
			.state('registration.security', {
				url: '/registration/security',
				templateUrl: 'app/registration/security-view.html'
			})
            .state('registration.complete', {
                url: '/registration/complete',
                templateUrl: 'app/registration/complete-view.html'
            })
            .state('chat', {
                url: '/chat',
                templateUrl: 'app/chat/view.html',
                controller: 'ChatCtrl'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'app/settings/view.html',
                controller: 'SettingsCtrl'
            })

    })

    .factory('UserFactory', function () {
        var factory = {};

        factory.registered = true;
        factory.isRegistered = function () {
            return this.registered;
        };

        return factory;
    });
