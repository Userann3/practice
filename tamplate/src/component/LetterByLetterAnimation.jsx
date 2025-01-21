import React, { useState, useEffect } from 'react';

const LetterByLetterAnimation = ({ text, speed, className }) => {
  useEffect(()=>{
    console.log('Text prop:', text);

  },[])
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Ensure text is a valid string before proceeding
    if (typeof text !== 'string' || text.length === 0) {
      console.error('Invalid text prop passed to LetterByLetterAnimation');
      return; // Exit if text is not a valid string
    }

    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        clearInterval(intervalId); // Stop the animation once all letters are displayed
      }
    }, speed);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [text, speed]);

  return <span className={`font-bold text-xl ${className}`}>{displayedText}</span>;
};

export default LetterByLetterAnimation;
