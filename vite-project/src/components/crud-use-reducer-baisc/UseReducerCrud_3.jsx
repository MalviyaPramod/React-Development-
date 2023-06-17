import React, { useEffect, useReducer, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const intiValue = {
    name: "",
    email: "",
    apidata: []
}

const reducer = (state, action) => {
    switch (action.type) {
        
        case "ADD_DATA":
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value
            }
        case "GET_DATA":
            return {
                ...state,
                apidata: action.payload
            }
        case "EDIT_DATA":
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email
            }

        case "CLEAR_DATA":
            return {
                ...state,
                name: "",
                email: ""
            }
        default:
            state
    }
}

const UseReducerCrud_3 = () => {
    const [startingState, dispatch] = useReducer(reducer, intiValue);
    const [isTrue, setIsTrue] = useState(true);
  

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isTrue === true) {
            addData();
            clearInput();
        } else {
            updateData(startingState.id);
            clearInput();
        }

        console.log("Submit Working!")
    }

    const handleInput = (e) => {
        const result = e.target;
        onlyUpdateData(result)
    }

    const onlyUpdateData = (data) => {
        dispatch({
            type: "ADD_DATA",
            payload: data
        })
    }

    const addData = () => {
        /*Only Get Twow Items*/
        const { apidata, ...items } = startingState;
        axios.post(`https://643133313adb159651675889.mockapi.io/crud/crud-system`, items)
            .then((response) => {
                console.log(response.data)
                getData();
            }).catch((error) => { error })
    }

    const getData = () => {
        axios.get(`https://643133313adb159651675889.mockapi.io/crud/crud-system`)
            .then((response) => {
                const result = response.data;
                console.log(result)
                dispatch({
                    type: 'GET_DATA',
                    payload: result
                })
            }).catch((error) => {
                console.log(error)
            })
        console.log("I am GetData!")
    }

    const editItems = (data) => {
        setIsTrue(false)
        /*Pura ek fileds ka data bjente hai fir usme se id lenge */
        dispatch({
            type: "EDIT_DATA",
            payload: data
        })
    }

    const updateData = (id) => {
        /*Only Get Twow Items*/
        const { apidata, ...items } = startingState;
        axios.put(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${id}`, items)
            .then((response) => {
                getData();
            }).catch((error) => {
                console.log(error)
            })
    }

    const deleteItems = (id) => {

        axios.delete(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${id}`)
            .then((response) => {
                console.log(response.data)
                getData();
            }).catch((error) => {
                console.log(error)
            })
    }

    const clearInput = () => {
        dispatch({
            type: "CLEAR_DATA",
        })
    }
    
    /*Search */
    useEffect(() => {
        getData();
    }, [])
    return (
        <Container>

            <div className="row">
                <div className="col-md-5">
                    <div className="reducer_three_form">
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group as={Col} md="12" className="mb-3">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        name="name"
                                        onChange={handleInput}
                                        value={startingState.name}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Email name"
                                        name="email"
                                        onChange={handleInput}
                                        value={startingState.email}
                                    />
                                </Form.Group>

                            </Row>

                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
                <div className="col-md-7">
                   
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                startingState.apidata.map((element, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{element.id}</td>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>
                                                <Button variant="success" onClick={() => { editItems(element) }}>Edit</Button> |
                                                <Button variant="warning" onClick={() => { deleteItems(element.id) }}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}

export default UseReducerCrud_3