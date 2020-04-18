import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  state = {
    feeling: "",
  };

  onInputChange = (input) => (event) => {
    console.log(input);
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  onFeelingsClick = (input) => (event) => {
    this.props.dispatch({ type: "SET_FEELINGS_TYPE", payload: input });
    this.props.history.push("content");
  };

  render() {
    return (
      <div>
        <h3> How are you Feeling?</h3>

        <div>
          <input type="text" onChange={this.onInputChange("feeling")}></input>
          <button onClick={this.onFeelingsClick("nextpage")}> Next </button>
        </div>
      </div>
    );
  }
}

export default connect()(FeelingPage);
