import React, { Component } from "react";
import PropTypes from "prop-types";
import { getImages } from "services/getImages";
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import {Button} from '../Button/Button'
import { Loader } from "components/Loader/Loader";
// import Modal from "components/Modal/Modal";
import css from './ImageGallery.module.css'

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component{

  static propTypes = {
    textSearch: PropTypes.string.isRequired,
  };


  state = {
    images: [],
    isLoading: false,
    page: 1,
    totalPages: 0,
    status: Status.IDLE,
    textSearch: '',
  };

  componentDidUpdate(prevProps, prevState){
    const {textSearch} = this.props;

    if(prevProps.textSearch !== textSearch){
      this.setState({ page: 1, images: [], status: Status.PENDING, textSearch }, this.loadImages);
    };
  };

  loadImages(){
    const { textSearch, page } = this.state;

    getImages(textSearch, page)
      .then((res) => res.json())
      .then((data) => {
        if (data.hits.length === 0) {
          this.setState({ status: Status.RESOLVED });
          alert("No images found!");
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
            totalPages: Math.ceil(data.totalHits / 12),
            status: Status.RESOLVED,
          }));
        }
      })
      .catch(() => {
        this.setState({status: Status.REJECTED});
      })
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), this.loadImages);
  };
  

  render() {
    const { images, status, page, totalPages } = this.state;

      if(status === 'pending') {
        return <Loader />  ;
      };

      if(status === 'rejected') {
        return <h2>Sorry, something went wrong. Please try again later.</h2>;
      }

      if(status === 'resolved') {
        return <div className={css.wrapper}>
            <ul className={css.ul_item}>
              {images.map((image) => (
              <ImageGalleryItem key={image.id} item={image} />
              ))}
            </ul>
            {page < totalPages && <Button onClick={this.handleLoadMore}/>}
          </div>;
      };
  };
};