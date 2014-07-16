(function () {
    
    var library = function ($http) {

        var getBooks = function() {
            return $http.get("http://localhost:56619/api/books")
                        .then(function(response) {
                            return response.data;
                        });
        };

        return {
            getBooks: getBooks
        };
    };

    var app = angular.module("eLibrary");
    app.factory("library", library);

})();