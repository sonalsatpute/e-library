(function() {
    
    var bookAddController = function ($scope, library, Search) {
        $scope.search = Search;

        var onAdded = function(book) {
            Search.books.unshift(book);
        };

        var onError = function(reasone) {};


        var addBook = function (book) {
            library.addBook(book).then(onAdded, onError);
        };

        $scope.addBook = addBook;
    };

    var app = angular.module("eLibrary");
    app.controller("bookAddController", bookAddController);

})();