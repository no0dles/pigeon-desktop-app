angular.module('pigeon.chat').controller('ChatCtrl', function ($scope, $state, UserFactory) {

    if(!UserFactory.isRegistered()) {
        $state.go('registration.welcome');
    }

    $scope.users = [
        {
            username: 'pascal',
            avatar: {
                eyes: 'eyes1',
                nose: 'nose2',
                mouth: 'mouth1',
                color: '#ff6a00'
            }
        },
        {
            username: 'lisa',
            avatar: {
                eyes: 'eyes2',
                nose: 'nose4',
                mouth: 'mouth3',
                color: '#6aff00'
            }
        },
        {
            username: 'martina',
            avatar: {
                eyes: 'eyes9',
                nose: 'nose7',
                mouth: 'mouth5',
                color: '#006aff'
            }
        },
        {
            username: 'lisa',
            avatar: {
                eyes: 'eyes2',
                nose: 'nose4',
                mouth: 'mouth3',
                color: '#6aff00'
            }
        },
        {
            username: 'martina',
            avatar: {
                eyes: 'eyes9',
                nose: 'nose7',
                mouth: 'mouth5',
                color: '#006aff'
            }
        },
        {
            username: 'lisa',
            avatar: {
                eyes: 'eyes2',
                nose: 'nose4',
                mouth: 'mouth3',
                color: '#6aff00'
            }
        },
        {
            username: 'martina',
            avatar: {
                eyes: 'eyes9',
                nose: 'nose7',
                mouth: 'mouth5',
                color: '#006aff'
            }
        }
    ];
});
