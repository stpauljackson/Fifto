import ad from '../ad.jpg'
import Carousel from "react-elastic-carousel";
import React,{useState} from 'react'
import "./ad.css"

const Ad = () =>{
    const [Items, setItems] = useState([1,2,3])
    const [Current_item , setCurrent_item] = useState(1)

return(
    <div>
        <Carousel className="carousel" 
        active={Current_item} 
        itemsToShow={1} >
        {Items.map(i =><img key={i} className='ad' src={ad}/>)}
        </Carousel>
    </div>
)
}
export default Ad;