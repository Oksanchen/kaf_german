(function() {
   angular.module('kafedraApp', [
      'ngRoute'
   ])
   .config(function ($routeProvider) {
     $routeProvider
       .when('/', {
         templateUrl: 'views/main.html',
         controller: 'MainCtrl',
         controllerAs: 'main'
       })
       .when('/sklad', {
         templateUrl: 'views/sklad.html',
         controller: 'SkladCtrl',
         controllerAs: 'sklad'
       })
       .when('/activities', {
          templateUrl: 'views/activities.html',
          controller: 'ActivitiesCtrl',
          controllerAs: 'activities'
       })
       .when('/eresourse', {
          templateUrl: 'views/eresourse.html',
          controller: 'EresourseCtrl',
          controllerAs: 'eresourse'
       })
       .when('/students', {
          templateUrl: 'views/students.html',
          controller: 'StudentsCtrl',
          controllerAs: 'students'
       })
       .when('/anons', {
         templateUrl: 'views/anons.html',
         controller: 'AnonsCtrl',
         controllerAs: 'anons'
       })
       .otherwise({
         redirectTo: '/'
       });
   });



})();
