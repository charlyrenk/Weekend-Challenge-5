myApp.controller('RentalsController', ['RentalsService', 
function (RentalsService) {
    console.log('Rentals Controller loaded.');
    
    var self = this;
   self.rentals = RentalsService.rentals;
}]);