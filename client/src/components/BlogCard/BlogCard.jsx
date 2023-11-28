import React from 'react'
import axios from 'axios'
import conf from '../../conf/conf'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./BlogCard.css"

// Takes props as input and returns a card with the blog data
function EachBlog({ title, image, content }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
            <div className='eachBlogCard'>
                <img src={image} alt="Blog Image" />
                <div className="eachBlogData">
                    <h3>{title}</h3>
                    <p>{content.substring(0, 50)}....READ MORE</p>

                </div>
            </div>
        </div>
    )
}

// Fetches API Data and renders EachBlog component
function BlogCard() {
    const [data, setData] = useState([])
    useEffect(() => { axios.get(`${conf.baseURL}/api/v1/blog`).then(res => setData(res.data.blog)) }, [])
    return (
        <div>
            {data.map(ele => <Link className='link' key={ele._id} to={`/discover/${ele._id}`} ><EachBlog key={ele._id} title={ele.title} image={ele.image} content={ele.content} /></Link>)}
        </div>
    )
}

export default BlogCard