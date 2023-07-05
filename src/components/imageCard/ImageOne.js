import React from 'react';
import firstImage from '../../img/bee.png'

const ImageOne = (props) => {
  function addKey(){
    props.theKey(1);
}
  
  return(
    <div>
        <img src={firstImage} height="240" width="240" onClick={addKey} alt="bee"></img>
        <p>Bee</p>
    </div>
  )    
}

export default ImageOne;
