import React from 'react'
import "./Training.css"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import Stats from '../../components/Stats/Stats'
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard'
import { Link, useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <Header>HOME WORKOUT</Header>
            <Stats className="stats" count="3" cal="20" time="30" />
            <h1 className='training-h1'>7x4 CHALLENGE</h1>
            <div className='cards'>
                <Card image="/body-builder.jpg" message={"Est laborum velit"}>FULL BODY 7X4 CHALLENGE</Card>
                <Card image="/legs.jpg" message={"Exercitation  "}>LOWER BODY 7X4 CHALLENGE</Card>
            </div >
            <div>
                <h1 className='training-h1'>Beginner</h1>
                <ExerciseCard image={"/abs_beg.jpg"} text={"ABS BEGINNER"} level={1} link="/absbeginner" />
                <ExerciseCard image={"/chest_beg.jpg"} text={"CHEST BEGINNER"} level={1} link="/chestbeginner" />
                <ExerciseCard image={"/legs_beg.jpg"} text={"LEG BEGINNER"} level={1} link="/legsbeginner" />
                <h1 className='training-h1'>Intermediate</h1>
                <ExerciseCard image={"/abs_inter.jpg"} text={"ABS INTERMEDIATE"} level={2} link="/absinter" />
                <ExerciseCard image={"/chest_inter.jpg"} text={"CHEST INTERMEDIATE"} level={2} link="/chestinter" />
                <ExerciseCard image={"/legs_inter.jpg"} text={"LEG INTERMEDIATE"} level={2} link="/legsinter" />
            </div>
            <h1 className='training-h1'>Custom Routine </h1>
            <div style={{ marginBottom: "70px" }}><ExerciseCard image={"/gym.jpeg"} text={"CUSTOM ROUTINE"} level="none" link="/customroutine" /></div>
            <Footer />
        </div >
    )
}

export default Home
