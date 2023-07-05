import React from 'react';
import thirdImage from '../../img/cat.png'

const ImageThree = (props) => {
  function addKey(){
    props.theKey(3);
  }
  return(
    <div>
        <img src={thirdImage} height="240" width="240" onClick={addKey} alt="cat"></img>
        <p>Cat</p>
    </div>
  )    
}

export default ImageThree;
