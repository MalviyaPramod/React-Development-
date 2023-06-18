import React, { useEffect, useReducer, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style.css';

import FormFile from './form/FormFile';
import TableFile from './tables/TableFile';
import Axios from 'axios';

const inputAttribute = [
    {
        id: 1,
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "Enter Name",
    },
    {
        id: 2,
        label: "Email",
        name: "email",
        placeholder: "Enter Email",
    }
]
/*Nothing to use only for intilize iinstial value  */
const intiValue = {
    name: '',
    email: '',
    getApiDataStoreArr: []
}

const UseReducerCrudAdvance = () => {
    const [FirstState, setFirstState] = useState(intiValue)

    const addApiHandle = (data) => {
        Axios.post(`https://643133313adb159651675889.mockapi.io/crud/crud-system`, data)
            .then((response) => {
                console.log(response.data)
                getApiDataStore();
            }).catch((error) => {
                console.log(error)
            })
    }

    const getApiDataStore = () => {
        Axios.get(`https://643133313adb159651675889.mockapi.io/crud/crud-system`)
            .then((response) => {
                const result = response.data;
                console.log(result)
                setFirstState({
                    ...FirstState,
                    getApiDataStoreArr: result
                });
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getApiDataStore()
    }, [])

    console.log(FirstState)
    return (
        <>
            <Container>
                <h3 className='text-center mt'>Component Devided Advance UR</h3>
                {`Name: ${FirstState.name} || Email: ${FirstState.email}`}
                <Row>
                    <Col md={5}>
                        <FormFile
                            /*Send Input Attribute value to FormFile*/
                            sendInputHandle={inputAttribute}
                            onSubmit={addApiHandle}
                        />
                    </Col>
                    <Col md={7}>
                        <TableFile sendApiStoreData = {FirstState.getApiDataStoreArr}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UseReducerCrudAdvance