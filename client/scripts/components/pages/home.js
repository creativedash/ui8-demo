angular.module("ui8Demo.components").component("home", {
  template:
    "<main><h1><friendly-greeting name='$ctrl.user.name' /></h1></main>",
  controller: function () {
    console.log("home");
  },
  bindings: {
    user: "<",
  },
});
