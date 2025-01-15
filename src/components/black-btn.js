import React from 'react';
import '../static/style/componentStyle/black-btn.scss';

function BlackBtn({text,onClick}) {
  return (
    <button className='black-btn'  onClick={onClick}>
        <span>{text}</span>
    </button>
  )
}

export default BlackBtn