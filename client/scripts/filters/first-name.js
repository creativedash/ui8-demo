angular.module("ui8Demo.filters").filter("firstName", [
  function () {
    return function (input) {
      return (input || "").split(" ")[0];
    };
  },
]);
