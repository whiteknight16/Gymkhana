import React, { useState, useEffect } from "react";
import conf from "../../conf/conf"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit({ p, t, l, i, text, a, heading, id }) {
    const [parent, setParent] = useState(p);
    const [target, setTarget] = useState(t);
    const [level, setLevel] = useState(l);
    const [about, setAbout] = useState(a);
    const [image, setImage] = useState(i);
    const [textName, setTextName] = useState(text);
    const [error, setError] = useState(null);

    useEffect(() => {
        setParent(p);
        setTarget(t);
        setLevel(l);
        setAbout(a);
        setImage(i);
        setTextName(text);

    }, [p, t, l, a, i, text]);

    const navigate = useNavigate();
    console.log(id)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!image || !text || !about) {
                setError('All fields are required.')
                return
            }
            console.log(id)
            const response = await axios.patch(`${conf.baseURL}/api/v1/exerciseSubItems`, {
                id,
                parent,
                target,
                image,
                level,
                about,
                text: textName

            });
            console.log(response.data)
            if (response.data) {
                navigate('/cards')

            } else {
                console.log('No blog with that id');
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Parent:
                        <select value={parent} onChange={(e) => setParent(e.target.value)}>
                            {heading.map((item) => (
                                <option key={item._id} value={item.heading}>{item.heading.toUpperCase()}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Target:
                        <select value={target} onChange={(e) => setTarget(e.target.value)}>
                            <option value="abs">Abs</option>
                            <option value="chest">Chest</option>
                            <option value="leg">Leg</option>
                            <option value="back">Back</option>
                            <option value="arm">Arm</option>
                        </select>
                    </label>
                    <label>
                        Image:
                        <input type="text" value={image} placeholder='Enter Image URL' onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <label>
                        Level:
                        <select value={level} onChange={(e) => setLevel(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label>
                        Text:
                        <input type="text" value={textName} onChange={(e) => setTextName(e.target.value)} />
                    </label>
                    <label>
                        About:
                        <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {error && <p>{error}</p>}
        </>
    )
}


export default Edit