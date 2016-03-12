angular.module('services', [])

.factory('Data', function Data() {
	// Service logic
	// ...
	var user = {
			name: "you",
			email: "u@u.dkdkdkd",
			balance: 100.1,
		    open_trades: [ 'la', 'lal', 'ala' ],
		    closed_trades: [ 'udd', 'ud' , 'udd']
	};

	var settings = {}

	return {
		user: user,
		settings: settings

	}
});
