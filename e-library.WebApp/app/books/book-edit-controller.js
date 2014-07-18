(function () {

    var bookEditController = function ($scope, $log, libraryApi, Library, message) {

        $scope.library = Library;

        var editBook = function (book) {

            message.info("Saving book");
            libraryApi.editBook(book)
                .then(function(data) {
                    Library.editBook(data);
                    Library.modalWindow.close();
                    message.success("Book saved.");
                }, function(reason) {
                    Library.modalWindow.dismiss(reason);
                    $log.log(reason);
                });
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