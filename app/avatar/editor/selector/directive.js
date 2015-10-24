angular.module('pigeon.avatar.editor.selector').directive('selector', function() {
	return {
		restrict: 'E',
		replace: 'true',
		templateUrl: 'app/avatar/editor/selector/directive.html',
		scope: {
			values: '=',
			value: '='
		},
		link: function(scope, elem, attrs) {
			scope.indexValue = function () {
				return scope.values.lastIndexOf(scope.value);
			};

			scope.changeIndex = function (value) {
				var currentIndex = scope.indexValue();

				if(currentIndex == -1) return;

				currentIndex += value;

				if(currentIndex < 0) {
					currentIndex = scope.values.length - 1;
				} else if(currentIndex > scope.values.length - 1) {
					currentIndex = 0;
				}

				scope.value = scope.values[currentIndex];
			};

			scope.getText = function (value) {
				var regex = /([a-z])([0-9])/;
				if(regex.test(value))
					value = value.replace(regex, '$1 $2');
				return scope.capitalize(value);
			};

			scope.capitalize = function(value) {
				return value.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
			};

			scope.next = function () {
				scope.changeIndex(1);
			};

			scope.prev = function () {
				scope.changeIndex(-1);
			};

		}
	};
});
