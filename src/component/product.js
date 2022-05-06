import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import Productcard from './productcard'

export default function Product() {

    const [data,setdata] = useState([])
    const [products,setproducts] = useState([])
 
    useEffect(() => {
        Axios.get("https://fifto.herokuapp.com/products")
        .then((products) => {
            var x = []
            var product = products.data
            setdata(product)
            while(product.length){
                x.push(product.splice(0,4))
            }
            setproducts(x)
        })
    }, [])
    

    return (
        <div>
            {
                products.map((row) => (
                    <div style={{display: 'flex',width: '100%',justifyContent:'space-evenly', margin:"100px 0px" }}>
                    {row.map((element) =>(
                        <Productcard element={element}/>
                    ))}
                    </div>
                ))
            }
        </div>
    )
}
