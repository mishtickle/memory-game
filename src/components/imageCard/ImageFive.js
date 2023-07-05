import React from 'react';
import fifthImage from '../../img/crab.png'

const ImageFive = (props) => {
  function addKey(){
    props.theKey(5);
  }
  return(
    <div>
        <img src={fifthImage} height="240" width="240" onClick={addKey} alt='crab'></img>
        <p>Crab</p>
    </div>
  )    
}

export default ImageFive;
