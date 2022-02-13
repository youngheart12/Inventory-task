import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import classes from './styles.module.css';
import { decideRole, isValidEmail } from '../../utility/utils';
import { updatedLoginState } from '../../store/features/user/userSlice';
export default function Login() {
    const navigateTo= useNavigate()
   const dispatch = useDispatch()
    const [data,setData]=useState({
        email:"",
        password:""
    })

    const [error,setError]=useState("");

    const handleLogin=()=>{
        if(isValidEmail(data.email))
        {
           const role=decideRole(data.email,data.password);
            if(role)
            {
                dispatch(updatedLoginState({role:role,isLogged:true}))
                navigateTo(role);
            }else{
                alert("Credentials mismatched")
            }
        }else{
            setError(true);
        }
    }

    const handleChange=(name,e)=>{
        const {target:{value}}=e;
        setData(prev=>{
           return{ ...prev,
            [name]:value
        }
    })
    }

    const isDisabled=!data.email || !data.password;
    console.log(error)
    return (
        <div className={classes.loginWrapper}>
          <div className={classes.loginBox}>
              <div className={classes.title}>Welcome to Inventory</div>
              <div className={classes.inputBoxWrapper}>
              <TextField id="outlined-basic" 
              label="Email" 
              variant="outlined" 
              type="text"
               fullWidth 
               onChange={(e)=>handleChange("email",e)}
               helperText={error?"Invalid email":null}
              error={error}
              />
              </div>
              <div className={classes.inputBoxWrapper}>
              <TextField 
              id="outlined-basic" 
              label="Password" 
              variant="outlined" 
              type="password"
              onChange={(e)=>handleChange("password",e)}
              fullWidth />
              </div>
              <div className={classes.loginBtnWrapper}>
                  <Button variant="contained"
                   fullWidth 
                   disableElevation
                   disabled={isDisabled}
                   onClick={handleLogin}
                   >Login</Button>
              </div>
          </div>
        </div>
    )
}
