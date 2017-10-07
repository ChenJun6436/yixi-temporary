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
        '$state',
        'commonServer'
    ];
    function asideController($scope, $rootScope, $cookies, $state, commonServer) {
        $scope.vm = {
            user1:'hhh'
        }
        $scope.state = $state
        //获取用户操作菜单
        $scope.vm.getUserList = function () {
            //发送请求
            $scope.vm.userListSecond = ['基本设置','邮件设置','系统更新']
            $scope.vm.navList = ['默认页面','邮件设置2','系统更新4','基本设置5','邮件设置6','系统更新7','基本设置8','邮件设置9','系统更新10','基本设置11','邮件设置12','系统更新13']
            $scope.vm.navList = []
            $scope.vm.nowChooseNav = 0
        }
        $scope.vm.getUserList()
        //获取一级菜单
        $scope.vm.getFirstList = function () {
            $scope.vm.postA = {
                menuLevel:1,
                userId:1
            }
            commonServer.getMenus($scope.vm.postA).then(function (data) {
                $scope.vm.userListFirst = data.content;
            })
        }
        $scope.vm.getFirstList()
        //获取二级菜单
        $scope.vm.getSecondtList = function (first) {
            $scope.vm.postB = {
                menuLevel:2,
                userId:1,
                parentId: first.menuId
            }
            commonServer.getMenus($scope.vm.postB).then(function (data) {
                console.log(data)
                $scope.vm.userListSecond = data.content;
            })
        }

        // // 显示 导航栏点击显示
        // $scope.vm.chooseFirst = function (_index) {
        //     $scope.vm.chooseFirstOne = _index
        // }
        // 显示 历史记录显示
        $scope.vm.chooseNav = function (_index,onenav) {
            $scope.vm.nowChooseNav = _index
        }
        // 历史Nav添加
        $scope.vm.pushNavList = function (second) {
            console.log($scope.vm.navList.length)
            if($scope.vm.navList.length === 0){
                $scope.vm.navList.push(second)
            }else {
                angular.forEach($scope.vm.navList,function (a) {
                    console.log(a.menuId +'_______________'+second.menuId)
                    if(a.menuId === second.menuId){
                        $scope.vm.can = true
                    }
                })
                if(!$scope.vm.can){
                    $scope.vm.navList.push(second)
                }
            }
        }
        // 历史Nav删除
        $scope.vm.delNavList = function (_index) {
            $scope.vm.navList.splice(_index,1)
            if($scope.vm.navList.length === 0){
                $scope.vm.navList.push('默认页面')
            }
        }
        //vm.delNowChoose()">关闭当前选项卡
        $scope.vm.delNowChoose = function () {
            $scope.vm.navList.splice($scope.vm.nowChooseNav,1)
            if($scope.vm.navList.length === 0){
                $scope.vm.navList.push('默认页面')
            }
        }
        //vm.delAllChoose()">关闭全部选项卡
        $scope.vm.delAllChoose = function () {
            $scope.vm.navList = []
            $scope.vm.navList.push('默认页面')
        }
        //vm.delOtherChoose()">关闭其他选项卡
        $scope.vm.delOtherChoose = function () {
            $scope.vm.navList = [$scope.vm.navList[$scope.vm.nowChooseNav]]
        }
        //下一页
        var nowNum = 0;
        $scope.vm.next = function () {
            if(nowNum < $scope.vm.navList.length/3-1){
                nowNum++;
                $scope.vm.leftPx = "-"+ 330*nowNum +"px";
            }
        }
        //上一页
        $scope.vm.pre = function () {
            if(nowNum >0){
                nowNum--;
                $scope.vm.leftPx = "-"+ 330*nowNum +"px";
            }
        }
    }
})();
