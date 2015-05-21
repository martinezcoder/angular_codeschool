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
      images: [
        {
          full: 'image1.png',
          thumb: 'image1-thumb.png'
        }
      ]
    },
    {
      name: "Personal Gem",
      price: 5.95,
      description: "this is another description",
      canPurchase: false,
      images: [
        {
          full: 'image2.png',
          thumb: 'image2-thumb.png'
        }
      ]
    }
  ];
})();

