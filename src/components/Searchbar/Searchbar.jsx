import { Component} from "react";

class Searchbar extends Component {
  state = {
    textSearch: '',
  };

  handleNameChange = (event) => {
    this.setState({ textSearch: event.currentTarget.value.toLowerCase() });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.textSearch.trim() === ''){
      return alert('Please enter something in the search bar');
    };

    this.props.onSubmit(this.state.textSearch);
    this.setState({ textSearch: '' });
  };

  render() {
    return(
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
        <button type="submit" class="button">
        <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={ this.state.textSearch }
          onChange={ this.handleNameChange }
        />
        </form>
      </header>
    )
  };
};

export default Searchbar;
