import React, { useState, useEffect } from 'react'
import "./ExerciseComponent.css"
import conf from '../../conf/conf'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ExerciseEle from '../ExerciseEle/ExerciseEle'


function ExerciseComponent() {
    const [data, setData] = useState([])
    useEffect(() => { axios.get(`${conf.baseURL}/api/v1/exerciselist`).then(res => setData(res.data.exercise)) }, [])
    const item = (window.location.pathname.split("particular/"))
    const target = item[1].split("+")[0]
    const level = item[1].split("+")[1]
    const name = decodeURIComponent(item[1].split("+")[2])
    console.log(name)
    // Used to display coreect exercise when a exercise type is elected
    return (
        <>
            <Header>{name.toUpperCase()}</Header>
            {data.map(ele => (ele.target === 'all' || ele.target === target.toLowerCase() && ele.level <= level) ? <ExerciseEle video={ele.video} key={ele._id} name={ele.name} reps={ele.reps} gif={ele.gif} cal={ele.cal} /> : null)}
            <Footer></Footer>
        </>
    )
}
export default ExerciseComponent
