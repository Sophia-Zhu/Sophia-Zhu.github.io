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
            name: "Soul Mates",
            description: 'Created for the 2016 Global Game Jam using the Unity Game Engine alongside a large team of people. Winner of the Audience Choice Award. Based off of the ancient Chinese tradition of "ghost marriages" between two deceased, this game aims to find the compatability between two players via a series of cooperative minigames.', 
            thumbnail: 'assets/programming/soulmates/thumbnail.png',
            images: ['assets/programming/soulmates/one.png',
                    'assets/programming/soulmates/two.png']
         },
         {
            name: "Anomalous",
            description: 'A short VR game for mobile devices created independently that utilizes Google Cardboard. Designed to try and create an immersive experience and a sense of dread/anxiety. Created using Unity, and will be released on the Apple App Store in the near future.',
            date: 'December 2015', 
            thumbnail: 'assets/programming/anomalous/thumbnail.png',
            images: ['assets/programming/anomalous/one.png',
                    'assets/programming/anomalous/two.png']
         },
         {
            name: "Timestep Framework",
            description: 'A data analysis framework for social media websites that can iterate through data over various points in time. Sample plugins using APIs for Twitter, Tumblr and GitHub were also written. Programmed in Java; GUI was made using Java Swing. Collaborators include Israel Madueme and Madeleine Robson.',
            date: 'November 2015', 
            thumbnail: 'assets/programming/times_step_framework/thumbnail.png',
            images: ['assets/programming/times_step_framework/count.png',
                    'assets/programming/times_step_framework/follower.png']
         },
         {
            name: "Scrabble",
            description: 'An independently designed and tested implementation of a multi-player scrabble game. Programmed in Java; GUI was made using Java Swing.',
            date: 'October 2015', 
            thumbnail: 'assets/programming/scrabble/thumbnail.png',
            images: ["assets/programming/scrabble/player1.gif",
                     "assets/programming/scrabble/playerswitch.gif",
                    "assets/programming/scrabble/player2.gif"]
            
         },
         {
            name: "Run Fish Run",
            description: 'A randomly generated infinite runner featuring an unfortunate fish who has unexpectedly grown legs. Created for TechComm 2015 using the Unity Game Engine. Collaborators include Takumi Fujimoto and Roger Liu.',
            date: 'May 2015', 
            thumbnail: 'assets/programming/run_fish/thumbnail.png',
            images: ["assets/programming/run_fish/hairy.gif",
                    "assets/programming/run_fish/fishnet.gif"]
            
         }, 
         {
            name: "After Our Time",
            description: '2D top-down game featuring a real-time grappling hook system. Play as a character and explore ruins and caverns, fighting monsters along the way. Created for the 2015 Global Game Jam using the Unity Game Engine. Collaborators include Taehoon Lee, Stephen Chen, Roger Liu and Jamei Wang.',
            date: 'January 2015',
            thumbnail: 'assets/programming/after_our_time/thumbnail.png',
            images: ["assets/programming/after_our_time/chase.gif", 
                    "assets/programming/after_our_time/escape.gif",
                    "assets/programming/after_our_time/win.gif"]
         },
         {
            name: "TrafficKing",
            description: '2D top-down game that models a realistic traffic system, random source/endpoint generation and shortest-path finding. The player controls the traffic light system and attempts to crash as many cars into each other as possible over a set period of time. Created over the course of a semester with a group of students for Game Creation Society. Collaborators include Taehoon Lee, Roger Liu, Yijing Chen and Huayuan Hua.',
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
        $scope.index = ($scope.index === size - 1) ? 0 : $scope.index + 1;
    };
    
    $scope.reset = function() {
        $scope.index = 0;
    };
    
    $scope.back = function() {
        $location.path('');
    };
});

        
app.controller('artCtrl', function($scope, $location, $sce) {
    $scope.index = 0;
    $scope.pieces = 
        [{
            name: "Recent Drawings",
            description: "A selection of drawings, paintings and other 2D media created throughout the last year or so.",
            date: '2014-Present',
            thumbnail: 'assets/art/recent_drawings/thumbnail.png',
            images: ["assets/art/recent_drawings/10.JPG",
                     "assets/art/recent_drawings/9.JPG",
                     "assets/art/recent_drawings/6.JPG",
                     "assets/art/recent_drawings/7.JPG",
                     "assets/art/recent_drawings/5.JPG",
                     "assets/art/recent_drawings/1.JPG",
                     "assets/art/recent_drawings/gravity falls.png",
                     "assets/art/recent_drawings/hobbit.png",
                     "assets/art/recent_drawings/noahcomic1.png",
                     "assets/art/recent_drawings/noahcomic2.png",
                     "assets/art/recent_drawings/noahcomic3.gif"]
         },
         {
            name: "There Are No Trees Here",
            description: "A 3D animated short about a boy who really likes plants. Collaborators include Eric Yu, Ben Scott, Roger Liu, Audrey Banks.",
            date: 'May 2016',
            thumbnail: 'assets/art/projects/no_trees_here/thumbnail.png',
            images: [],
            video:  $sce.trustAsResourceUrl('https://player.vimeo.com/video/165859819'),
            has_embedded: true
         },
         {
            name: "Out of Step",
            description: "An animated short about a girl who builds a machine that allows her to step out for a moment.",
            date: 'May 2016',
            thumbnail: 'assets/art/projects/out_of_step/thumbnail.png',
            images: [],
            video:  $sce.trustAsResourceUrl('https://player.vimeo.com/video/165409375'),
            has_embedded: true
         },
         {
            name: "3D-Printed Figurine",
            description: "A figurine was modeled from scratch in Blender and exported as seperate STLs. These parts were then printed on a Dimension 3D printer before being coated in acrylic gesso, painted with acrylic and enamel paints, and sprayed with clear gloss coating. Blender and 3D modeling was learned for the first time for this project.",
            date: 'October 2015',
            thumbnail: 'assets/art/projects/3d_flamenco/thumbnail.png',
            images: ["assets/art/projects/3d_flamenco/Apart.png",
                     "assets/art/projects/3d_flamenco/Together.png",
                     "assets/art/projects/3d_flamenco/Unpainted_Photo.jpg",
                     "assets/art/projects/3d_flamenco/Painted_Photo.jpg"]
         },
         {
             name: "Unfinished Pages Zine",
            description: "A short, twenty-page zine designed to memorialize the many unfinished pages found in sketchbooks. Each entry documents the sketchbook's qualities and the date it was last used. 40 copies of this were printed, hand-assembled into booklets and randomly distributed on campus. Slightly humorous in nature, this piece was both designed to evoke a sense of comradery between artists, almost all of who can relate to leaving sketchbooks unfinished, and to reveal a traditionally private part of myself to the public in an anonymous way.",
            date: 'October 2015',
            thumbnail: 'assets/art/projects/memorial_zine/thumbnail.png',
            images: ["assets/art/projects/memorial_zine/copies.jpg",
                     "assets/art/projects/memorial_zine/1.JPG",
                     "assets/art/projects/memorial_zine/2.JPG",
                     "assets/art/projects/memorial_zine/3.JPG",
                     "assets/art/projects/memorial_zine/4.JPG",
                     "assets/art/projects/memorial_zine/5.JPG",
                     "assets/art/projects/memorial_zine/6.JPG",
                     "assets/art/projects/memorial_zine/7.JPG"]
         },
         {
            name: "Hero's Journey (fanzine)",
            description: "A 32-page fanzine put together in the space of two weeks to celebrate the one-year anniversary of obscure superhero anime Samurai Flamenco's ending. Copies were professionally printed using an online service and then sold through Storenvy.",
            date: 'March 2015',
            thumbnail: 'assets/art/projects/flamenco_zine/thumbnail.png',
            images: ["assets/art/projects/flamenco_zine/cover.jpg",
                     "assets/art/projects/flamenco_zine/2.jpg",
                     "assets/art/projects/flamenco_zine/3.jpg",
                     "assets/art/projects/flamenco_zine/4.jpg"]
         },
         {
            name: "There Is Something Standing Right Behind You",
            description: "A five-part narrative comic about unknowingly being followed by some mysterious entity until it is too late. Designed to evoke a sense of claustrophobia and doom, this piece was inspired from that occasional paranoid, illogical feeling that there is something behind you.",
            date: 'October 2014',
            thumbnail: 'assets/art/projects/shadow_comic/thumbnail.png',
            images: ["assets/art/projects/shadow_comic/1.JPG",
                     "assets/art/projects/shadow_comic/2.JPG",
                     "assets/art/projects/shadow_comic/3.JPG",
                     "assets/art/projects/shadow_comic/4.JPG",
                     "assets/art/projects/shadow_comic/5.JPG"]
         },
         {
            name: "High School Portfolio",
            description: "A selection of old artwork created in high school. Many of these were used to apply for colleges, and several have won Scholastic gold or silver medals.",
            date: '2011-2013',
            thumbnail: 'assets/art/hs_portfolio/thumbnail.png',
            images: ['assets/art/hs_portfolio/bike.png',
                     'assets/art/hs_portfolio/Bichromatic.JPG',
                     'assets/art/hs_portfolio/barnacles.JPG',
                     'assets/art/hs_portfolio/anorexia.jpg',
                     'assets/art/hs_portfolio/Theory Train.jpg',
                     'assets/art/hs_portfolio/stomp.JPG',
                     'assets/art/hs_portfolio/Still Life.JPG',
                     'assets/art/hs_portfolio/lotf.jpg',
                     'assets/art/hs_portfolio/IMG_1281.JPG',
                     'assets/art/hs_portfolio/headless oil.JPG',
                     'assets/art/hs_portfolio/goinghome.JPG',
                     'assets/art/hs_portfolio/flyinghands.JPG',
                     'assets/art/hs_portfolio/dress.jpg',
                     'assets/art/hs_portfolio/depressionjelly.JPG',
                     'assets/art/hs_portfolio/cherub.JPG',
                     'assets/art/hs_portfolio/cagedbird.png',
                     'assets/art/hs_portfolio/bust of woman.JPG']
         },
         {
            name: "Dust Bowl Dance",
            description: "A 2D animated comic video about the Grapes of Wrath set to Mumford and Son's Dust Bowl Dance. Made for my 11th grade English course.",
            date: 'May 2012',
            thumbnail: 'assets/art/projects/grapes_of_wrath/thumbnail.png',
            images: [],
            video: 'assets/art/projects/grapes_of_wrath/dust_bowl.mp4',
            has_video: true
         }];
    
    $scope.picBack = function(piece) {
        var size = piece.images.length;
        $scope.index = ($scope.index === 0) ? size - 1 : $scope.index - 1;
    };
    
    $scope.picForward = function(piece) {
        var size = piece.images.length;
        $scope.index = ($scope.index === size - 1) ? 0 : $scope.index + 1;
    };
    
    $scope.reset = function() {
        $scope.index = 0;
    };
    
    $scope.back = function() {
        $location.path('');
    };
});