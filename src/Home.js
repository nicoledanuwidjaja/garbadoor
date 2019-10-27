import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import Table from './Table'

// let products = [
//     {category: 'Sporting Goods', price: '$49.99', 'stocked': true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', 'stocked': true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', 'stocked': false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', 'stocked': true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', 'stocked': false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', 'stocked': true, name: 'Nexus 7'},
// ]
//
// ReactDOM.render(
//     <Table products={products}/>,
//     document.querySelector('#app')
// )

class Home extends React.Component {
    render() {
        return <>
            <div className="jumbotron jumbotron-fluid bg-success text-white">
                <div className="container text-sm-center pt-5">
                    <h1 className="display-2">Garbadoor</h1>
                    <p className="lead">The smart city trash organization system!</p>
                    <div className="btn-group mt-4" role="group" aria-label="Callout Buttons">
                        <button type="button" className="btn btn-primary btn-danger" href={"/dashboard"}>Try it out</button>
                    </div>
                </div>
            </div>

            <div>
                <p><img align="center" src={"https://pokewalls.files.wordpress.com/2012/12/569garbodor1920x1200.jpg"}/></p>
            </div>

        </>;
    }
}

export default Home;