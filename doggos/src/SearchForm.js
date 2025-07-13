import React from "react";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
  render() {
    return (
      <>
        <input placeholder="Type doggos!" value={this.state.inputValue}  onChange={(e) => this.setState({inputValue: e.target.value})}/>
        <button onClick={() => this.props.SearchDogs(this.state.inputValue)}>Submit</button>
      </>
    );
  }
}

export default SearchForm;
