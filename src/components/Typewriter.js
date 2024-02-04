import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [print, setPrint] = useState(true);
  useEffect(() => {
    if (print && currentIndex < text.length) {
        const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
        
        return () => clearTimeout(timeout);
    } else {
        setPrint(false)
        if(currentIndex === 0) {
            setPrint(true)
        }
        const timeout = setTimeout(() => {
            setCurrentIndex(prevIndex => prevIndex - 1);
            setCurrentText(prevText => {return prevText.substring(0, currentIndex-1) });
          }, delay);
      
          return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  // Typing logic goes here

  return <span>{currentText}</span>;
};

export default Typewriter;