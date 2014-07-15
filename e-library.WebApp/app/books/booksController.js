(function () {

    var app = angular.module("eLibrary");

    var booksController = function ($scope, $modal, $http, $log) {

      var promise = $http.get("http://localhost:56619/api/books");

      promise.then(function (resonse) {
        $log.log("promise.then");
        $scope.books = resonse.data;
        $scope.RecordCount = $scope.books.length;
      });

      
        $scope.open = function () {
            $log.log("Open ");

            var bookModalWindow = $modal.open({
                templateUrl: "app/books/book.html",
                controller: "bookController"
            });

            bookModalWindow.result.then(function () {

                $log.log("result.then");

            }, function () {
                $log.log('Modal dismissed at: ' + new Date());
            });
        };
    };

    app.controller("booksController", booksController);

}());