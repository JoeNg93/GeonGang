import React, { Component } from "react";
import ProductDetail from "./ProductDetail";

class ProductDetailContainer extends Component {
  state = {
    addedState: false
  };

  product = {
    name: "Vichy Mineral 89",
    imgPath: require("../../assets/images/product-4.jpg"),
    type: "Moisturizers",
    rating: 4,
    ingredients:
      "aqua / water / eau • peg/ppg/polybutylene glycol-8/5/3 glycerin • glycerin • butylene glycol • methyl gluceth-20 • carbomer • sodium hyaluronate • phenoxyethanol • caprylyl glycol • citric acid • biosaccharide gum-1",
    numberOfReviews: 18,
    price: "$$$"
  };

  topReview = {
    reviewerImgPath: require("../../assets/images/profile-1.jpg"),
    comment:
      "The texture is very nice and it non sticky, non greasy. Very hydrating and ultras a few for my sensitive skin, I can even apply it around the eye area..."
  };

  productAddHandle = () => {
    this.setState({ addedState: !this.state.addedState });
  };

  render() {
    return (
      <ProductDetail
        state={this.state}
        product={this.product}
        topReview={this.topReview}
        onPressAddProduct={this.productAddHandle}
        onPressReview={() => {}}
      />
    );
  }
}

export default ProductDetailContainer;
