angular.module('pigeon.avatar').directive('avatar', function() {
	return {
		restrict: 'E',
		replace: 'true',
		templateUrl: 'app/avatar/directive.html',
		scope: {
			eyes: '=',
			nose: '=',
			mouth: '=',
			color: '='
		},
		link: function(scope, elem, attrs) {

		}
	};
});
