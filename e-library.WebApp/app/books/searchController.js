(function() {

    var app = angular.module("eLibrary");

    var searchController = function ($scope, $location) {

        $scope.searchField = "name";

        $scope.search = function (value) {
            console.log($scope.searchFiled + " " + value);
            return false;
            $location.path("bookList" + bookName);

        };

        $scope.bookName = "";
    };

    app.controller("searchController", searchController);

}());