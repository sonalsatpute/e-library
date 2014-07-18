(function () {

    var Library = function () {

        var books = [];

        var addBooks = function (books)
        {
            this.books = books;
        };

        var addBook = function (book) {
            this.books.unshift(book);
        };

        var editBook = function() {
        };

        var deleteBook = function(id) {
        };

        return {
            sortBy: "title",
            filter: "",
            modalWindow: {},
            books: books,
            book: {},
            addBooks: addBooks,
            addBook: addBook
        };
    };


    var app = angular.module("eLibrary");
    app.factory("Library", Library);


    //app.factory("Search", function () {

    //    return {
    //        by: "Title",
    //        q: "",
    //        books: [],
    //        book: {},
    //        modalWindow: {}
    //    };
    //});

})();