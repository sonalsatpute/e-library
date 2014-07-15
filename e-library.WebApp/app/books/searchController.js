(function() {

    var app = angular.module("eLibrary");

    var searchController = function ($scope, Search) {

        $scope.search = Search;

        //$scope.filter = function (value) {
        //    console.log(search.by + " " + value);
        //    return false;
        //};
    };

    app.controller("searchController", searchController);

}());