(function() {

    var app = angular.module("eLibrary");

    var searchController = function ($scope, Search) {
        $scope.search = Search;
    };

    app.controller("searchController", searchController);

}());