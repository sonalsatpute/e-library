(function () {

    var app = angular.module("eLibrary");

    app.factory("Lib", function() {
        return { book: {}, books: [] }
    });
});