import React, { Component } from "react";
import ProductDetailReviews from "./ProductDetailReviews";
import Comment from "../common/Comment";

class ProductDetailReviewsContainer extends Component {
  state = {
    userProfileImgPath: require("../../assets/images/profile-1.jpg"),
    userRating: 0,
    userComment: "",
    commentActive: 0
  };

  commentGlobal = {
    globalRating: 4.4,
    numberOfComments: 18
  };

  commentEntries = [
    {
      profileName: "Emma Watson",
      profileImgPath: require("../../assets/images/profile-1.jpg"),
      rating: 2,
      postDate: "1 month ago",
      text:
        "The texture is very nice and it non sticky, non greasy. Very hydrating and ultras a few for my sensitive skin, I can even apply it around the eye area. It's a must have and 1st part of my skincare routine and after I apply my Mineral 89, I apply my other serums and It compliments every serum and moisturiser I apply, may it be day or night.",
      helpfulCount: 3,
      liked: true
    },
    {
      profileName: "Hermione Granger",
      profileImgPath: require("../../assets/images/profile-1.jpg"),
      rating: 4.5,
      postDate: "2 millennium ago",
      text:
        "I used that product as a magic wand and it works surprisingly well!",
      helpfulCount: 2018,
      liked: false
    }
  ];

  commentHelpfulHandle = index => {
    this.setState({ commentActive: index });
    this.commentEntries[index].liked = !this.commentEntries[index].liked;
  };

  render() {
    commentComponents = this.commentEntries.map((commentInfo, index) => (
      <Comment
        key={index}
        profileName={commentInfo.profileName}
        profileImgPath={commentInfo.profileImgPath}
        rating={commentInfo.rating}
        postDate={commentInfo.postDate}
        text={commentInfo.text}
        helpfulCount={commentInfo.helpfulCount}
        liked={commentInfo.liked}
        onPressHelpful={this.commentHelpfulHandle.bind(this, index)}
        onPressReport={() => {}}
      />
    ));
    return (
      <ProductDetailReviews
        globalRating={this.commentGlobal.globalRating}
        numberOfComments={this.commentGlobal.numberOfComments}
        state={this.state}
        onUserRating={userRating => this.setState({ userRating })}
        onUserCommentWriting={userComment => this.setState({ userComment })}
        onUserCommentSubmit={() => {}}
        commentComponents={commentComponents}
      />
    );
  }
}

export default ProductDetailReviewsContainer;
