(function() {
    var app = angular.module("eLibrary");

    var bookController = function ($scope, $modalInstance,$log,data) {

        $scope.data = data;

        $scope.save = function () {
            $log.log("save");
            $modalInstance.close("save");
            
        };

        $scope.cancel = function () {
            $log.log("cancel");
            $modalInstance.dismiss('cancel');
        };

    };

    app.controller("bookController", bookController);
})();