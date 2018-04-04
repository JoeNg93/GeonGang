import React, { Component } from "react";
import ProductDetail from "./ProductDetail";

class ProductDetailContainer extends Component {
  state = {
    productName: "Vichy Mineral 89"
  };

  render() {
    return <ProductDetail productName={this.state.productName} />;
  }
}

export default ProductDetailContainer;
