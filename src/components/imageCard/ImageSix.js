import React from 'react';
import sixthImage from '../../img/dog.png'

const ImageSix = (props) => {
  function addKey(){
    props.theKey(6);
  }
  return(
    <div>
        <img src={sixthImage} height="240" width="240" onClick={addKey} alt='dog'></img>
        <p>Dog</p>
    </div>
  )    
}

export default ImageSix;
