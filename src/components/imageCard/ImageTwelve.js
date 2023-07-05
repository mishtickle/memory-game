import React from 'react';
import twelvthImage from '../../img/whale.png'

const ImageTwelve = (props) => {
  function addKey(){
    props.theKey(12);
  }
  return(
    <div>
        <img src={twelvthImage} height="240" width="240" onClick={addKey} alt='whale'></img>
        <p>Whale</p>
    </div>
  )    
}

export default ImageTwelve;
