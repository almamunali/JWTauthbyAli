import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const history =useNavigate()
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
   
    const handleChange=(e)=>{
        setInput(prev=>({
            ...prev,
            [e.target.name]:e.target.value

        }))

    }
    const sendRequest =async()=>{
        const res= await axios.post("http://localhost:5000/api/signup",{
            name:input.name,
            email:input.email,
            password:input.password

        }).catch(err=>console.log(err));
        const data =await res.data;
        return data;
    }

    const handleSubmit = (e) => {
      e.preventDefault()
       console.log(input);
       sendRequest().then(()=>history("/login"))

    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <Box marginLeft="auto" marginRight='auto' width={300} display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
                    <Typography variant="h2">
                        Signup
                    </Typography>
                    <TextField name="name" onChange={handleChange} variant="outlined" value={input.name} placeholder='Name' margin='normal' />
                    <TextField name="email" onChange={handleChange} type="email" variant="outlined" value={input.email} placeholder='Email' margin='normal' />
                    <TextField name="password" onChange={handleChange} type='password' variant="outlined" value={input.password} placeholder='Password' margin='normal' />
                    <Button variant='contained' type="submit">SignUp</Button>
                </Box>
            </form>
        </div>
    )
}

export default Signup
