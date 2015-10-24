angular.module('pigeon.avatar.editor').directive('avatarEditor', function() {
	return {
		restrict: 'E',
		replace: 'true',
		templateUrl: 'app/avatar/editor/directive.html',
		scope: {
			eyes: '=',
			nose: '=',
			mouth: '=',
			color: '='
		},
		link: function(scope, elem, attrs) {
			scope.availableEyes = [
				'eyes1', 'eyes2', 'eyes3',
				'eyes4', 'eyes5', 'eyes6',
				'eyes7', 'eyes9', 'eyes10'
			];

			scope.availableNoses = [
				'nose2', 'nose3', 'nose4',
				'nose5', 'nose6', 'nose7',
				'nose8', 'nose9'
			];

			scope.availableMouths = [
				'mouth1', 'mouth3', 'mouth5',
				'mouth6', 'mouth7', 'mouth9',
				'mouth10', 'mouth11'
			];

			scope.availableColors = [
				'#DA4453', '#E9573F', '#F6BB42',
				'#8CC152', '#37BC9B', '#3BAFDA',
				'#4A89DC', '#967ADC', '#D770AD', '#E6E9ED', '#AAB2BD'
			];

			scope.randomize = function () {
				scope.eyes = scope.availableEyes[scope.randomNumber(scope.availableEyes.length)];
				scope.nose = scope.availableNoses[scope.randomNumber(scope.availableNoses.length)];
				scope.mouth = scope.availableMouths[scope.randomNumber(scope.availableMouths.length)];
				scope.color = scope.availableColors[scope.randomNumber(scope.availableColors.length)];
			};

			scope.randomNumber = function (max) {
				return Math.min(Math.round(Math.random()*max), max-1);
			}
		}
	};
});
