(function() {

    var bookEditController = function($scope, library, Search) {
        $scope.search = Search;

        var onUpdated = function(book) {
            var index = Search.books.indexOf(book);
            Search.books.splice(index, 1);
            Search.books.push(book);

            alert("Updated!!");

        };

        var onError = function(reasone) {
            
        }

        var editBook = function(book) {
            library.editBook(book).then(onUpdated, onError);
        };

        $scope.editBook = editBook;
    };

    var app = angular.module("eLibrary");
    app.controller("bookEditController", bookEditController);

})();