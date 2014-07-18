(function() {

    var app = angular.module("eLibrary", ["ngRoute", "ui.bootstrap"]);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/books/book-list.html",
                controller: "bookListController"
            })
            .otherwise({ redirectTo: "/" });
    });

}());