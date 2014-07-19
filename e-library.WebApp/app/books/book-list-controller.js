(function() {

    var bookListController = function ($scope, $modal, $log, library, libraryApi, message) {

        $scope.library = library;

        var newBook = function() {
            library.book = {};
            library.modalWindow = $modal.open({
                templateUrl: "app/books/book-add.html"
            });
        };

        var editBook = function(book) {
            message.info("Getting book details.");
            libraryApi.getBook(book.id)
                .then(function(data) {
                    library.book = data;
                    message.success("Book details are ready to edit.");
                    library.modalWindow = $modal.open({
                        templateUrl: "app/books/book-edit.html",
                        controller: "bookEditController"
                    });
                }, function(reason) {
                    message.error("Unable to get the deails from server.");
                    $log.log(reason);
                });
        };

        var deleteBook = function(book) {

            var index = library.books.indexOf(book);

            var result = confirm("Are you sure, you want to delete '" + library.books[index].title + "' ?");

            if (result == true) {
                message.info("Deleting the book from server.");
                libraryApi.deleteBook(book.id)
                    .then(function() {
                        library.books.splice(index, 1);
                        message.success("Book deleted.");
                    }, function(reason) {
                        message.error("Unable to get the deails from server.");
                        $log.log(reason);
                    });
            }
        };

        $scope.newBook = newBook;
        $scope.editBook = editBook;
        $scope.deleteBook = deleteBook;
    };

    var app = angular.module("eLibrary");
    app.controller("bookListController", bookListController);

}());