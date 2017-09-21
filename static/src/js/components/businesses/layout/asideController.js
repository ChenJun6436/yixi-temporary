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
        $scope.state = $state;
        // 显示 导航栏点击显示
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
