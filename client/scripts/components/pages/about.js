angular.module("ui8Demo.components").component("about", {
  template: "<main><h1>About</h1><p>Something about us</p></main>",
  controller: function () {
    console.log("about");
  },
  bindings: {
    data: "<",
  },
});
