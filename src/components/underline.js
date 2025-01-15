import React, { useEffect, useRef } from 'react';
import { UseOnScreen } from '../services/useOnScreen';

const Underline = (props) => {
  const elementRef = useRef(null);
  const isOnScreen = UseOnScreen(elementRef);
  // console.log({isOnScreen},'isOnScreen');
  return (
    <>
      <div className="underline-class">
        <div className={`page-wrapper ${props?.class === 'max-width-100'&& "max-width-100"}`}>
          <div ref={elementRef}  className={`${isOnScreen?"animate-underline-class":""}`}></div>
        </div>
      </div>
      <div className="clear"></div>
    </>
  )
}

export default Underline
