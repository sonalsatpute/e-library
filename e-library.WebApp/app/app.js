(function () {

    var app = angular.module("eLibrary", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/books/search.html",
                controller: "searchController"
            })
            .otherwise({ redirectTo: "/" });
    });

}());