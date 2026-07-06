import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingText = ({ text }) => {
  return (
    <div style={{
      whiteSpace: 'pre-wrap',
      fontFamily: 'Fira Code, monospace',
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#000000ff',
    }}>
      <Typewriter
        words={[text]}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={1}
        deleteSpeed={0}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypingText;
