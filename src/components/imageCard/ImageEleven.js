import React from 'react';
import eleventhImage from '../../img/tiger.png'

const ImageEleven = (props) => {
  function addKey(){
    props.theKey(11);
  }
  return(
    <div>
        <img src={eleventhImage} height="240" width="240" onClick={addKey} alt='tiger'></img>
        <p>Tiger</p>
    </div>
  )    
}

export default ImageEleven;
