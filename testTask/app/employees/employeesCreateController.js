(function (angular) {
    'use strict';
    angular.module('app').controller('employeesCreateController', [
        '$scope', 'toaster', "$http",
        function ($scope, toaster, $http) {
            $scope.item = {};

            $scope.data = {
                JobTitles: [
                  { Name: 'CEO' },
                  { Name: 'Business Analyst' },
                  { Name: 'Developer' },
                  { Name: 'QA' }
                ]
            }; 

            $scope.startDateOptions = {
                dropdownSelector: '.startdate-button',
                startView: 'month',
                minView: 'day'
            };

            $scope.submit = submit;
            $scope.closePage = closePage;

            function submit(isValid) {
                if (!isValid) return;
                $http({
                    method: 'POST',
                    url: 'api/employee',
                    data: $scope.item
                })
                 .success(function () {
                     closePage();
                 });
            }

            function closePage(q, e) {
                e && e.preventDefault();
                history.length > 1 ? history.go(-1) : $state.go('employees.Browse');
            }

            

        }]);

})(angular);