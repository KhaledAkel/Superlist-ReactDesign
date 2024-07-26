import React from 'react'

const Frame = (props) => {
  return (
    <iframe
      style={{ border: 'none', width: '100%', height: '100%', borderRadius: '80px' }}
      src={props.src}
      allowFullScreen
      loading="lazy"
    ></iframe>
  )
}

export default Frame
