import React from 'react'
import Form from 'react-bootstrap/Form';

const InputFields = () => {
    const ObjConvertToArr = Object.values(props.sentInputelement);
    
    const inputHandle = (event) =>{
        const data = event.target.value;
        props.getInputData(data);
    }

    return (
        <>
        
          {
            ObjConvertToArr.map((eleItem ,idx)=>{
               return (

                    <Form.Group className="mb-3" key={idx}>
                        <Form.Label><b>{eleItem.label}</b></Form.Label>
                        <Form.Control 
                            type={eleItem.text}
                            placeholder={eleItem.placeholder}
                            name={eleItem.name}
                            onChange={inputHandle}
                        />
                    </Form.Group>
                )
            })
          }
            
        </>
    )
}

export default InputFields