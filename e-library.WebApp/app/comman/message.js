(function () {

    var message = function () {

        toastr.options = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

        var clear = function () {
            toastr.clear();
        };

        var success = function (title, text) {
            toastr.success(title, text);
        };

        var info = function (title, text) {
            toastr.info(title, text);
        };

        var warning = function (title, text) {
            toastr.warning(title, text);
        };
        
        var error = function (title, text) {
            toastr.error(title, text);
        };

        return {
            success: success,
            info: info,
            warning: warning,
            error: error,
            clear : clear
        };
    };

    var app = angular.module("eLibrary");
    app.factory("message", message);
    
})();