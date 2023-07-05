import React from 'react';
import eighthImage from '../../img/rat.png'

const ImageEight = (props) => {
  function addKey(){
    props.theKey(8);
  }
  return(
    <div>
        <img src={eighthImage} height="240" width="240" onClick={addKey} alt='rat'></img>
        <p>Rat</p>
    </div>
  )    
}

export default ImageEight;
