import React from 'react';
import Table from 'react-bootstrap/Table';

const TableFile = (props) => {
  const data = props.sendApiStoreData;
  return (
    <>
      <Table striped bordered hover>
        <thead>
          
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>
                    <button 
                        className='btn btn-primary' 
                        onClick={()=>{props.getEditHandle(element)}}
                    >Edit</button> | 
                    <button className='btn btn-success' onClick={()=>{props.deleteHandle(element.id)}}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default TableFile