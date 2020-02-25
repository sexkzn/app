import React from 'react';

function ImageCell({ src, width, height, alt }) {
  return (
    <div className="table__image-cell">
      <img src={src} width={width} height={height} alt={alt} />
    </div>
  );
}

export default ImageCell;
