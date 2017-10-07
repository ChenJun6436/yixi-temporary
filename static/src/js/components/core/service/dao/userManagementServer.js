/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    /**
     * 助学金辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('userManagementServer', userManagementServer);

    userManagementServer.$inject = ['httpServer'];

    function userManagementServer(httpServer) {
        var myServices = {};
        //获取一级菜单
        myServices.user_GetUsers = function (data) {
            return httpServer.postHttp('/users', data);
        };
        //


        return myServices;
    }
})();
