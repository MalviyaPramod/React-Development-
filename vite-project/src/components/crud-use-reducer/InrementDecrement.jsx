import React, { useReducer } from 'react'

const InrementDecrement = () => {
  const inVal = {
    inc: 0,
    dec: 0
  };

  const reducer = (state, action) => {
    //search deffrence between state and ...state later
    console.log({ state })
    console.log({ ...state })
    switch (action.type) {
      case 'inc':
        return {
          ...state,
          inc: state.inc + 1
        };
      case 'dec':
        return {
          ...state,
          dec: state.dec - 1
        };
    }
  }


  const [count, dispatch] = useReducer(reducer, inVal);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Inc: {count.inc}</p>
            <p>Dec: {count.dec}</p>
            <br />
            <button type='submit' className='btn btn-primary' onClick={() => dispatch({ type: 'inc' })}>Add</button>
            <button type='submit' className='btn btn-primary' onClick={() => dispatch({ type: 'dec' })}>Sub</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InrementDecrement