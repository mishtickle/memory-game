import React from 'react';
import seventhImage from '../../img/dolphin.png'

const ImageSeven = (props) => {
  function addKey(){
    props.theKey(7);
  }
  return(
    <div>
        <img src={seventhImage} height="240" width="240" onClick={addKey} alt='dolphin'></img>
        <p>Dolphin</p>
    </div>
  )    
}

export default ImageSeven;
