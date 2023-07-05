import React from 'react';
import fourthImage from '../../img/catnmouse.png'

const ImageFour = (props) => {
  function addKey(){
    props.theKey(4);
  }
  return(
    <div>
        <img src={fourthImage} height="240" width="240" onClick={addKey} alt='cat and mouse'></img>
        <p>Cat and Mouse</p>
    </div>
  )    
}

export default ImageFour;
