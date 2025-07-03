import React, { useEffect, useState } from 'react';

const AnimatedText: React.FC = () => {
  const [text, setText] = useState("こんにちはこんにちはここんにちはちちちはちはちち");
  const [currentIndex, setCurrentIndex] = useState(0);
  const targetText = "<h3>Sebastian Duarte<h3>";

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < targetText.length) {
        setText(prev => {
          const newText = prev.split('');
          newText[currentIndex] = targetText[currentIndex];
          return newText.join('');
        });
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex, targetText]);

  return (
    <div className="animated-text">
      <div id="text">{text}</div>
    </div>
  );
};

export default AnimatedText;
