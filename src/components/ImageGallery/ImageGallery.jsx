import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onItemClick }) => {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onItemClick={onItemClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
