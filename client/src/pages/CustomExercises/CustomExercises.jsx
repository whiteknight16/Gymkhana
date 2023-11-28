import React from 'react'
import CustomExercisesComponent from '../../components/CustomExercisesComponent/CustomExercisesComponent'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import StartAndEndExercise from '../../components/StartAndEndExercise/StartAndEndExercise'
function CustomExercises() {
    return (
        <div>
            <Header>CUSTOM EXERCISE ROUTINE</Header>
            <CustomExercisesComponent />
            <StartAndEndExercise />
            <Footer></Footer>
        </div >
    )
}

export default CustomExercises
