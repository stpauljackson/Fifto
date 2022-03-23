import React, { Component } from 'react'
import Cat from "../component/cat"
import Navbar from "../component/Navbar.js"
import Ad from "../component/ad.js"
import './home.css'
import Productlist from '../component/productlist'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Cat />
                <Ad/>
                <Productlist name="Trending"/>
                <Productlist name="What's New"/>
                <Productlist name="Discounted"/>
            </div>
        )
    }
}
