import React, { useEffect, useState } from 'react';
import ImageOne from './imageCard/ImageOne';
import ImageTwo from './imageCard/ImageTwo';
import ImageThree from './imageCard/ImageThree';
import ImageFour from './imageCard/ImageFour';
import ImageFive from './imageCard/ImageFive';
import ImageSix from './imageCard/ImageSix';
import ImageSeven from './imageCard/ImageSeven';
import ImageEight from './imageCard/ImageEight';
import ImageNine from './imageCard/ImageNine';
import ImageTen from './imageCard/ImageTen';
import ImageEleven from './imageCard/ImageEleven';
import ImageTwelve from './imageCard/ImageTwelve';

const PageDisplay = () => {
    let [ score, setScore ] = useState(0);
    let [ highScore, setHighScore] = useState(0);
    let [ clickedArray, setClickedArray ] = useState([]);
    let [ randomNumbersArray, setRandomNumbersArray ] = useState([]);

    let cardsArray = [
        <ImageOne theKey={addKey} />, 
        <ImageTwo theKey={addKey} />, 
        <ImageThree theKey={addKey} />, 
        <ImageFour theKey={addKey} />, 
        <ImageFive theKey={addKey} />, 
        <ImageSix theKey={addKey} />, 
        <ImageSeven theKey={addKey} />, 
        <ImageEight theKey={addKey} />, 
        <ImageNine theKey={addKey} />, 
        <ImageTen theKey={addKey} />, 
        <ImageEleven theKey={addKey} />, 
        <ImageTwelve theKey={addKey} />
    ]

    function contains(array, item) {
        var i = array.length;
        while (i--) {
           if (array[i] === item) {
               return true;
           }
        }
        return false;
    }

    function addKey(key){
        if(!contains(clickedArray, key)){
            setClickedArray([...clickedArray, key])
            setScore(score + 1)
            }
        else{
            if(score>highScore){
               setHighScore(score);
            }
            setScore(0);
            setClickedArray([]);
        }
        setRandomNumbersArray(updateRandomNumbers());
    }
   
    function updateRandomNumbers(){
        let numberArray = []
        while(numberArray.length < 12){
            let newNumber = Math.floor(Math.random()*12)
            if(!contains(numberArray, newNumber)){
                numberArray.push(newNumber);
            }
        }
        return numberArray;
    }

    useEffect(() => {
        setRandomNumbersArray(updateRandomNumbers());
    }, [clickedArray])

    return(
        <>  
            <div class = "score">
                <h4>Score: {score}</h4>
                <h4>High Score: {highScore}</h4>
            </div>
            <div class = "container">
            {cardsArray[randomNumbersArray[0]]}
            {cardsArray[randomNumbersArray[1]]}
            {cardsArray[randomNumbersArray[2]]}
            {cardsArray[randomNumbersArray[3]]}
            {cardsArray[randomNumbersArray[4]]}
            {cardsArray[randomNumbersArray[5]]}
            {cardsArray[randomNumbersArray[6]]}
            {cardsArray[randomNumbersArray[7]]}
            {cardsArray[randomNumbersArray[8]]}
            {cardsArray[randomNumbersArray[9]]}
            {cardsArray[randomNumbersArray[10]]}
            {cardsArray[randomNumbersArray[11]]}
        </div>
        </>
        
    )    
}

export default PageDisplay;
