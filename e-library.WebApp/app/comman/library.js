(function () {
    
    var library = function ($http) {

        var getBooks = function() {
            return $http.get("http://localhost:56619/api/books")
                .then(function(response) {
                    return response.data;
                });
        };

        var deleteBook = function(id) {
            return $http.delete("http://localhost:56619/api/books/" + id)
                .then(function(response) {
                return response.data;
            });
        };

        return {
            getBooks: getBooks,
            deleteBook: deleteBook
        };
    };

    var app = angular.module("eLibrary");
    app.factory("library", library);

})();