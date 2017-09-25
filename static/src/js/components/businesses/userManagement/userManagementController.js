(function () {

    'use strict';

    angular.module('app.userManagement').controller('userManagementController', userManagementController);

    userManagementController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams'
    ];

    function userManagementController($scope, $rootScope, $cookies, $state, NgTableParams) {
        $scope.vm = {};
        //初始化时间插件
        laydate.render({
            elem: '#startTime', //指定元素
            range: '~',
            theme: '#524f4f'
        });
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
        $scope.vm.showUserAuthentification = function () {
            console.log(1)
            $('#userAuthentification').modal('show')
        }
    }
})();