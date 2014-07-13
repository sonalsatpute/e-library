(function () {

    var app = angular.module("eLibrary");

    var booksController = function ($scope, $modal, $log) {

        $scope.book = "new book... .. .";

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