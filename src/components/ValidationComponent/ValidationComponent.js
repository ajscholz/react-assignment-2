import React from 'react';

const ValidationComponent = (props) => {

  return (
    <div>
      {
        (props.length < 5)
          ? <p style={{ backgroundColor: 'red', padding: 10 }}>Text is too short.</p>
          : <p style={{ backgroundColor: 'green', padding: 10}}>Text is long enough</p>
      }
    </div>
  )
}

export default ValidationComponent
