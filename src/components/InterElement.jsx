import React, { useEffect, useRef, useState } from 'react';

const InterElement = (props) => {
  const colors = ['#2590F2', '#F84F39', '#2A966F']; // Define your set of colors here
  const [hoverColor, setHoverColor] = useState(colors[0]);
  const elementRef = useRef(null); // Create a ref to reference the element

  useEffect(() => {
    let colorIndex = 0;
    let timer;

    const changeColor = () => {
      colorIndex = (colorIndex + 1) % colors.length;
      const newColor = colors[colorIndex];
      setHoverColor(newColor);
      document.documentElement.style.setProperty('--hover-color', newColor); // Update root variable
    };

    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInViewport && !timer) {
          // Element is in view and no timer is running
          timer = setInterval(changeColor, 3000);
        } else if (!isInViewport && timer) {
          // Element is out of view and timer is running
          clearInterval(timer);
          timer = null;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the element is already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer); // Clean up interval
    };
  }, []);

  return (
    <div ref={elementRef} className='w-full h-fit flex items-center gap-x-7 font-ibm group'>
      <h1 className='element max-md:w-full text-[85px] max-md:text-[35px] font-bold text-transparent duration-300 cursor-pointer'>
        {props.title}
      </h1>
      <p className='text-[16px] w-[200px] text-whiteGray opacity-0 group-hover:opacity-45 duration-300 transition-opacity font-semibold max-md:hidden'>
        {props.detail}
      </p>
    </div>
  );
};

export default InterElement;
