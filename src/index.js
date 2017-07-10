import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
require('./styles/main.less');
require('./vendor/css/font-awesome.min.css');
require('./views/navbar.html');
require('./views/sidebar.html');
require('./views/graphs.html');

let ang1 = angular.module('ang1', [ngRoute, ngAnimate]);

ang1.directive('sidebar', [function () {
  return {
    restrict: 'E', // E - elements, directive used as an element <something></something>. A - attribute,
    templateUrl: 'views/sidebar.html',
    transclude: true, // this gives tag <randomNinja>this.props.children</randomNinja> ability to pass children but it needs to be wrapped in <div ng-transclude></div>
    replace: true, // replaces custom tag <randomNinja> to div
    controller: function ($scope) {
      $scope.nav = [
        {
          title: 'Home',
          subtitle: 'Enter your home',
          icon: 'home'
        },
        {
          title: 'Graphs',
          subtitle: 'View graphs',
          icon: 'pie-chart'
        },
        {
          title: 'Email',
          subtitle: 'View emails',
          icon: 'envelope-o'
        }
      ];

      // !todo RemoveMe
      for (let i=0; i < 20; i++) {
        console.log('hey');
        $scope.nav.push(
          {
            title: 'Very long content to test out truncation',
            subtitle: 'Very long  subtitle content to test out truncation',
            icon: 'text-width'
          }
        );
      }
    }
  };
}]);

ang1.directive('graphs', [function () {
  return {
    restrict: 'E', // E - elements, directive used as an element <something></something>. A - attribute,
    templateUrl: 'views/graphs.html',
    transclude: true, // this gives tag <randomNinja>this.props.children</randomNinja> ability to pass children but it needs to be wrapped in <div ng-transclude></div>
    replace: true, // replaces custom tag <randomNinja> to div
    controller: function ($scope) {
      $scope.test = 'works';
    }
  };
}]);
