(function() {
    'use strict';
    angular.module('app.helper',
        [
            'ui.router'
        ]);
})();
/**
* 需要引入的插件和模块
* */
(function() {
    'use strict';
    angular.module('app.core', [
        'app.helper',
        'ngCookies'
    ]);
})();
(function() {
    'use strict';
    angular.module('app.chen', ['app.core']);
})();
(function() {
    'use strict';
    angular.module('app.jun', ['app.core']);
})();
(function() {
    'use strict';
    angular.module('app.login', ['app.core']);
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function() {
    'use strict';

    angular.module('app.layout', ['app.core']);

})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app', [
        'app.helper',
        'app.core',
        'app.layout',
        'app.login',
        'app.chen',
        'app.jun'
    ]);
})();
(function () {
    'use strict';
    angular.module('app.helper').provider('routerHelper', routerHelperProvider);
    routerHelperProvider.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    function routerHelperProvider($stateProvider, $urlRouterProvider, $httpProvider) {
        this.$get = RouterHelper;
        RouterHelper.$inject = ['$rootScope', '$state'];
        function RouterHelper($rootScope, $state) {
            $httpProvider.interceptors.push('postInterceptor');
            var hasOtherwise = false;
            function configureStates(states, otherwisePath) {
                states.forEach(function (state) {
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }
            function getStates() {
                return $state.get();
            }
            var service = {
                configureStates: configureStates,
                getStates: getStates
            };
            return service;
        }
    }
})();
(function() {

    'use strict';

    angular.module('app.chen').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        console.log('wo s chen Router')
        return [{
            state: 'main.chen',
            config: {
                url: '/chen',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/chen/chen.html',
                        controller: 'chenController'
                    }
                }
            }
        }];
    }
})();
(function () {

    'use strict';

    angular.module('app.chen').controller('chenController', chenController);

    chenController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state'
    ];

    function chenController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {};
        console.log('wo s  chenCCCCCCCCCCCCCCCCCCCCCCCC')
    }
})();
(function() {
    'use strict';
    angular.module('app.jun').run(appRun);
    appRun.$inject = ['routerHelper'];
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.jun',
            config: {
                url: '/jun',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/jun/jun.html',
                        controller: 'junController'
                    }
                }
            }
        }];
    }
})();
(function () {
    'use strict';
    angular.module('app.jun').controller('junController', junController);
    junController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
    ];
    function junController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {};
        console.log($rootScope.userRole);
    }
})();
(function() {
    'use strict';
    angular.module('app.login').run(appRun);
    appRun.$inject = ['routerHelper'];
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'login',
            config: {
                url: '/login',
                templateUrl: 'static/dist/tpls/components/businesses/login/login.html',
                controller: 'loginController'
            }
        }];
    }
})();
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

/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */

(function () {
    'use strict';
    angular.module('app.layout').controller('headerController', headerController);

    headerController.$inject = ['$state', '$rootScope'];

    function headerController($state, $rootScope) {
        console.log('w s  header');
    }
})();

/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';

    angular.module('app.layout').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        var otherwise = '/login';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: 'main',
                config: {
                    url: '/main',
                    views: {
                        '': {
                            templateUrl: 'static/dist/tpls/components/businesses/subject/main.html'
                        },
                        'header@main': {
                            templateUrl: 'static/dist/tpls/components/businesses/subject/header.html',
                            controller: 'headerController'
                        },
                        'aside@main': {
                            templateUrl: 'static/dist/tpls/components/businesses/subject/aside.html',
                            controller: 'asideController'
                        },
                        'section@main': {
                            controller: ['$state', '$rootScope', function ($state, $rootScope) {
                                //根据角色不同判断默认显示的初始化页面
                                if ($rootScope.userRole === 1) {
                                    console.log('qu chen');
                                    $state.go('main.chen');
                                } else if ($rootScope.userRole === 2) {
                                    console.log('qu jun');
                                    $state.go('main.jun');
                                }
                            }]
                        }
                    }
                }
            }
        ];
    }
})();

