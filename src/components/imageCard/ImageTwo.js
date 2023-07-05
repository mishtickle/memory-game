import React from 'react';
import secondImage from '../../img/bird.png'

const ImageTwo = (props) => {
  function addKey(){
    props.theKey(2);  
  }

  return(
    <div>
        <img src={secondImage} height="240" width="240" onClick={addKey} alt="bird"></img>
        <p>Bird</p>
    </div>
  )    
}

export default ImageTwo;
