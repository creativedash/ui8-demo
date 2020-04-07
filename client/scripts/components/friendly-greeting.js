angular.module("ui8Demo.components").component("friendlyGreeting", {
  template: "Hello, {{ $ctrl.name | firstName }}!",
  bindings: {
    name: "<",
  },
});
