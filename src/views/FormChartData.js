import React from 'react';
import Form from '../components/form/Form';
import Graph from '../components/graph/Graph';
import Budget from '../components/budget/Budget';

const FormChartData = () => {
    return (
        <div>
            <Form />
            
            <Budget />
           
            <br></br>
            <br></br>
            <Graph />
            <br></br>
            <br></br>
        </div>
    );
};

export default FormChartData;