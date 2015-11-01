var app = angular.module('portApp', ["ngAnimate", "ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl : 'intro.html',
        controller : 'mainCtrl'
    }) 
        .when('/programming', {
        templateUrl : 'programming.html',
        controller : 'programmingCtrl'
    })
        .when('/artwork', {
        templateUrl : 'art.html',
        controller : 'artCtrl'
    });
    
});

app.controller('mainCtrl', function($scope) {
    
    
    
    $scope.hideIntro = false;
    
    $scope.art_to_intro = function() {
        $scope.hideIntro = false;
        $scope.hideProgramming = true;
        $scope.hideArt = true;
    };
});

app.controller('programmingCtrl', function($scope) {
    
    
    
    $scope.hideIntro = false;
    
    $scope.art_to_intro = function() {
        $scope.hideIntro = false;
        $scope.hideProgramming = true;
        $scope.hideArt = true;
    };
});

app.controller('artCtrl', function($scope) {
    
    
    
    $scope.hideIntro = false;
    
    $scope.art_to_intro = function() {
        $scope.hideIntro = false;
        $scope.hideProgramming = true;
        $scope.hideArt = true;
    };
});