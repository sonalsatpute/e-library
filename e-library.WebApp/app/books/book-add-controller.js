(function() {
    
    var bookAddController = function ($scope, $log, libraryApi, Library, message) {
        
        $scope.library = Library;
        
        var addBook = function (book) {
            message.info("Saving the book " + book.title);
            libraryApi.addBook(book)
                .then(function(newBook) {
                    Library.addBook(newBook);
                    Library.modalWindow.close();
                    message.success("Book saved.");
                }, function(reason) {
                    message.error("Unable to save the book.");
                    $log.log(reason);
                });
        };

        var cancel = function () {
            Library.modalWindow.dismiss();
        };

        $scope.addBook = addBook;
        $scope.cancel = cancel;
    };

    var app = angular.module("eLibrary");
    app.controller("bookAddController", bookAddController);

})();