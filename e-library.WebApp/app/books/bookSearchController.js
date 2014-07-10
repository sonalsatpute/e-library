(function() {

    var app = angular.module("eLibrary");

    var bookSearchController = function ($scope, $location) {

        $scope.search = function (bookName) {
            console.log(bookName);
            $location.path("bookList" + bookName);
        };

        $scope.bookName = "";
    };

    app.controller("bookSearchController", bookSearchController);

}());