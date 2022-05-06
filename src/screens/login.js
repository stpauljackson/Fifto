import React, { useState } from 'react'
import  Axios  from 'axios'

import './login.css'

export default function Login(props) {
	const [username ,setusername] = useState('')
	const [password ,setpassword] = useState('')
	
	const submit = ()=>{
		const data = {
			username:username,
			password:password
		}
		Axios.post('https://fifto.herokuapp.com/login', data)
		.then((res)=>{
			console.log(res.data[0].username)
			props.login({
				login:true,
				name:res.data[0].username
			})
			props.close()
		})
		.catch((err)=>{console.log(err)})
	}
	return (
		<div className="login">
			<h1>Login</h1>
			<input placeholder='email' onChange={(e)=>{setusername(e.target.value)}}/>
			<input placeholder='password' onChange={(e)=>{setpassword(e.target.value)}}/>
			<div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-between',width:'80%',alignItems:'center'}}>
				<p onClick={props.toggle()}>Create new account</p> 
				<button type="submit" onClick={()=>submit()}>Login</button>
			</div>
		</div>
	)
}
