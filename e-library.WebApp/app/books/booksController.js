(function () {

    var app = angular.module("eLibrary");

    var booksController = function ($scope, $modal, $http, $log, Search, library) {

        $scope.search = Search;
        
        var onBooksCompleted = function (data) {
            $log.log("onBooksCompleted");
            Search.books = data;
        };

        var onError = function (reason) {
            $log.log("onErro");
            $scope.error = "Could not fetch the data.";
        };

        library.getBooks().then(onBooksCompleted, onError);

        $scope.open = function () {
            $log.log("Open ");

            var bookModalWindow = $modal.open({
                templateUrl: "app/books/book.html",
                controller: "bookController"
            });

            bookModalWindow.result.then(function () {

                $log.log("result.then");

            }, function () {
                $log.log('Modal dismissed at: ' + new Date());
            });
        };


        

        var deleteBook = function (book) {
            var index = Search.books.indexOf(book);
            var result = confirm("Are you sure, you want to delte '" + Search.books[index].title + "' ?");
            if (result == true) {
                library.deleteBook(book.id).then(function () {
                    Search.books.splice(index, 1);
                    alert("delete success");
                }, onError);
                
            }
        };


        $scope.deleteBook = deleteBook;


    };

    app.controller("booksController", booksController);

}());