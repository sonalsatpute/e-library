(function () {

    var app = angular.module("eLibrary", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/books/bookSearch.html",
                controller: "bookSearchController"
            })
            .otherwise({ redirectTo: "/" });
    });

}());