/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.core').factory('httpServer', httpServer);

    httpServer.$inject = ['$http', '$q', 'ROOT'];

    function httpServer($http, $q, ROOT) {
        return {
            postHttp: function (url, data) {
                var deferred = $q.defer();
                if (data) {
                    $http({
                        method: 'post',
                        url: ROOT + url,
                        data: data,
                        timeout: deferred.promise,
                        cancel: deferred
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                } else {
                    $http({
                        method: 'post',
                        url: ROOT + url,
                        timeout: deferred.promise,
                        cancel: deferred,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                }
                return deferred.promise;
            },
            put: function (url, data) {
                var deferred = $q.defer();
                $http({
                    method: 'put',
                    url: ROOT + url,
                    data: data,
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                },function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            post: function (url, data) {
                var deferred = $q.defer();
                $http.post(ROOT + url + '/' + data, {
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                },function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            get: function (url, data) {

                var _pramas = '';

                if(data || data === 0){
                    if (angular.isArray(data)){
                        angular.forEach(data, function (value){
                            _pramas += '/' + value;
                        });
                    }else {
                        _pramas = '/' + data;
                    }
                }

                var deferred = $q.defer();
                $http.get(ROOT + url + ( _pramas !== '' ? _pramas : ''), {
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                }, function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            delete: function (url, data) {
                var deferred = $q.defer();
                $http.delete(ROOT + url + '/' + data, {
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                },function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            deleteHttp:  function (url, data) {
                var deferred = $q.defer();
                if (data) {
                    $http({
                        method: 'delete',
                        url: ROOT + url,
                        data: data,
                        timeout: deferred.promise,
                        cancel: deferred
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                } else {
                    $http({
                        method: 'delete',
                        url: ROOT + url,
                        timeout: deferred.promise,
                        cancel: deferred,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                }
                return deferred.promise;
            }
        };
    }
})();

/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.core').factory('postInterceptor', postInterceptor);

    postInterceptor.$inject = ['$rootScope', '$q', 'tools', '$cookies'];

    function postInterceptor ($rootScope, $q, tools, $cookies) {
        return {
            'request': function (config) {
                return config;
            },
            'response': function (resp) {
                if (resp.data.status === false) {
                    if (resp.data.message === '用户已过期') {
                        setTimeout(function () {
                            window.location.href = $rootScope.url;
                            $cookies.remove('user');
                            $rootScope.user = $cookies.getObject('user');
                            localStorage.clear();
                        }, 2000);
                    }
                    if (resp.data.flag === 1) {
                        if(resp.data.message==null){
                            tools.alertError('操作失败，请稍后再试！');
                        }else{
                            tools.alertError(resp.data.message);
                        }
                    } else if (resp.data.flag === 0) {
                        tools.alertError(resp.data.message);
                    } else {
                        tools.alertError(resp.data.message);
                    }
                }
                return resp;
            },
            'requestError': function (rejection) {
                console.log('requestError' + $q.reject(rejection));
                return $q.reject(rejection);
            },
            'responseError': function (rejection) {
                console.log('responseError' + rejection);
                return rejection;
            }
        };
    }
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    /**
     * 常量
     */
    angular.module('app.core').constant('ROOT', '');
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    /**
     * 助学金辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('grantsAdvisorServer', grantsAdvisorServer);

    grantsAdvisorServer.$inject = ['httpServer'];

    function grantsAdvisorServer(httpServer) {
        var myServices = {};
        //本学年评定经济困难但未申请助学金
        myServices.notApply = function (data) {
            return httpServer.get('/grantsAdvisor/povertyNotApply', data);
        };
        //s


        return myServices;
    }
})();

/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.core').factory('locals', locals);

    locals.$inject = ['$window'];

    function locals($window) {
        return {        //存储单个属性
            set: function (key, value) {
                $window.localStorage[key] = value;
            },        //读取单个属性
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },        //存储对象，以JSON格式存储
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },        //读取对象
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        };
    }
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.core').service('tools', tools);

    tools.$inject = ['$timeout', '$rootScope', '$cookies'];

    function tools($timeout, $rootScope, $cookies) {
        /**
         * 退出登录
         */
        this.logout = function () {
            $cookies.remove('user');
            $rootScope.user = $cookies.getObject('user');
            localStorage.clear();
        };

        /**
         * 成功提示框
         * @param data  提示信息
         */
        this.alertSuccess = function (data, time) {
            $rootScope.alert = true;
            $rootScope.isActive = true;
            $timeout(function () {
                $rootScope.alert = false;
            }, time ? time : 2000);
            $rootScope.alertValue = data;
        };

        /**
         * 失败提示框
         * @param data  提示信息
         */
        this.alertError = function (data, time) {
            $rootScope.alert = true;
            $rootScope.isActive = false;
            $timeout(function () {
                $rootScope.alert = false;
            }, time ? time : 2000);
            $rootScope.alertValue = data;
        };

        /**
         * 判断对象是否为空
         * @param e
         * @returns {boolean}
         */
        this.isEmptyObject = function (e) {
            var t;
            for (t in e) {
                return !1;
            }
            return !0;
        };

        /**
         * 改数组null为0
         * @param arr
         * @param item *多少
         * @returns {boolean}
         */
        this.formatArr = function (arr, item) {
            return arr.map(function (data) {
                return data == null || data === 'NaN' ? 0 : (item == null ? data : data * item);
            });
        };
        
        /**
         * 格式化字符串
         * @param str   传入字符串
         * @param num   从第几个位置开始
         * @param tips  添加标记
         * @returns {string}
         */
        this.formatStr = function (str, num, tips) {
            var newStr = '';
            var count = 0;
            if (str) {
                for (var i = 0, len = str.length; i < len; i++) {
                    if (count % num === 0 && count !== 0) {
                        newStr = newStr + tips + str.charAt(i);
                    } else {
                        newStr = newStr + str.charAt(i);
                    }
                    count++;
                }
                return newStr;
            } else {
                return str;
            }
        };
        
        /**
         * 返回数组中最大值
         * @param arr
         */
        this.max = function (arr) {
            //Math.max.apply(null, [])  =>-Infinity
            if (angular.isArray(arr)) {
                return arr.length > 0 ? Math.max.apply(null, arr) : 0;
            } else {
                console.log(arr + 'is not a array');
            }
        };

        /**
         * 返回数组中最小值
         * @param arr
         */
        this.min = function (arr) {
            if (angular.isArray(arr)) {
                return arr.length > 0 ? Math.min.apply(null, arr) : 0;
            } else {
                console.log(arr + 'is not a array');
            }
        };

        /**
         * 判断json数组对象属性是否重复
         * @param arr
         * @param name
         * @returns {boolean}
         */
        this.isRepeat = function (arr, name) {

            var obj = {}, _arr = [];

            angular.forEach(arr, function (value) {
                if (!obj[value[name]]) {
                    obj[value[name]] = 1;
                    _arr.push(value[name]);
                }
            });

            return arr.length !== _arr.length;
        };
        /**
         * 验证大于0的数字
         * */
        this.number = function (num) {
            var reg = new RegExp("^[0-9]*$");
            if(reg.test(num)){
                return true;
            }else {
                return false;
            }
        };
    }
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app').run(appRun);

    appRun.$inject = ['$rootScope', '$cookies', '$state', '$http'];

    function appRun($rootScope, $cookies, $state, $http) {
        //改变全局  需要引入moment.JS 时间处理类库  这里是上下午zh-cn
        // moment.locale('zh-cn')
        if ($cookies.getObject('user')) {
            $rootScope.userRole = $cookies.getObject('user').role;
            $rootScope.userName = $cookies.getObject('user').name;
            console.log($rootScope.userRole +""+"这是启动的时候")
        }
        console.log($cookies.getObject('user')+""+"这是启动的时候 获取cookies")
        /**
         * 取消请求
         */
        $rootScope.clearPending = function () {
            angular.forEach($http.pendingRequests, function (request) {
                if (request.cancel && request.timeout) {
                    request.cancel.resolve('canceled');
                }
            });
        };
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.clearPending();
            $rootScope.alert = false;
            console.log($rootScope.userRole);
            //页面权限控制，防止交叉访问
            //不是登陆页面
            if (toState.name !== 'login') {
                //公共页面
                var premissionArr = [
                    'main'
                ];
                //用户判断去哪个页面,特定用户添加router
                switch ($rootScope.userRole) {
                    case 1:
                        premissionArr = premissionArr.concat([
                            'main.chen',
                        ]);
                        console.log('qqqqqqqqqqqqqqqqqqqqqchen')
                        console.log(premissionArr)
                        break;
                    case 2:
                        premissionArr = premissionArr.concat([
                            'main.jun',
                        ]);
                        break;
                    default:
                        $state.go('main');
                }
                //如果在路由集合中找不到  输入的地址或者即将跳转的地址，那么就去主页
                if (premissionArr.indexOf(toState.name) === -1) {
                    event.preventDefault();
                    $state.go('main');
                }
            }
        });
        //操作成功或失败弹窗
        $rootScope.isActive = true;
        $rootScope.alertValue = '';
        $rootScope.alert = false;
    }
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function() {
    'use strict';
    angular.module('app').config(appConfig);

    appConfig.$inject = ['$httpProvider', '$locationProvider'];

    function appConfig($httpProvider, $locationProvider) {
        //添加发送请求的拦截器，发送之后的回调函数
        $httpProvider.interceptors.push('postInterceptor');
        //转换到根目录 这里暂时不用
        // $locationProvider.html5Mode(true);
        //设置hash值
        $locationProvider.hashPrefix('');
    }
})();