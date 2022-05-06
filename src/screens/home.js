import React, { Component } from 'react'
import Cat from "../component/cat"

import './home.css'
import Product from '../component/product'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Cat />
                <Product />
            </div>
        )
    }
}
