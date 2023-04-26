import React, { useEffect, useState } from 'react'
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const CrudPhase1 = () => {
  const [formData, setformData] = useState({
    fname: "",
    email: "",
    phone: "",
    foods: []
  })

  const [formError, setformError] = useState({});
  const [getAPIData, setGetApiData] = useState([]);

  // 2 1
  // .push({ name: "new name" }) ;

  const[isEdit, setIsEdit] = useState(false);
  var foodItem = ['panner', 'daal', 'roti'];
  const inputEventHandle = (event) => {
    const { name, value } = event.target;
    if(event.target.name === 'foods'){

      let olddata = {...formData}

      if(event.target.checked){
        olddata.foods.push(event.target.value);
      }else{

        //--Delete Item Filter methods
          // olddata.foods = olddata.foods.filter(el => el !== event.target.value);
        

        //Delete Item Splice methods
        let index = olddata.foods.indexOf(event.target.value);
        // if(index !== -1){olddata.foods.splice(index, 1);}
        index !== -1 ? olddata.foods.splice(index, 1) : null;

      }
      setformData(olddata);
    }else{
      setformData((prevl)=>{
        return {
          ...prevl,
          [name]: value
        }
      })
    }
  }

  const validationFormData = (event) => {
    let err = {};

    if (formData.fname === '') {
      err.fname = "Name Required!";
    }

    if (formData.email === '') {
      err.email = "Email Required!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!regex.test(formData.email)) {
        err.email = 'Email not valid!'
      }
    }

    if (formData.phone === '') {
      err.phone = 'Phone Required!'
    }

    if (formData.foods.length < 1) {
      err.foods = 'Any One Chooess';
    }
    setformError({ ...err });

    // TODO: need to study how to work
    return Object.keys(err).length < 1;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const isValid = validationFormData();
    if (isValid) {
     
      if(isEdit === true){
        updateFormData(formData.id);
      }else{
        sendFormData();
        alert("Form Submit!");
      }
    } else {
      alert("Form In-valid!")
    }
    
    
    console.log("Form Submit !", formData);
  }
 
   /*========SEND DATA FORM API=========*/
  const sendFormData = async () =>{
     await axios.post("https://643133313adb159651675889.mockapi.io/crud/form", formData);
     getFormData()
     
     setformData({ fname: "",
     email: "",
     phone: "",
     foods: []
    })
  }


  /*========GET DATA FORM API=========*/
  const getFormData = () => {
    axios.get("https://643133313adb159651675889.mockapi.io/crud/form")
      .then((res) => {
        setGetApiData(res.data);
      })
  }
  /*--UPDATE--*/
  const updateFormData = (id)=>{
    axios.put(`https://643133313adb159651675889.mockapi.io/crud/form/${id}`, formData)
    alert('Update Fome Data!');
  }

  /*========DELETE DATA FORM API=========*/
  const deleteFormData = (id) =>{
    console.log(id);
    axios.delete(`https://643133313adb159651675889.mockapi.io/crud/form/${id}`).then(()=>{
      getFormData();
    })
  }

   
  /*=====STORE DATA IN FOR UPDATE=====*/
  const setToLocalStorage = (id, fname, email, phone, foods) =>{
    
    localStorage.setItem('id', id);
    localStorage.setItem('fname', fname);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('foods', foods);

    setformData({
      id:id,
      fname: fname,
      email: email,
      phone: phone,
      foods: foods
    });

  
    setIsEdit(true);
  }
  

  useEffect(() => {
    getFormData();
  }, [])
  
  return (
    <>
      <h1 className='text-center mt-3 mb-3'>Fill The Fileds</h1>
      <Container>
      <Row className='justify-content-center'>
        <Col md="5">

          <Form onSubmit={onSubmitHandler}>
            <Row>
              <Col md='6'>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={inputEventHandle}
                    value={formData.fname}
                    name='fname'
                  />
                </Form.Group>
                <span style={{ color: "red" }}>{formError.fname}</span>
              </Col>
              <Col md='6'>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter a Email"
                    onChange={inputEventHandle}
                    value={formData.email}
                    name='email'
                  />
                </Form.Group>
                <span style={{ color: "red" }}>{formError.email}</span>
              </Col>
              <Col md='6'>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone Number"
                    onChange={inputEventHandle}
                    value={formData.phone}
                    name='phone'
                  />
                </Form.Group>
                <span style={{ color: "red" }}>{formError.phone}</span>
              </Col>
              <Col md='6'>
                <Form.Label>Food's</Form.Label>

                {
                  foodItem.map((element, index) => {
                    return (
                      <Form.Group className="mb-3" key={index}>
                        <Form.Check
                          type="checkbox"
                          name="foods"
                          label={element}
                          value={element}
                          onChange={inputEventHandle}
                          checked={formData.foods.indexOf(element) > -1}
                        />
                      </Form.Group>
                    )

                  })
                }
                <span style={{ color: "red" }}>{formError.foods}</span>
                
              </Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
        <Col md="6">
        <Table striped hover variant="dark">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
              getAPIData.map((element, idx)=>{
                // console.log(element);
                return (
                  <tr key={idx}>
                  <td>{element.id}</td>
                  <td>{element.fname}</td>
                  <td>{element.email}</td>
                  <td>{element.phone}</td>
                  <td>
                    <Button variant="outline-success" className='editbtn' onClick={(e)=>setToLocalStorage(
                      element.id,
                      element.fname,
                      element.email,
                      element.phone,
                      element.foods
                    )}>Edit</Button> | 
                    <Button variant="outline-danger" onClick={()=>deleteFormData(element.id)}>Delete</Button>
                  </td>
                </tr>
                )
              })
              }
             </tbody>
          </Table>
        </Col>
      </Row>
      </Container>
      
    </>
  )
}

export default CrudPhase1