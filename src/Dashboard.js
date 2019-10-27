import React, {useEffect} from 'react';
import 'bootstrap-4-grid/css/grid.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css';
import '@progress/kendo-theme-default/dist/all.css';

import items from './items'

// Connect to Google Firebase Database
import firebasedb from './firebase'

// KendoReact UI
import {TabStrip, TabStripTab} from '@progress/kendo-react-layout';
import {process, filterBy} from '@progress/kendo-data-query';
import {Grid, GridColumn as Column} from '@progress/kendo-react-grid';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            // Data from JSON objects (Firebase)
            items: [],
        };
    }

    // checks if the child exists before updating
    // componentWillMount() {
    //     // grabs collection of Items
    //     const dbItems = firebasedb.database().ref('items');
    //
    //     dbItems.once("value").then((dataSnapshot) => {
    //         this.setState({
    //             items: dataSnapshot.val(),
    //             garbageType: this.state.garbageType.add([dataSnapshot.val().garbageType]),
    //             count: this.state.count.add([dataSnapshot.val().count]),
    //         });
    //     });
    //
    //     // assign values of all items to object fields
    //     dbItems.on('child_added', dataSnapshot => {
    //         dataSnapshot.forEach(snapshot => {
    //             this.setState({
    //                 id: this.state.id.add([dataSnapshot.key]),
    //                 garbageType: this.state.garbageType.add([dataSnapshot.val().garbageType]),
    //                 count: this.state.count.add([dataSnapshot.val().count]),
    //             });
    //         });
    //     });
    // }

    componentWillMount() {
        fetch('/get_live_data')
            .then(result => result.json())
            .then(result => this.setState({items: result}));
        console.log("This works");
    }

    componentDidMount() {
        fetch('/get_live_data')
            .then(result => result.json())
            .then(result => this.setState({items: result}));
    }

    // handles tab switching
    handleSelect = (e) => {
        this.setState({selected: e.selected})
    };

    createAppState(dataState) {
        return {
            dataState: dataState,
            result: process(this.state.items, dataState)
        };
    }

    dataStateChange = (event) => {
        this.setState(this.createAppState(event.data));
    }

    render() {
        console.log(this.state.items);
        // constant arrays for filtered lists based on category
        const onlyGarbage = filterBy(this.state.items, {
            logic: 'and',
            filters: [
                {field: "garbageType", operator: "eq", value: "garbage"},
            ]
        });

        const onlyCompost = filterBy(this.state.items, {
            logic: 'and',
            filters: [
                {field: "garbageType", operator: "eq", value: "compost"},
            ]
        });

        const onlyRecycle = filterBy(this.state.items, {
            logic: 'and',
            filters: [
                {field: "garbageType", operator: "eq", value: "recycle"},
            ]
        });

        return (
            <div>
                {/*<div className="container pt-4">*/}
                {/*    <br></br>*/}
                {/*    <br></br>*/}

                {/*    <h1 id="items" className="display-4 my-4 text-center text-muted">Items</h1>*/}
                {/*    <h4 display-4 className="text-muted text-center">Pictures shot in a Garbadoor machine. </h4>*/}

                {/*    <hr></hr>*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-lg-3">*/}
                {/*            <div className="card mb-3">*/}
                {/*                <img className="card-img-top" src="img/1.png"/>*/}
                {/*                <div className="card-body">*/}
                {/*                    <h4 className="card-title text-center">Item One</h4>*/}
                {/*                    <p className="card-text">*/}
                {/*                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem*/}
                {/*                        Ipsum has been*/}
                {/*                        the industry's standard dummy text ever since the 1500s.*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <br></br>*/}
                {/*    <br></br>*/}
                {/*</div>*/}
                <div className='dashboard'>
                    <div className='container pt-4'>
                        <h1 id="items" className="display-4 my-4 text-center">Dashboard</h1>
                        <h4 display-4 className="text-muted text-center">Keep track of your smart trash cans'
                            items. </h4>

                        <hr></hr>

                        <div className="row">
                            <div className="col-md-12">
                                <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
                                    <TabStripTab class="nav navbar-expand nav-tabs nav-justified" title="Compost">
                                        <Grid class="categoryGrid" style={{height: "500px"}}
                                              data={onlyCompost}>
                                            <Column field="id" title="Item Name" width="auto"/>
                                            <Column field="count" title="Count" width="150px" filter="numeric"/>
                                        </Grid>
                                    </TabStripTab>
                                    <TabStripTab class="nav navbar-expand nav-tabs nav-justified" title="Recycle">
                                        <Grid class="categoryGrid" style={{height: "500px"}}
                                              data={onlyRecycle}>
                                            <Column field="id" title="Item Name" width="auto"/>
                                            <Column field="count" title="Count" width="100px" filter="numeric"/>
                                        </Grid>
                                    </TabStripTab>
                                    <TabStripTab class="nav navbar-expand nav-tabs nav-justified" title="Garbage">
                                        <Grid class="categoryGrid" style={{height: "500px"}}
                                              data={onlyGarbage}>
                                            <Column field="id" title="Item Name" width="auto"/>
                                            <Column field="count" title="Count" width="100px" filter="numeric"/>
                                        </Grid>
                                    </TabStripTab>
                                </TabStrip>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-4">
                    <footer>
                        <div className="row py-3">
                            <div className="col-md-7">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link"
                                           href={"https://github.com/nicoledanuwidjaja/garbadoor"}>GitHub</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md text-md-right">
                                <small>&copy; Garbadoor - Made at YHack 2019.</small>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    };
}

export default Dashboard;