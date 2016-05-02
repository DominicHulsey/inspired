app.service('QuoteService', function($http){
	this.getQuote =  function(){
		var url = 'http://bcw-getter.herokuapp.com/?url=';
		var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
		var apiUrl = url + encodeURIComponent(url2);
		return $http.get(apiUrl).then(function(res){
			console.log('Quote Data:', res.data)
			return res.data;
		})
	}
})