(function (angular) {
    'use strict';
    angular.module('app').controller('confirmController', [
        '$scope', '$uibModalInstance', 'options',
            function ($scope, $modalInstance, options) {
                $scope.options = options;

                $scope.ok = function () {
                    $modalInstance.close();

                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };

            }
    ]);
})(angular);
