(function() {

    var bookEditController = function ($scope, $log, library, libraryApi, message) {

        $scope.library = library;

        var editBook = function(book) {

            message.info("Saving book");
            libraryApi.editBook(book)
                .then(function(data) {
                    library.editBook(data);
                    library.modalWindow.close();
                    message.success("Book saved.");
                }, function(reason) {
                    library.modalWindow.dismiss(reason);
                    $log.log(reason);
                });
        };

        var cancel = function() {
            library.modalWindow.dismiss("Cancel");
        };

        $scope.editBook = editBook;
        $scope.cancel = cancel;

    };

    var app = angular.module("eLibrary");
    app.controller("bookEditController", bookEditController);

})();