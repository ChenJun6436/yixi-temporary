/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.layout').controller('asideController', asideController);

    asideController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state'
    ];
    function asideController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {}
        $scope.state = $state
        //获取用户操作菜单
        $scope.vm.getUserList = function () {
            //发送请求
            $scope.vm.userListFirst = ['管理首页','系统设置','用户管理','通道管理','订单管理','提款管理','文章管理']
            $scope.vm.userListSecond = ['基本设置','邮件设置','系统更新']
        }
        $scope.vm.getUserList()
        // 显示 导航栏点击显示
        $scope.vm.chooseFirst = function (index1) {
            $scope.vm.chooseFirstOne = index1
        }
        $scope.daohanglanClick = function (num) {
            if( $scope.daohanglan === num){
                $scope.daohanglan = 0
            }else {
                $scope.daohanglan = num
            }
        }

        // console.log($state)
    }
})();
