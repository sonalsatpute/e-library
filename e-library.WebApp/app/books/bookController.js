(function() {
    var app = angular.module("eLibrary");

    var bookController = function ($scope, $modalInstance, $log, Search) {

        $scope.search = Search;

        $scope.save = function () {
            $log.log("save");
            $modalInstance.close("save");
            
        };

        $scope.cancel = function () {

            alert(Search.title);
            $log.log("cancel");
            $modalInstance.dismiss('cancel');
        };



    };

    app.controller("bookController", bookController);
})();