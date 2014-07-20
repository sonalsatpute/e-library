(function() {

    var mainController = function($scope, library, libraryApi, message) {
        $scope.library = library;

        message.info("Featching book from searver.");

        libraryApi.getBooks()
            .then(function(data) {
                library.addBooks(data);
                message.success("Book list loaded.");
            }, function(reasone) {
                message.error("Could not fetch data from server.");
                $log.log(reasone);
            });

    };

    var app = angular.module("eLibrary");
    app.controller("mainController", mainController);

}());