import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewFeedback extends Component {
  render() {
    submitFeedback = (event) => {
      const feedback = {};
    };
    return (
      <div>
        <h2>Review of Feedback</h2>

        <div>
          <h3> How are you feeling?</h3>
          <h4>{this.props.store.feelingReducer.feeling}</h4>
        </div>
        <div>
          <h3> Are you understanding the content?</h3>
          <h4>{this.props.store.contentReducer.content}</h4>
        </div>
        <div>
          <h3> Do you feel supported? </h3>
          <h4>{this.props.store.supportedReducer.support}</h4>
        </div>
        <div>
          <h3> Any additional comments?</h3>
          <h4>{this.props.store.commentReducer.comments}</h4>
        </div>
        <div>
          <button onClick={this.submitFeedback}> Submit</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewFeedback);
