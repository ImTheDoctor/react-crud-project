import { FormGroup,FormControl,InputLabel,Input,Typography,Button, styled} from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import  Navbar  from './NavBar';
import {getUser, editUser} from '../service/api';


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

const EditUser = () => {
  
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  },[])

  const getUserData = async () => {
    const response = await getUser(id);
    setUser(response.data);
    console.log(setUser);
       
  }
  
  const onValueChange = (e) =>{
     setUser({...user, [e.target.name]:e.target.value})
      console.log(user);
  }
  const EditUserDetails = async() => {
    await editUser(user, id);
    navigate('/armine/all')
  }

  return (
    <>
    <Navbar/>
    <Container>
      <Typography variant='h4'>Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        {console.log(user.name)}
        <Input onChange={(e) => onValueChange(e)}  name="name" value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>Surname</InputLabel>
        <Input onChange={(e) => onValueChange(e)}  name="surname" value={user.surname}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)}  name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)}  name="phone" value={user.phone}/>
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input onChange={(e) => onValueChange(e)}  name="password" value={user.password}/>
      </FormControl>
      <FormControl >
        <Button onClick={()=> EditUserDetails()} variant='contained' >Edit User</Button>
      </FormControl>
    </Container>
    </>
  )
}

export default EditUser;