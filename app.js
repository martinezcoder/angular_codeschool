(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Angular.js',
      price: 2,
      description: 'this is a description of the Angular product',
      canPurchase: true,
      images: [
        {
          full: 'image1.png',
          thumb: 'image1-thumb.png'
        }
      ]
    },
    {
      name: "Backbone.js",
      price: 5.95,
      description: "this is a description of Backbone",
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

