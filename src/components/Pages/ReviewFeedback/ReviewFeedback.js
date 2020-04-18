import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewFeedback extends Component {
  render() {
    return (
      <div>
        <h2>Review of Feedback</h2>

        <div>
          <h4> {this.props.store.feelingReducer.feeling}</h4>
          <h4> {this.props.store.contentReducer.content}</h4>
          <h4> {this.props.store.supportReducer.support}</h4>
          <h4> {this.props.store.commentReducer.comments}</h4>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewFeedback);
