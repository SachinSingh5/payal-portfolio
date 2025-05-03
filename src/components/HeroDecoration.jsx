import React from 'react';

const HeroDecoration = () => {
    return (
        <div className="mt-20 md:mt-40 grid grid-cols-10 gap-4 opacity-75">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-2 rounded-full bg-gradient-to-r from-designer-purple to-designer-lightpurple"
              style={{
                opacity: 0.1 + i * 0.09,
                transform: `scaleX(${0.5 + i * 0.05})`,
                marginLeft: `${i * 5}%`
              }}
            ></div>
          ))}
        </div>
    );
};

export default HeroDecoration