(function () {

    var bookEditController = function ($scope, libraryApi, Library, message) {
        $scope.library = Library;

        var update = function (book) {
            var books = Library.books;
            books.forEach(function (item) {
                if (item.id == book.id) {
                    item.titile = book.titke;
                    item.isbn = book.isbn;
                    item.author = book.author;
                }
            });
            message.success("Book saved.");
        };
        
        var onUpdated = function (book) {
            update(book);
            Library.modalWindow.close();
        };

        var onError = function (reasone) {
            Library.modalWindow.dismiss(reasone);
        };

        var editBook = function (book) {
            message.info("Saving book");
            libraryApi.editBook(book).then(onUpdated, onError);
        };

        var cancel = function () {
            Library.modalWindow.dismiss("Cancel");
        };

        $scope.editBook = editBook;
        $scope.cancel = cancel;

    };

    var app = angular.module("eLibrary");
    app.controller("bookEditController", bookEditController);

})();