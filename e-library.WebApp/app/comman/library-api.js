(function () {
    
    var libraryApi = function ($http) {

        var baseBookApiUrl = "http://localhost:56619/api/books";

        var getBooks = function() {
            return $http.get(baseBookApiUrl)
                .then(function(response) {
                    return response.data;
                });
        };

        var getBook = function(id) {
            return $http.get(baseBookApiUrl + "/" + id)
                .then(function (response) {
                    return response.data;
                });
        };

        var deleteBook = function(id) {
            return $http.delete(baseBookApiUrl + "/" + id)
                .then(function(response) {
                return response.data;
            });
        };

        var editBook = function(book) {
            return $http.put(baseBookApiUrl, book)
                .then(function(response) {
                    return response.data;
                });
        };

        var addBook = function(book) {
            return $http.post(baseBookApiUrl, book)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getBooks: getBooks,
            getBook: getBook,
            deleteBook: deleteBook,
            editBook: editBook,
            addBook: addBook
        };
    };

    var app = angular.module("eLibrary");
    app.factory("libraryApi", libraryApi);

})();