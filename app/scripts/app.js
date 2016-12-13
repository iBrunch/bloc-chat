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
            });
    }
    angular
        .module('blocChat', ['ui.router', 'firebase', 'firebase.ref', 'firebase.auth'])
        .config(config);
})();
