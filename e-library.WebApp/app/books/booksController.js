(function () {

    var app = angular.module("eLibrary");

    var booksController = function ($scope, $modal) {

        $scope.open = function () {
            console.log("Open ");

            var modalInstance = $modal.open({
                templateUrl: 'modal.html'
            });


            return false;
        };
    };

    app.controller("booksController", booksController);

}());