angular
  .module("ui8Demo", [
    "ngResource",
    "ui.router",
    "ui8Demo.filters",
    "ui8Demo.services",
    "ui8Demo.directives",
    "ui8Demo.components",
  ])
  .config([
    "$locationProvider",
    function ($locationProvider) {
      $locationProvider.html5Mode(true);
    },
  ])
  .config([
    "$stateProvider",
    function ($stateProvider) {
      $stateProvider
        .state({
          name: "home",
          url: "^/",
          component: "home",
          resolve: {
            user: function (UserService) {
              return UserService.getUser(1);
            },
          },
        })
        .state({
          name: "about",
          url: "^/about",
          component: "about",
          resolve: {},
        });
    },
  ]);

angular.module("ui8Demo.filters", []);
angular.module("ui8Demo.services", []);
angular.module("ui8Demo.directives", []);
angular.module("ui8Demo.components", []);
