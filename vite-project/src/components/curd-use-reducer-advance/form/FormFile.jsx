import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const intVal = {
    name:"",
    email:""
}
const FormFile = (props) => {
    const [inputData, setInputData] = useState(intVal);
    const inputHandle = (event) => {
        const result = event.target;
        const {name, value} = result;

        setInputData(()=>{
            return{
                ...inputData,
                [name]:value
            }
        })
    }

    const submitHandle = async (e) => {
        e.preventDefault()
        // props.getInputHandle(inputData);
        await props.onSubmit(inputData);
        setInputData(intVal)
        // await props.getApifunctionPass();
        console.log("Data Submit SuccesFully!")
    }

    return (
        <>
            <Form onSubmit={submitHandle} className='mb-5'>
                {
                    props.sendInputHandle.map((element) => {
                        return (
                            <>
                                <Form.Group className="mb-3" key={element.id}>
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        type={element.type}
                                        name={element.name}
                                        placeholder={element.placeholder}
                                        value={inputData[element.name] || ''}
                                        onChange={inputHandle}
                                    />
                                </Form.Group>
                            </>
                        )
                    })
                }
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default FormFile