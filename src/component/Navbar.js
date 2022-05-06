import './navbar.css'
import cart from '../cart.svg' 
import { useEffect, useState } from 'react'
import { Axios } from 'axios'
import Modal from 'react-modal'
import Login from '../screens/login'
import Signup from '../screens/signup'


const Navbar = () =>{
    const [log,setlog] = useState(false)
    const [username,setusername] = useState('')
    const [IsLoginOpen,setIsLoginOpen] = useState(false)
    const [LoginSignup,setLoginSignup] = useState(true)
    const OpenLogin = () =>{
        setIsLoginOpen(true)
    }
    const Close = () =>{
        setIsLoginOpen(false)
    }
    const toggle = () =>{
        setLoginSignup(!LoginSignup)
    }
    const login = (obj) =>{
        console.log("called",obj)
        setusername(obj.name)
        setlog(obj.login)
    }
    return(
    <div className="navbar">
        <h1>fifto</h1>
        <input placeholder="search for outfits that suits you..." />
        <div className="account" style={{display:'flex',width:"100px",flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <div onClick={()=>OpenLogin()} style={{cursor:'pointer'}}>{(log)?username:'Login'}  </div>
            <div style={{width: '30px', height: '30px'}}><img src={cart} /></div>
            
        </div>
        <Modal
        isOpen={IsLoginOpen}
        onRequestClose={Close}
        style={{
            content:{
                backgroundColor: 'white',
                height:'300px',
                width:'500px',
                margin:'auto',
                borderRadius:'10px'
            }
        }}
        shouldCloseOnOverlayClick={true}
        >
        {
            (LoginSignup)?<Login close={()=>Close()} toggle={()=>toggle} login={(obj)=>login(obj)} />:<Signup close={()=>Close()} toggle={()=>toggle}/>
        }
        
        </Modal>
    </div>
)}
export default Navbar;