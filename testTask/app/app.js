var app = angular.module('app',
    [
        'ui.router',  
        'toaster',
        'ui.bootstrap',
        'ui.bootstrap.datetimepicker'
    ]
)
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('employees/Browse');

            $stateProvider

                .state('employees', {
                    url: '/employees',
                    abstract: true,
                    template: '<ui-view/>'
                })
                .state('employees.Browse', {
                    url: '/Browse',
                    templateUrl: 'app/tpl/employees_browse.html',
                    controller: 'employeesBrowseController'
                })
                .state('employees.Create', {
                    url: '/Create',
                    templateUrl: 'app/tpl/employees_create.html',
                    controller: 'employeesCreateController'
                })
        }]
    );