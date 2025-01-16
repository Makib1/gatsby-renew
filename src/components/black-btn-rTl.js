import React from 'react';
import '../static/style/componentStyle/black-btn-rTl.scss';

function BlackBtnrTl({text,onClick}) {
  return (
    <button className='black-btn-rTl'  onClick={onClick}>
        <span>{text}</span>
    </button>
  )
}

export default BlackBtnrTl