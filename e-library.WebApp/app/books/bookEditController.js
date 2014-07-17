(function() {

    var bookEditController = function($scope, library, Search) {
        $scope.search = Search;

        var onUpdated = function(book) {
            
        };

        var onError = function() {
            
        }

        var updateBook = function(book) {
            library.update().then(onUpdated, onError);
        };

        $scope.updateBook = updateBook;
    };

    var app = angular.module("eLibrary");
    app.controller("bookEditController", bookEditController);

})();