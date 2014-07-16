(function () {

    var app = angular.module("eLibrary");

    var booksController = function ($scope, $modal, $http, $log, Search, library) {

        $scope.search = Search;

        var onBooksCompleted = function (data) {
            $log.log("onBooksCompleted");
            $scope.books = data;
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
    };

    app.controller("booksController", booksController);

}());