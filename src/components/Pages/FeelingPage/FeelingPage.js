import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  render() {
    return (
      <div>
        <h3> How are you Feeling?</h3>

        <form>
          <input type="text"></input>
          <button> Next </button>
        </form>
      </div>
    );
  }
}

export default connect()(FeelingPage);
