import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import "./Graph.css"
const Graph = () => {
    const [weightData, setWeightData] = useState([]);
    const [newWeight, setNewWeight] = useState('');

    const handleAddData = () => {
        const date = new Date().toISOString().split('T')[0]; // Today's date
        const parsedWeight = parseFloat(newWeight);

        if (!isNaN(parsedWeight)) {
            const newData = [...weightData, [date, parsedWeight]];
            setWeightData(newData);
            localStorage.setItem('weightData', JSON.stringify(newData));
            setNewWeight(''); // Reset input field after adding data
        }
    };

    useEffect(() => {
        const storedData = localStorage.getItem('weightData');
        const initialData = storedData ? JSON.parse(storedData) : [];
        setWeightData(initialData);
    }, []);

    return (
        <div className="line-graph-container">
            <div className="input-container">
                <label>Enter Current Weight:</label>
                <input
                    type="number"
                    step="0.1"
                    id="newWeight"
                    value={newWeight}
                    onChange={(e) => setNewWeight(e.target.value)}
                />
                <button className="add-button" onClick={handleAddData}>
                    Add Data
                </button>
            </div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="300px"
                data={[['Date', 'Weight'], ...weightData]}
                options={{
                    title: 'Weight over Time',
                    hAxis: { title: 'Date' },
                    vAxis: { title: 'Weight' },
                }}
            />
        </div>
    );
};

export default Graph;
