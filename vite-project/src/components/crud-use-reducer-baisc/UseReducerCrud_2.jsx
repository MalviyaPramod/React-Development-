import React, { useEffect, useReducer, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from "axios";
// import InputFields from './input-fields/InputFields';
// import InputFormButtons from './buttons/InputFormButtons';
// import InputTables from './input-table/InputTables';
const initVal = {
  name: "",
  email: "",
  apidata: []
}

const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'UPDATE_SENT_API_DATA':
      let { name, value } = action.payload
      return {
        ...state,
        //daynmic key ko store kar rahe hai [] se
        [name]: value
      }

    case 'GET_API_DATA':
      return {
        ...state,
        apidata: action.payload
      }

    case 'EDIT_API_DATA':
      return {
        ...state,
        //store id for update data after edit this will call in Update functions (updateAPIdataAfterEdit())
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email
      }

    case 'DELETE_ITEM':
    return{
      ...state,
      /* Delete Item from the apidata array only api se delete ni karega*/
      //ek tarh se return me apidata me id store ho rahi hai
     
      apidata : state.apidata.filter((element)=>{
        if(element.id !== action.payload){
          return element.id
        }
      })
    }
    case 'CLEAR_INPUT_FILEDS':
      return{
        ...state,
        name:"",
        email:""
      }

    default: state
  }
}
const UseReducerCrud_2 = () => {

  const [firstState, dispatch] = useReducer(reducer, initVal)
  const [istrue, setIsTrue] = useState(true);

  const apiPostData = (data) => {
    // console.log(data)
    dispatch({
      type: "UPDATE_SENT_API_DATA",
      payload: data
    })
  }

  const addInputDataTOapi = () => {
    //copy of object kuki 2 item hi pass krna hai kuki firstState ko pass krne se apidata[] bhia
    //ja raha tha isliye 2 item hi store krna hai apidata only data get krne ke liye hai
    const { apidata, ...sentTwoItems } = firstState;
    // console.log(sentTwoItems)

    axios.post('https://643133313adb159651675889.mockapi.io/crud/crud-system', sentTwoItems)
      .then((response) => {
        console.log("Data Post Succesfully!");
        getAPIdata();
      }).catch((error) => {
        console.log(error);
      })
      
  }

  const getAPIdata = () => {
    axios.get('https://643133313adb159651675889.mockapi.io/crud/crud-system')
      .then((response) => {
        const result = response.data;
        console.log(result)
        dispatch({
          type: "GET_API_DATA",
          payload: result
        })
      })
    console.log("data get sucssfully!")
  }


  const editInputItems = (data) => {
    setIsTrue(false)
    //  console.log("Edit run!")
    dispatch({
      type: "EDIT_API_DATA",
      payload: data
    })
  }

  const updateAPIdataAfterEdit = (id) => {
    console.log(id)
    const { apidata, ...sentTwoItems } = firstState;
    console.log(sentTwoItems)
    axios.put(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${id}`, sentTwoItems)
      .then((response) => {
        console.log(response.data)
        getAPIdata();
      }).catch((error) => {
        console.log(error)
      })
  }

  const deteletItems = (id) => {
    console.log(id)
    dispatch({
      type:"DELETE_ITEM",
      payload:id
    })

    
     axios.delete(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${id}`).
      then((response)=>{
        console.log("delete item")
      })
     
    
  }
  const inputEventHandle = (e) => {
    const result = e.target
    // console.log(result)
    apiPostData(result);
  }

  const submitHandle = (e) => {
    e.preventDefault();
    if (istrue === true) {
      //Send only name and email not apidata
      addInputDataTOapi();
      inputFiledClear();
    } else {
      updateAPIdataAfterEdit(firstState.id)
      inputFiledClear();
    }
    console.log("Submit Working!")
  }
  
  const inputFiledClear = () =>{
   dispatch({
    type:"CLEAR_INPUT_FILEDS"
   })
  }

  useEffect(() => {
    //Get API Data for display in table
    getAPIdata();
  }, [])
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Form Data Using Child Component !</h3>
            <p>{firstState.name} | {firstState.email}</p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={firstState.name}
                  onChange={inputEventHandle}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={firstState.email}
                  placeholder="Email"
                  onChange={inputEventHandle}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={submitHandle}>
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-md-6 mt-3">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {firstState.apidata.map((element, idx) => {
                  return (<tr key={idx}>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => { editInputItems(element) }}
                      >Edit</button> | <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => { deteletItems(element.id) }}
                      >Delete</button>
                    </td>

                  </tr>)
                })}

              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default UseReducerCrud_2