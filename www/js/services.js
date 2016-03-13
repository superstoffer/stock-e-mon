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

	var settings = {
		categories: ['technology', 'services', 'basic materials', 'financial', 'consumer', 'goods', 'healthcare', 'utilities' ]
	};

	var trades = {
		popular: [],
		latest: [],
		byCategory: []
	};

	return {
		user: user,
		settings: settings

	}
})

.factory('Trade', function Trade() {
	// Service logic
	// ...

	return {
		id: 1,
		category: "health service",
		open: 'instrument',
		close: ['price', 'time'],
		prospect: ['median of performance', 'performance of owner'],
		pool: {
			total: 100,
			user_position: 10,
			risk: 0.2
		}
	}
	
})

.factory('Trades', function Trades( $http ){
	var latest = null;
	var categories = []
	var requested = [
	    { id: 1, name: 'Trade 1', category: 'health', type:'call' },
	    { id: 2, name: 'Trade 2', category: 'goods' },
	    { id: 3, name: 'Trade 3', category: 'property' }
  	];

	var requestBackend = function( query ){
		console.log("query from requestBackend ", query )
		var http_query = 'https://api.duckduckgo.com/?q=' + query + '&format=json&pretty=0&callback=JSON_CALLBACK';
	    $http.jsonp( http_query ).
          success( function( data, status, headers, config ){
			console.log("successs request ", data );            
        }).
          error( function( data, status, headers, config ){
            console.log( "http query failed", status, headers )
        })
	}

	var createTrade = function(){
		console.log("trade created")
	};
	var deleteTrade = function(){
		console.log("trade deleted")
	};

	return {
		request: function request( q ){
			console.log("trades.request ", q );
			var req = q || "default";
			return requestBackend( req );
		},
		create: function createTrade(){
			return createTrade();
		},
		delete: function deleteTrade(){
			return deleteTrade();
		},
		requested: requested,
		latest: latest
	}
});
