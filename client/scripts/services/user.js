angular.module("ui8Demo.services").service("UserService", [
  "$http",
  function ($http) {
    this.getUser = function (id) {
      return $http.get("/api/users/" + id).then(
        function (response) {
          return response.data;
        },
        function () {
          return null;
        }
      );
    };
  },
]);
