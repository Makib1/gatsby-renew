import React from 'react'
import '../static/style/componentStyle/count.scss';


const Count = ({count}) => {
  return (
    <div className="count"><p>--&nbsp;{count}</p></div>
  )
}

export default Count;