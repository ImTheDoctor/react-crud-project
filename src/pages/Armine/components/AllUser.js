import { useState, useEffect } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';
import Navbar from "./NavBar";
import { getUsers, deleteUser} from "../service/api";



const StyledTable = styled(Table)`
  width:90%;
  margin: 50px auto 0 auto;
`
const Thead = styled(TableRow)`
  background:#000;
  & > th{
    color:#fff;
    font-size:20px;
  }
`
const TBody = styled(TableRow)`
  background:#0000;
  & > td{
    font-size:20px;
  }
`
const AllUser = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, [])

  const getUserDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  }

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
  }

  return (
    <>
      <Navbar />
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>



          {
            users.data && users.data.map((user,index) => (
              <TBody key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell><Button variant="contained" style={{ marginRight: 5 }} component={Link} to={`/armine/edit/${user.id}`}>Edit</Button></TableCell>
                <TableCell><Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button></TableCell>
              </TBody>
            ))
          }





        </TableBody>
      </StyledTable>
    </>
  )
}

export default AllUser;