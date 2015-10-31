var app = angular.module('portApp', ['ngAnimate', 'ui.bootstrap']);
app.controller('moduleCtrl', function($scope, $uibModal) {
    
    $scope.openModule = function() {
        var infoModule = $uibModal.open({
            animation: true;
            templateUrl: 'contactModal.html'
        });
    };
});