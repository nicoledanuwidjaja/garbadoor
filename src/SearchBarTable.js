import React, {Component} from 'react'

import Table from './Table'
import Search from './Search'

class SearchBarTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            inStockOnly: false,
        }
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    handleUserInput(filterText, inStockOnly) {
        this.setState({filterText, inStockOnly})
    }

    render() {
        return <div>
            <Search
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onUserInput={this.handleUserInput}
            />
            <Table
                products={this.props.products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
            />
        </div>
    }
}

export default SearchBarTable