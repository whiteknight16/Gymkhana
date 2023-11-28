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

    // Used to display coreect exercise when a exercise type is elected
    if (window.location.pathname === '/absbeginner') {
        return (
            <>
                <Header>ABS BEGINNER</Header>
                {data.map(ele => (ele.target === 'all' || ele.target === 'abs' && Number(ele.level) === 1) ? <ExerciseEle video={ele.video} key={ele._id} name={ele.name} reps={ele.reps} gif={ele.gif} cal={ele.cal} /> : null)}
                <Footer></Footer>
            </>
        )
    }

    if (window.location.pathname === '/absinter') {
        return (
            <>
                <Header>ABS INTERMEDIATE</Header>
                {data.map(ele => (ele.target === 'all' || ele.target === 'abs' && Number(ele.level) >= 1) ? <ExerciseEle video={ele.video} key={ele._id} name={ele.name} reps={ele.reps} gif={ele.gif} cal={ele.cal} /> : null)}
                <Footer></Footer>
            </>
        )
    }

    if (window.location.pathname === '/chestbeginner') {
        return (
            <>
                <Header>CHEST BEGINNER</Header>
                {data.map(ele => (ele.target === 'all' || ele.target === 'chest' && Number(ele.level) === 1) ? <ExerciseEle video={ele.video} key={ele._id} name={ele.name} reps={ele.reps} gif={ele.gif} cal={ele.cal} /> : null)}
                <Footer></Footer>
            </>
        )
    }

    if (window.location.pathname === '/chestinter') {
        return (
            <>
                <Header>CHEST INTERMEDIATE</Header>
                {data.map(ele => (ele.target === 'all' || ele.target === 'chest' && Number(ele.level) >= 1) ? <ExerciseEle video={ele.video} key={ele._id} name={ele.name} reps={ele.reps} gif={ele.gif} cal={ele.cal} /> : null)}
                <Footer></Footer>
            </>
        )
    }

    if (window.location.pathname === '/legsbeginner') {
        return (
            <>
                <Header>LEGS BEGINNER</Header>
                {data.map(ele => (ele.target === 'all' || ele.target === 'legs' && Number(ele.level) === 1) ? <ExerciseEle video={ele.video} key={ele._id} name={ele.name} reps={ele.reps} gif={ele.gif} cal={ele.cal} /> : null)}
                <Footer></Footer>
            </>
        )
    }

    if (window.location.pathname === '/legsinter') {
        return (
            <>
                <Header>LEGS INTERMEDIATE</Header>
                {data.map(ele => (ele.target === 'all' || ele.target === 'legs' && Number(ele.level) >= 1) ? <ExerciseEle video={ele.video} key={ele._id} name={ele.name} reps={ele.reps} gif={ele.gif} cal={ele.cal} /> : null)}
                <Footer></Footer>
            </>
        )
    }

}

export default ExerciseComponent
