import React, { useState } from 'react';
import axios from 'axios';
import conf from '../../conf/conf';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./EditBlog.css"


function EditComponent({ id, t, i, c }) {
    const [title, setTitle] = useState(t);
    const [image, setImage] = useState(i);
    const [content, setContent] = useState(c);
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    // Checks and updates the blog
    const handleUpdate = async () => {
        try {
            if (!title || !content || !image) {
                setError('All fields are required.')
                return
            }
            const response = await axios.patch(`${conf.baseURL}/api/v1/blog`, {
                id,
                title,
                image,
                content
            });

            if (response.data.blog) {
                navigate('/discoverlog')

            } else {
                console.log('No blog with that id');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        // loads the blog data into the edit form
        <div className='editForm'>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" value={image} onChange={e => setImage(e.target.value)} />
            <textarea value={content} style={{ height: "300px" }} onChange={e => setContent(e.target.value)} />
            <button onClick={handleUpdate}>Update Blog</button>
            {error && <p style={{ color: "red" }}>{error}</p>}

        </div>
    );
}

function EditBlog() {
    const [data, setData] = useState([])
    useEffect(() => { axios.get(`${conf.baseURL}/api/v1/blog`).then(res => setData(res.data.blog)) }, [])
    return (
        <div>
            {data.map(ele => (window.location.pathname === `/edit/${ele._id}`) ? <EditComponent key={ele._id} t={ele.title} c={ele.content} i={ele.image} id={ele._id} /> : null)}
        </div>
    )
}

export default EditBlog
