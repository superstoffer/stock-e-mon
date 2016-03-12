angular.module('services', [])

.factory('Data', function Data() {
	// Service logic
	// ...
	var performance = {
		wins: [],
		earnings: 10,
		prospect: 0.5, // value [0:1.]
		prospect_earnings: 100, // historic value of earnings of succesful trades
	}

	var user = {
			name: "you",
			email: "u@u.dkdkdkd",
			balance: 100.1,
		    open_trades: [ 'la', 'lal', 'ala' ],
		    closed_trades: [ 'udd', 'ud' , 'uddd'],
		    performance: performance
	};

	var settings = {}

	return {
		user: user,
		settings: settings

	}
})

.factory('Trade', function Trade() {
	// Service logic
	// ...

	return {
		open: 'instrument',
		close: ['price', 'time'],
		prospect: ['median of performance', 'performance of owner'],
		pool: {
			total: 100,
			user_position: 10,
			risk: 0.2
		}
	}
	
});
