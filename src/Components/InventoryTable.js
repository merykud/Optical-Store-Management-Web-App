import React from "react";

class InventoryTable extends React.Component{

    render() {
        return (
            <table className="ui striped table">
                <thead>
                <tr>
                    <th>Product name</th>
                    <th>Amount</th>
                    <th>Price</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John Lilki</td>
                    <td>Lenses and Glasses</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>Jamie Harington</td>
                    <td>Check</td>
                    <td>20 KM</td>
                </tr>
                <tr>
                    <td>Jill Lewis</td>
                    <td>Glasses </td>
                    <td>50 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>Check</td>
                    <td>20 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>Lenses and Glasses</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>Jamie Harington</td>
                    <td>Lenses and Glasses</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>Check</td>
                    <td>20 KM</td>
                </tr>
                <tr>
                    <td>Jamie Harington</td>
                    <td>Lenses and Glasses</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>Jill Lewis</td>
                    <td>Check</td>
                    <td>20 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>Lenses and Glasses</td>
                    <td>120 KM</td>
                </tr>
                <tr>
                    <td>John Lilki</td>
                    <td>Check</td>
                    <td>50 KM</td>
                </tr>
                <tr>
                    <td>Jamie Harington</td>
                    <td>Lenses and Glasses</td>
                    <td>120 KM</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default InventoryTable;