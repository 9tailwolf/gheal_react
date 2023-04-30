import React from 'react';

function ImageButton(props) {
  return (
    <button onClick={props.onClick}>
      <img src={props.imageSrc} alt={props.imageAlt} />
    </button>
  );
}

export default ImageButton;