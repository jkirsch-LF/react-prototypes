import React from 'react';

export default class Table extends React.Component {
    render() {

        const tableRows = this.props.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.student}</td>
                    <td>{item.course}</td>
                    <td>{item.grade}</td>
                </tr>
            )
        });

        return (
            <table className="table">
                <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
                </thead>
                <tbody>
                {tableRows}
                </tbody>
            </table>
        )
    }
}