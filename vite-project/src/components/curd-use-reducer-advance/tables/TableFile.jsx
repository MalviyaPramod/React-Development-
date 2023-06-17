import React from 'react';
import Table from 'react-bootstrap/Table';

const TableFile = (props) => {
  const data = props.sendApiStoreData;
  console.log(data)
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
                <tr>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>
                    <button className='btn btn-primary'>Edit</button>|
                    <button className='btn btn-success'>Delete</button>
                  </td>
                </tr>
              )
            })
          }
          {/* <tr>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>
              <button className='btn btn-primary'>Edit</button>|
              <button className='btn btn-success'>Delete</button>
            </td>
          </tr> */}
        </tbody>
      </Table>
    </>
  )
}

export default TableFile