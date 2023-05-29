import React, { useReducer, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.scss';

const inValue = {
  fullName: "",
  lastName: ""
}

const UseReducerCrud = () => {

  const reducer = (state, action) => {
    const { name, value } = action.payload;
    switch (action.type) {
      case "ADD_EMPLOYEE":
        return {
          ...state,
          [name]: value
        };

      default:
        return state;
    }

  }

  const [firstState, dispatch] = useReducer(reducer, inValue);

  function addEmployee(employee) {
   
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee
    })
  }

  const inputHandle = (event) => {
    const result = event.target;
    addEmployee(result);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log("Submit Form!");
  }


  return (
    <>
      <section>
        <h1 className='text-center mt-2 mb-5'><span style={{ color: "red" }}>"UseReducer"</span> Crud Oprations</h1>
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <h4>{firstState.fullName} {firstState.lastName}</h4>

              <div className="use-reduer-form">
                <Form onSubmit={onSubmitForm}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="Text"
                      placeholder="FullName"
                      value={firstState.fullName}
                      name="fullName"
                      onChange={inputHandle}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="Text"
                      placeholder="LastName"
                      value={firstState.lastName}
                      name="lastName"
                      onChange={inputHandle}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Foods Item's" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default UseReducerCrud