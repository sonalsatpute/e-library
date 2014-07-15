(function() {

    var app = angular.module("eLibrary");

    var searchController = function ($scope, $location) {

        $scope.searchOn = 'Title';

        $scope.search = function (value) {
            console.log($scope.searchOn + " " + value);
            return false;
            $location.path("bookList" + bookName);

        };
    };

    app.controller("searchController", searchController);

}());