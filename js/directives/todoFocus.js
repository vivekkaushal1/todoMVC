'use strict';

/** Focus on element when it is true */

todomvc.directive('todoFocus', function todoFocus ($timeout) {
	return function (scope, elem, attrs) {
		scope.$watch(attrs.todoFocus, function (newVal) {
			if (newVal) {
				$timeout(function () {
					elem[0].focus();
				}, 0, false);
			}
			
		});
	};
});