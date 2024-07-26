import React, { useEffect, useRef } from 'react';
import { trailer } from '../assets';

const TrailerVideo = () => {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoContainer = videoContainerRef.current;
      const videoTop = videoContainer.getBoundingClientRect().bottom;

      const triggerOffsetLargeScreen = window.innerHeight - 50;
      const triggerOffsetSmallScreen = window.innerHeight - 540;

      if (window.innerWidth >= 768) {
        // Logic for large screens
        if (videoTop <= triggerOffsetLargeScreen) {
          videoContainer.classList.add('video-expanded');
        } else {
          videoContainer.classList.remove('video-expanded');
        }
      } else {
        // Logic for small screens
        if (videoTop <= triggerOffsetSmallScreen) {
          videoContainer.classList.add('video-expanded');
        } else {
          videoContainer.classList.remove('video-expanded');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check to apply the class on component mount if needed
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={videoContainerRef} className='w-[90%] mx-auto rounded-[80px] duration-300 ease-linear overflow-hidden max-md:mt-7'>
      <video src={trailer} autoPlay muted loop className='w-full object-cover'></video>
    </div>
  );
};

export default TrailerVideo;
