(function(){
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/main.html'
            }) /*
            .state('#', {
                url: '/#',
                controller: '#Ctrl as #',
                templateUrl: '/templates/#.html'
            })*/;
    }
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();
