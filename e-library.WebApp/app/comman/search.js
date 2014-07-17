(function() {
    var app = angular.module("eLibrary");
    app.factory("Search", function () {
        


        return {
            by: "Title",
            q: "",
            books: [],
            book: {}
        }
    });

})();