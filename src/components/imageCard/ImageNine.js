import React from 'react';
import ninthImage from '../../img/sheep.png'

const ImageNine = (props) => {
  function addKey(){
    props.theKey(9);
  }
  return(
    <div>
        <img src={ninthImage} height="240" width="240" onClick={addKey} alt='sheep'></img>
        <p>Sheep</p>
    </div>
  )    
}

export default ImageNine;
