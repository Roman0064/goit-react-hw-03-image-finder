import React, { Component } from "react";
import { getImages } from "services/getImages";

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

export default class ImageGallery extends Component{
  state = {
    value: '',
    images: [],

  };

  componentDidUpdate(prevProps, prevState){
    const {textSearch} = this.props;
    if(prevProps.textSearch !== this.props.textSearch){
    getImages(textSearch)
    .then(res => res.json())
    .then((image) => this.setState({images: image.hits}));
    };
  };

  render() {
    return( 
      <div>
        {this.state.images.map((el)=>(
          <li><img src={el.webformatURL} alt={el.type} /></li>
        ))}
      </div>
    )
  };
};