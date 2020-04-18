import React, { Component } from "react";
import { connect } from "react-redux";

class SupportedPage extends Component {
  state = {
    support: "",
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onSupportClick = (event) => {
    this.props.dispatch({ type: "SET_SUPPORT_FEEDBACK", payload: this.state });
    this.props.history.push("/comments");
  };
  render() {
    return (
      <div>
        <h3> Are you feeling supported?</h3>

        <div>
          <input type="text" onChange={this.onInputChange("support")}></input>
          <button onClick={this.onSupportClick}> Next </button>
        </div>
      </div>
    );
  }
}

export default connect()(SupportedPage);
