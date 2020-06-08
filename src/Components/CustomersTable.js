import React from "react";

class CustomersTable extends React.Component{
    render() {
        return (
            <table className="ui striped table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone number</th>
                    <th>Debt</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John Lilki</td>
                    <td>September 14, 2013</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>Jamie Harington</td>
                    <td>January 11, 2014</td>
                    <td>20 KM</td>
                </tr>
                <tr>
                    <td>Jill Lewis</td>
                    <td>May 11, 2014</td>
                    <td>50 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>September 14, 2013</td>
                    <td>20 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>September 14, 2013</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>Jamie Harington</td>
                    <td>January 11, 2014</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>September 14, 2013</td>
                    <td>20 KM</td>
                </tr>
                <tr>
                    <td>Jamie Harington</td>
                    <td>January 11, 2014</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>Jill Lewis</td>
                    <td>May 11, 2014</td>
                    <td>20 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>September 14, 2013</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>September 14, 2013</td>
                    <td>50 KM</td>
                </tr>
                <tr>
                    <td>Jamie Harington</td>
                    <td>January 11, 2014</td>
                    <td>120 KM</td>
                </tr>
                </tbody>
            </table>
        );
    }

}
export default CustomersTable;