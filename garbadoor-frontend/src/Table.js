import React, {Component} from 'react'
import t from 'prop-types'

let CategoryRow = ({category}) => <tr>
    <th colSpan="2">{category}</th>
</tr>

let Row  = ({product}) => <tr>
    <td>
        {product.stocked ? (
            product.name
        ) : (
            <span style={{color: 'red'}}>{product.name}</span>
        )}
    </td>
    <td>{product.price}</td>
</tr>

class Table extends Component {
    render() {
        return <table className="table table-bordered table-compact">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <th>HIIIII</th>
            </tbody>
        </table>
    }
}

export default Table