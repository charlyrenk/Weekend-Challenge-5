myApp.service('RentalsService', ['$http', function($http) {
    console.log('Rentals service loaded.');

    var self = this;
    self.rentals = { list: [] };

    self.getRentals= function() {
        $http.get('/rentals').then(function(response) {
            self.rentals.list = response.data;

            console.log('get response: ', self.rentals.list);
        });
    };

    self.getRentals();
    
}]);