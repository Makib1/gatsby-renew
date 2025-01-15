import React from "react"
import '../static/style/componentStyle/underlineButton.scss';
import arrow from '../static/images/component-img/PlatformArrow.svg';

const UnderlineButton = ({ text }) => {
  return (
    <>
      <button className="right-arrow-btn underline-remove-effect">
        <p>{text}</p>
        <span className="arrow"><img src={arrow} alt="arrow"/> </span>
      </button>
    </>
  )
}

export default UnderlineButton
