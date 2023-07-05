import React from 'react';
import tenthImage from '../../img/sloth.png'

const ImageTen = (props) => {
  function addKey(){
    props.theKey(10);
  }
  return(
    <div>
        <img src={tenthImage} height="240" width="240" onClick={addKey} alt='sloth'></img>
        <p>Sloth</p>
    </div>
  )    
}

export default ImageTen;
