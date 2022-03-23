import Carousel from "react-elastic-carousel";
import React,{useState} from 'react'
import ad from '../fifto3.jpg'
import './productlist.css'

const Productlist = (props) => {
    const [Items, setItems] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    return(
        <div className="listcontainer">
            <div className="listheading">
                <h1>{props.name}</h1>
                <a href={props.link}>view all</a>
            </div>
            <div className="list">
                    {Items.map(i =><img key={i} className='listitems' src={ad}/>)}
            </div>
        </div>
    )
}

export default Productlist;