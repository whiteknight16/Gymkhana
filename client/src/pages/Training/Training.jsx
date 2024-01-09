import React from 'react'
import axios from 'axios'
import conf from "../../conf/conf"
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Stats from '../../components/Stats/Stats'
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard'
import Footer from '../../components/Footer/Footer'
import "./Training.css"
function SubItems({ heading }) {
    const [item, setItem] = useState([])
    useEffect(() => {
        axios.get(`${conf.baseURL}/api/v1/exerciseSubItems/`).then(res => setItem(res.data.exerciseSubItem.filter(ele => ele.parent.toUpperCase() === heading.toUpperCase())))
    }, [item])
    return (
        <div>
            {item.map(ele => (
                <ExerciseCard image={ele.image} text={ele.text} level={ele.level} about={ele.about} key={ele._id} target={ele.target} />
            ))}
        </div>
    )
}


function TestTraining() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${conf.baseURL}/api/v1/headings`).then(res => setData(res.data.heading))
    }, [])
    return (
        <>
            <div>
                <Header>HOME WORKOUT</Header>
                <Stats className="stats" />
                {data.map(ele => (
                    <>
                        <h1 className='training-h1'>{ele.heading}</h1>
                        <SubItems heading={ele.heading} />
                    </>
                ))}
            </div>
            <h1 className='training-h1'>Custom Routine </h1>
            <div style={{ marginBottom: "70px" }}><ExerciseCard image={"/gym.jpeg"} text={"CUSTOM ROUTINE"} level="none" link="/customroutine" /></div>
            <Footer />
        </>

    )
}

export default TestTraining
