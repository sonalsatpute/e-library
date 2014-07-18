(function () {

    var searchController = function ($scope, Library, libraryApi, message) {
        $scope.library = Library;

        
    };

    var app = angular.module("eLibrary");
    app.controller("searchController", searchController);

}());