import React from 'react'
import Table from 'react-bootstrap/Table';
const InputTables = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pramod</td>
            <td>p1@gmail.com</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default InputTables