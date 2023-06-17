import React from 'react'
import Button from 'react-bootstrap/Button';

const InputFormButtons = () => {
  const submitHandle = () =>{
    console.log("Submit!");
  }
  return (
    <>
      <Button variant="primary" onClick={submitHandle}>
        Submit
      </Button>
    </>
  )
}

export default InputFormButtons