var main = require('remote').require('./app/registration/key/main');

angular.module('pigeon.registration').controller('RegistrationCtrl', function ($scope, $state, UserFactory) {
    $scope.formData = {
        keySize: 2048,
        key: null,
		avatar: {
			eyes: 'eyes1',
			nose: 'nose2',
			mouth: 'mouth1',
			color: '#DA4453'
		},
        security: 1,
        performance: 2
    };

    $scope.getSecurity = function (value) {
        if(value == 0) return "average";
        if(value == 1) return "good";
        if(value == 2) return "ridiculous";
        if(value == 3) return "insane";
    };

    $scope.getPerformance = function (value) {
        if(value == 0) return "slow";
        if(value == 1) return "average";
        if(value == 2) return "fast";
        if(value == 3) return "ludicrous";
    };

    $scope.getExplanation = function (keySize) {
        if(keySize == 1024)
            return 'You\'re save from curious neighbours and your "hacker" friends without any performance issues on all devices';
        if(keySize == 2048)
            return 'You\'re save from evil organisations which are trying to sell your personal data and still get good performance';
        if(keySize == 4096)
            return 'You\'re save from governments that monitors all your important conversations and are able to wait a little bit longer';
        if(keySize == 8192)
            return 'You\'re save from aliens cracking your messages in space and don\'t care about performance at all';
        return '';
    };

    $scope.$watch('formData.security', function () {
        $scope.formData.performance = 3 - $scope.formData.security;
        $scope.formData.keySize = Math.pow(2, 10 + $scope.formData.security);
    });

    $scope.$watch('formData.performance', function () {
        $scope.formData.security = 3 - $scope.formData.performance;
        $scope.formData.keySize = Math.pow(2, 10 + $scope.formData.security);
    });

    $scope.$watch('formData.keySize', function () {
        $scope.formData.key = null;

        main.getKeyPair($scope.formData.keySize)
            .then(function (result) {
                $scope.$apply(function(){
                    $scope.formData.key = result;
                });
            });
    });

    $scope.register = function () {
        //$state.go('registration.complete');
        UserFactory.registered = true;
        $state.go('chat');
    };
});
