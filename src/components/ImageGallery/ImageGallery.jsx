import React, { Component } from "react";
import { getImages } from "services/getImages";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component{
  state = {
    value: '',
    images: [],
    error: null,
    status: Status.IDLE,

  };

  componentDidUpdate(prevProps, prevState){
    const {textSearch} = this.props;

    if(prevProps.textSearch !== this.props.textSearch){
      this.setState({ status: Status.PENDING });

      getImages(textSearch)
      .then((image) => this.setState({ images: image.hits, status : Status.RESOLVED }))
      // .catch(error => this.setState({ error, status: Status.REJECTED }));
    };
  };

  render() {
    const {status, error, images} = this.state;

    if(status === 'idle') {
      return <div></div>
    };

    if(status === 'pending') {
      return <div><h1>Loading...</h1></div>
    };

    if(status === 'rejected'){
      return alert(error, 'OOOOps')
    }

    if(status === 'resolved') {
      return( 
        <div>
          <ul>
            {images.map((el)=>(
              <li><img src={el.webformatURL} alt={el.type} /></li>
            ))}
          </ul>
        </div>
      )
    };
  };
};