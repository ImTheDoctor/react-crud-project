import { FormGroup,FormControl,InputLabel,Input,Typography,Button, styled} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Navbar  from './NavBar';
import {addUser} from '../service/api';

const Container = styled(FormGroup)`
  width:50%;
  margin:5% auto 0 auto;
  & > div {
    margin-top:20px;
  }
`
const initialValues = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  password:''
}


const AddUser = () => {

  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const onValueChange = (e) =>{
    
     setUser({...user, [e.target.name]:e.target.value})
      console.log(user);
  }

  const addUserDetails  = async () => {
    await addUser(user);
    navigate('/armine/all')
  }
  return (
    <>
    <Navbar/>
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name"/>
      </FormControl>
      <FormControl>
        <InputLabel>Surname</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="surname"/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email"/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone"/>
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="password"/>
      </FormControl>
      <FormControl >
        <Button onClick={()=> addUserDetails()} variant='contained' >Add User</Button>
      </FormControl>
    </Container>
    </>
  )
}

export default AddUser;