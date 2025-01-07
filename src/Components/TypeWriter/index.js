import React, { useState, useEffect } from "react";

const TypewriterEffect = ({
  text,
  delay = 100,
  onComplete,
  infinite = false,
  speed = 2000,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const cursor = "|";
  const isArray = Array.isArray(text);

  useEffect(() => {
    let typingTimeout;
    let cursorInterval;

    if (currentIndex < (isArray ? text[textArrayIndex].length : text.length)) {
      // Typing effect
      typingTimeout = setTimeout(() => {
        setCurrentText(
          (prev) =>
            prev +
            (isArray ? text[textArrayIndex][currentIndex] : text[currentIndex])
        );
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    } else if (infinite || isArray) {
      typingTimeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
        if (isArray) {
          setTextArrayIndex((prev) => (prev + 1) % text.length);
        }
      }, speed);
    } else if (onComplete) {
      onComplete();
    }

    // Cursor blinking effect
    cursorInterval = setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 500);

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(cursorInterval);
    };
  }, [
    currentIndex,
    text,
    textArrayIndex,
    delay,
    onComplete,
    infinite,
    isArray,
  ]);

  return (
    <span>
      {currentText}
      {cursorVisible ||
      currentIndex < (isArray ? text[textArrayIndex].length : text.length)
        ? cursor
        : ""}
    </span>
  );
};

export default TypewriterEffect;
