import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery'

class App extends Component {
  state = {
    images: '',
  };

  handleFormSubmit = images => {
    this.setState({ images });
  };

  render() {
    return(
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery images={this.state.images}/>
      </div>
    )
  };
};

export default App;
