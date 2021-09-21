let products = {};

class Product {

  constructor(pName, pDescription){
    this.name = pName;
    this.description = pDescription;
    this.reviews = [];
    this.rating = null;
    products[pName] = this; // allow for easy accessing of a given product by products.pName
  };

  addReview(pRatingObj){
    this.reviews.push(pRatingObj);
    this.rating = Math.round( // Round rating to the nearest integer
      (this.rating + pRatingObj.rating) / this.reviews.length
    );
  };

};

class Review {

  constructor(pProduct, pRating, pDescription){
    this.reviewNumber = pProduct.reviews.length; // allows for accessing this review by index in product.reviews
    this.rating = pRating;
    this.description = pDescription;
    pProduct.addReview(this);
  };

};
