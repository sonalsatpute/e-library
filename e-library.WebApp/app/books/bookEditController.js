(function() {

    var bookEditController = function($scope, library, Search) {
        $scope.search = Search;

        var remove = function (bookId) {
            var index = -1;
            var books = Search.books;
            books.forEach(function(item) {
                index++;
                if (item.id == bookId) {
                    Search.books.splice(index, 1);
                }
            });
        };


        var onUpdated = function(book) {
            remove(book.id);
            Search.books.push(book);
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