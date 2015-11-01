/* global angular*/

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

app.controller('mainCtrl', function($scope, $location) {
    
    $scope.exited = false;
    
    $scope.hideIntro = false;
    
    $scope.to_programming = function() {
         $scope.exited = true;
        $location.path('programming');
    };
    $scope.to_art = function() {
        $scope.exited = true;
        $location.path('artwork');
    };
});

app.controller('programmingCtrl', function($scope, $location) {
    $scope.index = 0;
    $scope.pieces = 
        [{
            name: "Run Fish Run",
            description: 'A randomly generated infinite runner featuring an unfortunate fish who has unexpectedly grown legs. Created for TechComm(2015) using the Unity Game Engine.',
            date: 'May 2015', 
            thumbnail: 'assets/programming/run_fish/thumbnail.png',
            images: ["assets/programming/run_fish/hairy.gif",
                    "assets/programming/run_fish/fishnet.gif"]
            
         }, 
         {
            name: "After Our Time",
            description: '2D top-down game featuring a real-time grappling hook system. Created for the 2015 Global Game Jam using the Unity Game Engine.',
            date: 'January 2015',
            thumbnail: 'assets/programming/after_our_time/thumbnail.png',
            images: ["assets/programming/after_our_time/chase.gif", 
                    "assets/programming/after_our_time/escape.gif",
                    "assets/programming/after_our_time/win.gif"]
         },
         {
            name: "TrafficKing",
            description: '2D top-down game that models a realistic traffic system, random source/endpoint generation and shortest-path finding. The player controls the traffic light system and attempts to crash as many cars into each other as possible over a set period of time. Created over the course of a semester with a group of students for Game Creation Society.',
            date: 'Fall 2014',
            thumbnail: 'assets/programming/trafficking/thumbnail.png',
            images: ["assets/programming/trafficking/minimap.gif",
                    "assets/programming/trafficking/arrival.gif",
                    "assets/programming/trafficking/gameplay.gif",
                    "assets/programming/trafficking/explosion.gif"] 
         }];
        
    $scope.picBack = function(piece) {
        var size = piece.images.length;
        $scope.index = ($scope.index === 0) ? size - 1 : $scope.index - 1;
    };
    
    $scope.picForward = function(piece) {
        var size = piece.images.length;
        $scope.index = ($scope.index === size) ? 0 : $scope.index + 1;
    };
    
    $scope.back = function() {
        $location.path('');
    };
});

        
app.controller('artCtrl', function($scope, $location) {
    $scope.index = 0;
    $scope.pieces = 
        [{
            name: "3D-Printed Figurine",
            description: "A figurine in several parts was modeled from scratch in Blender and exported as seperate STLs. These parts were then printed on a Dimension 3D printer before being coated in acrylic gesso, painted with acrylic and enamel paints, and sprayed with clear gloss coating. Blender and 3D modeling was learned for the first time for this project.",
            date: 'October 2015',
            thumbnail: 'assets/art/projects/3d_flamenco/thumbnail.png',
            images: ["assets/art/projects/3d_flamenco/Apart.png",
                     "assets/art/projects/3d_flamenco/Together.png",
                     "assets/art/projects/3d_flamenco/Unpainted_Photo.jpg",
                     "assets/art/projects/3d_flamenco/Painted_Photo.jpg"]
         },
         {
             name: "Unfinished Pages Zine",
            description: "A short, ten-page zine designed to memorialize the many unfinished pages found in sketchbooks. Each zine entry documents the sketchbook's qualities and the date it was last used. 40 copies of this were printed out, hand-assembled into booklets and randomly distributed on campus. Slightly humorous in nature, this piece was designed to evoke a sense of comradery between artists, almost all of who can relate to this.",
            date: 'October 2015',
            thumbnail: 'assets/art/projects/memorial_zine/thumbnail.png',
            images: ["assets/art/projects/memorial_zine/copies.jpg"
                ]
         }];
    
    $scope.picBack = function(piece) {
        var size = piece.images.length;
        $scope.index = ($scope.index === 0) ? size - 1 : $scope.index - 1;
    };
    
    $scope.picForward = function(piece) {
        var size = piece.images.length;
        $scope.index = ($scope.index === size) ? 0 : $scope.index + 1;
    };
    
    $scope.back = function() {
        $location.path('');
    };
});