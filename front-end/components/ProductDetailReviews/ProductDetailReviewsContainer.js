import React, { Component } from "react";
import ProductDetailReviews from "./ProductDetailReviews";

class ProductDetailReviewsContainer extends Component {
  state = {
    productName: "Vichy Mineral 89"
  };

  render() {
    return <ProductDetailReviews productName={this.state.productName} />;
  }
}

export default ProductDetailReviewsContainer;
