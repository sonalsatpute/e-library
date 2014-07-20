(function() {

    var library = function() {

        var books = [];

        var addBooks = function(books) {
            this.books = books;
        };

        var addBook = function(book) {
            this.books.unshift(book);
        };

        var editBook = function(book) {
            this.books.forEach(function(item) {
                if (item.id == book.id) {
                    item.title = book.title;
                    item.isbn = book.isbn;
                    item.author = book.author;
                    return;
                }
            });
        };

        var deleteBook = function (book) {
            var index = this.books.indexOf(book);
            if (index != 0) {
                this.books.splice(index, 1);
            }
        };

        return {
            sortBy: "title",
            filter: "",
            modalWindow: {},
            books: books,
            book: {},
            addBooks: addBooks,
            addBook: addBook,
            editBook: editBook,
            deleteBook: deleteBook
        };
    };


    var app = angular.module("eLibrary");
    app.factory("library", library);
})();