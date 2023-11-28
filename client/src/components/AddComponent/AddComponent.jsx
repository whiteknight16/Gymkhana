import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import conf from '../../conf/conf'
import { useNavigate } from 'react-router-dom'
import './AddComponent.css'

function AddComponent() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !content || !image) {
            setError('All fields are required.')
            return
        }

        try {
            await axios.post(`${conf.baseURL}/api/v1/blog`, { title, image, content });
            navigate('/discoverlog')
        } catch (error) {
            console.error('Error during registration:', error);
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='addForm'>
                <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='Image URL' value={image} onChange={(e) => setImage(e.target.value)} />
                <textarea type="text" style={{ height: "300px" }} placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} />
                <button type='submit'>Submit</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    )
}

export default AddComponent