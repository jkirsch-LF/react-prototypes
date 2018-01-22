import React from 'react';
import Table from './table'

export default class App extends React.Component {

    render() {

        const students = [
            {student: 'Jake', course: 'Kitten Wrangling', grade: 96},
            {student: 'James', course: 'Anything Artistic', grade: 15},
            {student: 'Jimbo', course: 'Shewtin Feesh', grade: 70},
        ];

        return (
            <div className="container">
                <h1>Student Grade Table</h1>
                <Table data={students}/>
            </div>
        )
    }
}