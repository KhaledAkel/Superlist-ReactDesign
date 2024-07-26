import React from 'react';
import classNames from 'classnames';

const Note = (props) => {
  const { slideFrame, leftColor, rightColor, line1, line2, line3 } = props;

  return (
    <div className='w-full md:h-[100vh] md:pt-[3vh] md:sticky top-0'>
      <div className='w-full max-md:h-[600px] md:h-[88vh] flex max-md:flex-col'>
        <div
          className={classNames(
            'md:w-1/2 w-full max-md:h-[35%] rounded-tl-[80px] max-md:rounded-tr-[80px] md:rounded-bl-[80px] flex justify-center items-center',
            `bg-${leftColor}`
          )}
        >
          <div className='text-[55px] max-md:text-[35px] text-center font-ibm leading-[56px] font-bold max-md:leading-8'>
            <h1
              className={classNames(
                'bg-clip-text text-transparent',
                `bg-${rightColor}`
              )}
            >
              {line1}
            </h1>
            <h1>{line2}</h1>
            <h1>{line3}</h1>
          </div>
        </div>
        <div
          className={classNames(
            'md:w-1/2 max-md:h-[65%] w-full rounded-br-[80px] md:rounded-tr-[80px] max-md:rounded-bl-[80px] flex items-center justify-center',
            `bg-${rightColor}`
          )}
        >
          {slideFrame}
        </div>
      </div>
    </div>
  );
};

export default Note;
