'use strict';

/** Retrive n store data in localstorage */

todomvc.factory('todoStorage', function () {
	var STORAGE_ID = 'todos-angularjs'

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			// body...
		},

		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
			// body...
		}
	};
});