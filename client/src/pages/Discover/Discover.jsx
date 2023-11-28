import React from 'react'
import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import BlogCard from '../../components/BlogCard/BlogCard'
import BlogCardLoged from '../../components/BlogCardLoged/BlogCardLoged'
function Discover() {

    return (
        <div>
            <Header>DISCOVER</Header>
            {window.location.pathname === '/discoverlog' ? <BlogCardLoged></BlogCardLoged> : <BlogCard></BlogCard>}
            <div style={{ marginTop: "50px" }}><Footer ></Footer></div>
        </div>
    )
}

export default Discover
