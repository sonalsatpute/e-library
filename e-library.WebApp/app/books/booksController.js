(function () {

    var app = angular.module("eLibrary");

    var booksController = function ($scope, $location) {

        $scope.open = function () {
            console.log("Open ");
            return false;
        };
    };

    app.controller("booksController", booksController);

}());