import React, { Component } from "react";
import { connect } from "react-redux";

class ContentPage extends Component {
  state = {
    content: "",
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

  // onContentClick =(input) => (event) => {

  // }

  render() {
    return (
      <div>
        <h3> How are you understanding the content?</h3>

        <div>
          <input type="text" onChange={this.onInputChange("content")}></input>
          <button onClick={this.onContentClick("nextpage")}> Next </button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ContentPage);
