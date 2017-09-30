/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    /**
     * 助学金辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('commonServer', commonServer);

    commonServer.$inject = ['httpServer'];

    function commonServer(httpServer) {
        var myServices = {};
        //获取一级菜单
        myServices.getMenus = function (data) {
            return httpServer.postHttp('/menus', data);
        };
        //s


        return myServices;
    }
})();
