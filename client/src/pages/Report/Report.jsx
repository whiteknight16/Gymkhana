import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Stats from '../../components/Stats/Stats'
import "./Report.css"
import Graph from '../../components/Graph/Graph'
function Report() {
    return (
        <div>
            <Header>REPORT</Header>
            <Stats className="stats" />
            <Graph />
            <Footer />
        </div>
    )
}

export default Report
