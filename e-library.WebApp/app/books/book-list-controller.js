(function () {

    var bookListController = function ($scope, $modal, $log, Library, libraryApi, message) {

        $scope.library = Library;

        var newBook = function () {
            Library.book = {};
            Library.modalWindow = $modal.open({
                templateUrl: "app/books/book-add.html"
            });
        };

        var editBook = function (book) {
            message.info("Getting book details.");
            libraryApi.getBook(book.id)
                .then(function (data) {
                    Library.book = data;
                    message.success("Book details are ready to edit.");
                    Library.modalWindow = $modal.open({
                        templateUrl: "app/books/book-edit.html",
                        controller: "bookEditController"
                    });
                }, function (reason) {
                    message.error("Unable to get the deails from server.");
                    $log.log(reason);
                });
        };

        var deleteBook = function(book) {

            var index = Library.books.indexOf(book);

            var result = confirm("Are you sure, you want to delte '" + Library.books[index].title + "' ?");
            
            if (result == true) {
                message.info("Deleting the book from server.");
                libraryApi.deleteBook(book.id)
                    .then(function() {
                        Library.books.splice(index, 1);
                        message.clear();
                        message.success("Book deleted.");
                    }, function (reason) {
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