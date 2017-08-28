myApp.service('ListingsService', ['$http', function($http) {
    console.log('Listings service loaded.');

    var self = this;
    self.listings = { list: [] };

    self.getListings= function() {
        $http.get('/listings').then(function(response) {
            self.listings.list = response.data;

            console.log('get response: ', self.listings, self.listings.list);
        });
    };

    self.getListings();
    
}]);