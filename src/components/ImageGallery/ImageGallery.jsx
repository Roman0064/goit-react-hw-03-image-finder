import React, { Component } from "react";
import ImageApi from "components/getImages";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const API_KEY = "37349806-fbd17cc6692905f34ac659bee";

export default class ImageGallery extends Component{

  componentDidUpdate(prevProps, prevState){
    if(prevProps.images !== this.props.images){

      
    };
  };

  render() {
    return(
      <div>
        <h1>Images</h1>
        <p>{this.props.images}</p>
        </div>
    )
  };
};