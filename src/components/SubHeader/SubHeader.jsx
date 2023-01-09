import React from 'react'
import './SubHeader.css'

function SubHeader(props) {
  return (
    <div className='subheader'>
        <p>{props.title}</p>
        <div className="line"></div>
    </div>
  )
}

export default SubHeader