/*author：chenjun 17.9.20*/
(function () {
    'use strict';
    angular.module('app.login').controller('loginController', loginController);
    loginController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state'
    ];
    function loginController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {
            user: {},
            loginErrorMessage: '这是一条错误警告'
        };
        $cookies.remove('user');
        $scope.vm.login = function () {
            //验证表单
            if($scope.vm.longinForm.$valid){
                $cookies.putObject('user', {
                    name: $scope.vm.user.userName,
                    pwd: $scope.vm.user.passWords
                });
                console.log($cookies.getObject('user'))
                // $state.go('main');
            }
            /*发送登录请求*/
            // commonService.postLogin().then(function(res){
            //     if(res){
            //         console.log('成功登录')
            //         $state.go('main');
            //         $cookies.putObject('user', {
            //             name: $scope.vm.user.userName,
            //             pwd: $scope.vm.user.passWords
            //         });
            //         $rootScope.user_Name = $cookies.getObject('user').role;
            //         $rootScope.user_Token = $cookies.getObject('user').name;
            //     }else if(res.aa){
            //         console.log('登录失败')
            //     }
            // })

        };
    }
})();