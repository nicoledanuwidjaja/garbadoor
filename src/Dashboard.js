import React from 'react';
import 'bootstrap-4-grid/css/grid.min.css';
import './Dashboard.css';

// Connect to Google Firebase Database
import firebasedb from './firebase'

// KendoReact UI
import {TabStrip, TabStripTab, Menu, PanelBar, PanelBarItem} from '@progress/kendo-react-layout';
import {process, filterBy} from '@progress/kendo-data-query';
import {Grid, GridColumn as Column} from '@progress/kendo-react-grid';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            // Data from JSON objects (Firebase)
            items: [],
            count: [],
            garbageType: [],
            id: [],
        }
    }

    handleSelect = (e) => {
        this.setState({selected: e.selected})
    };

    updateItems(items) {
        // grabs collection of Items
        const dbItems = firebasedb.database().ref().child('Items');

        dbItems.once("value", snapshot => {
            snapshot.forEach(child => {
                this.setState({
                    id: this.state.id.add([child.key]),
                    garbageType: this.state.garbageType.add([child.val().garbageType]),
                    count: this.state.count.add([child.val().count]),
                });
            })
        }).then();

        // assign values of all items to object fields
        dbItems.on('child_added', snapshot => {
            snapshot.forEach(child => {
                this.setState({
                    id: this.state.id.add([child.key]),
                    garbageType: this.state.garbageType.add([child.val().garbageType]),
                    count: this.state.count.add([child.val().count]),
                });
            })
        });
    }

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
        this.updateItems(this.state.items);
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

        return <>
            <div className='dashboard'>
                <div className='container'>
                    <TabStrip id="tabstrip" selected={this.state.selected} onSelect={this.handleSelect}>
                        <TabStripTab id="tabstriptab" title="Compost">
                            <Grid class="categoryGrid" style={{height: "500px"}}
                                  data={onlyCompost}>
                                <Column field="id" title="ID" width="300px"/>
                                <Column field="count" title="Count" width="100px" filter="numeric"/>
                            </Grid>
                        </TabStripTab>
                        <TabStripTab title="Recycle">
                            <Grid class="categoryGrid" style={{height: "500px"}}
                                  data={onlyRecycle}>
                                <Column field="id" title="ID" width="300px"/>
                                <Column field="count" title="Count" width="100px" filter="numeric"/>
                            </Grid>
                        </TabStripTab>
                        <TabStripTab title="Garbage">
                            <Grid class="categoryGrid" style={{height: "500px"}}
                                  data={onlyGarbage}>
                                <Column field="id" title="ID" width="300px"/>
                                <Column field="count" title="Count" width="100px" filter="numeric"/>
                            </Grid>
                        </TabStripTab>
                    </TabStrip>
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
                            <small>&copy; Garbadoor</small>
                        </div>
                    </div>
                </footer>
            </div>
        </>;
    }
}

export default Dashboard;