(function () {

    var app = angular.module("eLibrary");

    var booksController = function ($scope, $modal) {

        $scope.book = "new book... .. .";

        $scope.open = function () {
            console.log("Open ");

            var bookModalWindow = $modal.open({
                templateUrl: "app/books/book.html",
                controller: "bookController"
            });

            bookModalWindow.result.then(function (item) {

                console.write(item);

            }, function () {
                console.write('Modal dismissed at: ' + new Date());
            });
        };
    };

    app.controller("booksController", booksController);

}());