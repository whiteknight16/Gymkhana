import React from 'react'
import "./BlogCardLoged.css"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import conf from '../../conf/conf'
import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

function EachBlog({ title, image, content, id }) {
    const handleOnClick = async () => {
        try {
            await axios.delete(`${conf.baseURL}/api/v1/blog/${id}`)
            window.location.reload()

        } catch (error) {
            console.log(error)
        }
    }
    // some states
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingToken, setIsCheckingToken] = useState(true);

    // A use effect to check if logged in
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwtDecode(token);
            const tokenExpiration = decodedToken.exp;
            const currentTimestamp = Math.floor(Date.now() / 1000);

            if (tokenExpiration >= currentTimestamp) {
                setIsAuthenticated(true);
            }
        }

        setIsCheckingToken(false);
    }, []);

    if (isCheckingToken) {
        return <div>Checking token...</div>;
    }

    return (
        // renders page if logged in send to login page if not logged in 
        isAuthenticated ?
            (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <div className='eachBlogCard'>
                    <img src={image} alt="Blog Image" />
                    <div className="eachBlogData">
                        <h3>{title}</h3>
                        <p>{content.substring(0, 50)}....READ MORE</p>
                    </div>
                    <div className='editDelete'>
                        <Link className='link' key={id} to={`/edit/${id}`} ><FontAwesomeIcon icon={faPencil} style={{ color: "#77e660", }} /></Link>
                        <FontAwesomeIcon icon={faTrash} style={{ color: "#ef4e4e", cursor: "pointer" }} onClick={handleOnClick} />                    </div>
                </div>
            </div>) : <Navigate to="/auth/login" />
    )
}

function BlogCardLoged() {
    const [data, setData] = useState([])
    useEffect(() => { axios.get(`${conf.baseURL}/api/v1/blog`).then(res => setData(res.data.blog)) }, [data])

    return (
        <>
            <Link to="/add"><button className='addButton'>+ Add Post</button></Link>
            <Link to="/auth/register"><button className='addButton'>+ Add Account</button></Link>

            <div>
                {data.map(ele => <EachBlog key={ele._id} title={ele.title} image={ele.image} content={ele.content} id={ele._id} />)}
            </div>
        </>
    )
}

export default BlogCardLoged