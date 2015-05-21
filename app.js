(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'this is a description of the Dodecahedron product',
      canPurchase: true,
    },
    {
      name: "Personal Gem",
      price: 5.95,
      description: "this is another description",
      canPurchase: false,
    }
  ];
})();

