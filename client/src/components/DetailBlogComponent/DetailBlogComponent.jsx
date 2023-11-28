import React from 'react'
import "./DetailBlogComponent.css"
import axios from 'axios'
import conf from '../../conf/conf'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react'

function BlogContent({ title, image, content }) {
    return (
        <div className='blogContent'>
            <h1>{title}</h1>
            <img src={image} alt="Blog Image" />
            <p>{content}</p>
        </div>
    )
}


function DetailBlogComponent() {
    const [data, setData] = useState([])
    useEffect(() => { axios.get(`${conf.baseURL}/api/v1/blog`).then(res => setData(res.data.blog)) }, [])
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "column" }}>
                <div>
                    {data.map(ele => ("/discover/" + ele._id === window.location.pathname) ? <BlogContent key={ele._id} image={ele.image} content={ele.content} title={ele.title} /> : null)}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default DetailBlogComponent
