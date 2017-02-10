(function (angular) {
    angular.module('app').controller('employeesBrowseController', [
        '$scope', '$state', '$rootScope', '$controller', 'toaster', '$http', 'confirmService',
    function ($scope, $state, $rootScope, $controller, toaster, $http, confirmService) {

        $scope.items = [];
        $scope.removing = removing;

        $http({
            method: 'GET',
            url: 'api/employee'
        })
         .success(function (data) {
             $scope.items = data;
         });

        function removing(id, e) {
            e && e.preventDefault();
            confirmService.openModal('Deleting', 'Are you sure?', function () {
                remove(id)
            });
        }

        function remove(id) {
            $http({
                method: 'DELETE',
                url: 'api/employee/'+id,
                //data: id
            })
             .success(function () {
                 removeById(id);
            });
        }

        function removeById(id) {
            for (var i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].Id == id) {
                    $scope.items.splice(i, 1);
                    break;
                }
            }
        }

    }]);
})(angular);