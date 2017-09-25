(function () {

    'use strict';

    angular.module('app.userManagement').controller('roleManagementController', roleManagementController);

    roleManagementController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams'
    ];

    function roleManagementController($scope, $rootScope, $cookies, $state, NgTableParams) {
        $scope.vm = {};
        $scope.vm.menuList = [
            {'PK':1,'menuName':'超级管理员','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'一般管理员','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'一级代理','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'二级代理','parentName':'heihei','menuLevelName':'陈俊'},
        ]
        $scope.vm.tableParams = new NgTableParams(
            { count: 100 },
            { dataset: $scope.vm.menuList}
        );
    }
})();