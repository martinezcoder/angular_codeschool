(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'this is a description of the Dodecahedron product',
    canPurchase: true,
    soldOut: true
  }
})();

