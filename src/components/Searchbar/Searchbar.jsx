import { Component} from "react";

class Searchbar extends Component {
  state = {
    images: '',
  };

  handleNameChange = (event) => {
    this.setState({ images: event.currentTarget.value.toLowerCase() });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.images.trim() === ''){
      return alert('Please enter something in the search bar');
    };

    this.props.onSubmit(this.state.images);
    this.setState({ images: '' });
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
          value={ this.state.images }
          onChange={ this.handleNameChange }
        />
        </form>
      </header>
    )
  };
};

export default Searchbar;
