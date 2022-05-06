import React, { useState } from 'react'
import  Axios  from 'axios'

import './signup.css'

export default function Signup(props) {
	const [username ,setusername] = useState('')
	const [password ,setpassword] = useState('')
	
	const submit = ()=>{
		const data = {
			username:username,
			password:password
		}
		Axios.post('https://fifto.herokuapp.com/signup', data)
		.then((res)=>{
			console.log(res)
			props.toggle()
		})
		.catch((err)=>{console.log(err)})
	}
	return (
		<div className="signup" style={{ display: 'flex', flexDirection: 'column' }}>
			<h1>Signup</h1>
			<input placeholder='email' onChange={(e)=>{setusername(e.target.value)}}/>
			<input placeholder='password' onChange={(e)=>{setpassword(e.target.value)}}/>
			<div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-between',width:'80%',alignItems:'center'}}>
			<p onClick={props.toggle()}>Already have an account?</p>
			<button type="submit" onClick={()=>submit()}>signup</button>
			</div>
		</div>
	)
}
