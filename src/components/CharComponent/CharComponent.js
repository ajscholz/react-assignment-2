import React from 'react';

const charCompStyle = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black',
}

const CharComponent = (props) => {
  return (
    <div onClick={props.click} style={charCompStyle}>
      <p>{props.input}</p>
    </div>
  )
}

export default CharComponent
