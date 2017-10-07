(function () {

    'use strict';

    angular.module('app.userManagement').controller('userManagementController', userManagementController);

    userManagementController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams',
        '$timeout',
        'userManagementServer'
    ];

    function userManagementController($scope, $rootScope, $cookies, $state, NgTableParams, $timeout, userManagementServer) {
        $scope.vm = {};
        //初始化时间插件
        laydate.render({
            elem: '#startTime', //指定元素udate
            range: '~',
            theme: '#524f4f'
        });

        //获取用户管理列表
        userManagementServer.user_GetUsers().then(function (data) {
            $scope.vm.userList = data.content;
            $scope.vm.tableParams = new NgTableParams(
                { count: 100 },
                { dataset: $scope.vm.userList}
            );
            //初始化开关
            $timeout(function(){
                $('[name="status"]').bootstrapSwitch({
                    onText:"正常",
                    offText:"禁用",
                    onColor:"success",
                    offColor:"warning",
                    size:"small",
                    onSwitchChange:function(event,state){
                        if(state==true){
                            $(this).val("0");
                        }else{
                            $(this).val("1");
                        }
                    }
                })

                $('[name="apiStatus"]').bootstrapSwitch({
                    onText:"开启",
                    offText:"关闭",
                    onColor:"success",
                    offColor:"warning",
                    size:"small",
                    onSwitchChange:function(event,state){
                        if(state==true){
                            $(this).val("0");
                            console.log($scope.vm)
                        }else{
                            $(this).val("1");
                            console.log($scope.vm)
                        }
                    }
                })
            },500);
        })
        $scope.vm.changeStatus = function (_this) {
            console.log(_this)
            if(_this.locked === 0){

            }
        }
        $scope.vm.menuList = [
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
        ]

        $scope.vm.tableParams2 = new NgTableParams(
            { count: 100 },
            { dataset: $scope.vm.menuList}
        );
        //查看认证
        $scope.vm.showUserAuthentification = function () {
            $('#userAuthentification').modal('show')
        }
        //查看账户总额
        $scope.vm.showUserTotalAmount = function () {
            $('#userTotalAmount').modal('show')
        }
        //增加金额
        $scope.vm.showAddAmount = function () {
            $('#addUserTotalAmount').modal('show')
        }
        //冻结金额
        $scope.vm.showFrostAmount = function () {
            $('#frostUserTotalAmount').modal('show')
        }
        //提现-->
        $scope.vm.showCaseUser = function () {
            $('#caseUser').modal('show')
        }
        //通道-->AisleUser
        $scope.vm.showAisleUser = function () {
            $('#aisleUser').modal('show')
        }
        //费率-->RateUser
        $scope.vm.showRateUser = function () {
            $('#rateUser').modal('show')
        }
        //密码-->PasswordUser
        $scope.vm.showPasswordUser = function () {
            $('#passwordUser').modal('show')
        }
        //编辑-->EditorUser
        $scope.vm.showEditorUser = function () {
            $('#editorUser').modal('show')
            //初始化时间插件
            laydate.render({
                elem: '#udate', //指定元素
                theme: '#524f4f'
            });
        }
        //删除-->DeleteUser
        $scope.vm.showDeleteUser = function () {
            $('#deleteUser').modal('show')
        }


    }
})();