import React from "react";

class SearchBar extends React.Component {
  state = { search: "" };
  onChange = event => {
    this.setState({
      search: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={this.state.search}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
