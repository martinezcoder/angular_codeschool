(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {}
    };

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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "hey@me.com"
        },
        {
          stars: 1,
          body: "this product is not as good!",
          author: "hey@you.com"
        }
      ],
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
      ],
      reviews: []
    }
  ];
})();

