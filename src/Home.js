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
                        <button type="button" className="btn btn-primary btn-danger" href={"#camera"}>Try it out</button>
                    </div>
                </div>
            </div>

            <div className="container pt-4">
                <h1 id="items" className="display-4 my-4 text-center text-muted">Items</h1>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card mb-3">
                            <img className="card-img-top" src="img/1.png"/>
                            <div className="card-body">
                                <h4 className="card-title text-center">Item One</h4>
                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card mb-3">
                            <img className="card-img-top" src="img/2.png"/>
                            <div className="card-body">
                                <h4 className="card-title text-center">Item Two</h4>
                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card mb-3">
                            <img className="card-img-top" src="img/3.png"/>
                            <div className="card-body">
                                <h4 className="card-title text-center">Item Three</h4>
                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card mb-3">
                            <img className="card-img-top" src="img/4.png"/>
                            <div className="card-body">
                                <h4 className="card-title text-center">Item Four</h4>
                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row py-3">
                    <div className="col-md-7">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href={"https://github.com/nicoledanuwidjaja/garbadoor"}>GitHub</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md text-md-right">
                        <small>&copy; Garbadoor</small>
                    </div>
                </div>
            </div>
        </>;
    }
}

export default Home;