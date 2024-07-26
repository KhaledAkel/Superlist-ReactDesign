import React, { useEffect, useState } from "react";

const BigButton = () => {
    const colors = ['#2A966F','#6B66DA', '#F84F39']; // Array of colors
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);
    const colorChangeThreshold = 800; // Distance threshold to change color

    useEffect(() => {
        // Set the initial color
        document.documentElement.style.setProperty('--mouse-move-color', colors[currentColorIndex]);
    }, []);

    const handleMouseMove = (e) => {
        if (startX === null || startY === null) {
            setStartX(e.clientX);
            setStartY(e.clientY);
            return;
        }

        const distanceX = Math.abs(e.clientX - startX);
        const distanceY = Math.abs(e.clientY - startY);

        if (distanceX > colorChangeThreshold || distanceY > colorChangeThreshold) {
            const newColorIndex = (currentColorIndex + 1) % colors.length;
            setCurrentColorIndex(newColorIndex);
            setStartX(e.clientX);
            setStartY(e.clientY);
            document.documentElement.style.setProperty('--mouse-move-color', colors[newColorIndex]);
        }
    };

    return (
        <div className='w-full bg-darkBlue transition-colors duration-1000 pb-44' onMouseMove={handleMouseMove}>
            <div className='big-button w-[80%] md:w-[70%] h-[600px] max-md:h-[300px] mx-auto rounded-full flex justify-center items-center p-32 max-md:p-24 font-ibm text-[50px] text-white font-bold max-md:text-[44px] hover:scale-105 duration-300'>
                sign up for free
            </div>
        </div>
    );
}

export default BigButton;
