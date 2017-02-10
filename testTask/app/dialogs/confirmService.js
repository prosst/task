(function (angular) {
    'use strict';
    app.factory('confirmService', ['$uibModal', function ($modal) {

        this.openModal = function (title, label, okCallback, cancelCallback) {
            var modalInstance = $modal.open({
                templateUrl: 'app/tpl/dialogs/confirm_dialog.html',
                controller: 'confirmController',
                backdrop: 'static',
                resolve: {
                    options: function () {
                        return { title: title, label: label }
                    }
                }
            });
            modalInstance.result.then(function () {
                okCallback && okCallback();
            }, function () {
                cancelCallback && cancelCallback();
            });
        }

        return this;

    }]);
})(angular);
