(function () {

    'use strict';

    angular.module('app.userManagement').controller('authorityManagementController', authorityManagementController);

    authorityManagementController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams'
    ];

    function authorityManagementController($scope, $rootScope, $cookies, $state, NgTableParams) {
        $scope.vm = {};
        $scope.vm.menuList = [
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
        ]
        $scope.vm.tableParams = new NgTableParams(
            { count: 100 },
            { dataset: $scope.vm.menuList}
        );
    }
})();