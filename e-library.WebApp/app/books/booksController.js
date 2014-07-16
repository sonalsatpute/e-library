(function () {

    var app = angular.module("eLibrary");

    var booksController = function ($scope, $modal, $http, $log, Search, library) {

        $scope.search = Search;
        
        var onBooksCompleted = function (data) {
            $log.log("onBooksCompleted");
            Search.books = data;
        };

        var onBookDeleted = function(book, index) {
            Search.books.splice(index, 1);
            alert(book.title +" delete success!");
        };

        var onError = function (reason) {
            $log.log(reason);
            $scope.error = "Could not fetch the data.";
        };

        library.getBooks().then(onBooksCompleted, onError);

        var newBook = function (book) {
            Search.book = book;
            alert(Search.book.title);
            var bookModalWindow = $modal.open({
                templateUrl: "app/books/book.html",
                controller: "booksController"
            });

            bookModalWindow.result.then(function () {

                Search.book = {};
                $log.log("result.then");

            }, function () {
                Search.book = {};
                $log.log('Modal dismissed at: ' + new Date());
            });
        };

        var editBook = function(id) {
            library.getBook(id)
                .then(function (data) {

                    newBook(data);
            }, onError);
        }

        var deleteBook = function (book) {
            var index = Search.books.indexOf(book);
            var result = confirm("Are you sure, you want to delte '" + Search.books[index].title + "' ?");
            if (result == true) {
                library.deleteBook(book.id).then(onBookDeleted(book, index), onError);
            }
        };

        $scope.newBook = newBook;
        $scope.editBook = editBook;
        $scope.deleteBook = deleteBook;
        


    };

    app.controller("booksController", booksController);

}());