import React from 'react';
import 'bootstrap-4-grid/css/grid.min.css';
import './Dashboard.css';


// Data from JSON objects (Firebase)
import items from './items.json';

// KendoReact UI
import {TabStrip, TabStripTab, Menu, PanelBar, PanelBarItem} from '@progress/kendo-react-layout';
import {process, filterBy} from '@progress/kendo-data-query';
import {Grid, GridColumn as Column} from '@progress/kendo-react-grid';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            dataState: {
                sort: [
                    {field: "garbageType", dir: "asc"}
                ]
            }
        }
    }

    handleSelect = (e) => {
        this.setState({selected: e.selected})
    };

    // state = this.createAppState({
    //     group: [{field: 'garbageType'}]
    // });
    //
    // isGroupable = (field) => {
    //     return !((this.state.data.group || []).find((item) => item.field === field));
    // }
    //

    createAppState(dataState) {
        return {
            dataState: dataState,
            result: process(items, dataState)
        };
    }

    dataStateChange = (event) => {
        this.setState(this.createAppState(event.data));
    }

    render() {
        // constant arrays for filtered lists based on category
        const onlyGarbage = filterBy(items, {
            logic: 'and',
            filters: [
                {field: "garbageType", operator: "eq", value: "garbage"},
            ]
        });

        const onlyCompost = filterBy(items, {
            logic: 'and',
            filters: [
                {field: "garbageType", operator: "eq", value: "compost"},
            ]
        });

        const onlyRecycle = filterBy(items, {
            logic: 'and',
            filters: [
                {field: "garbageType", operator: "eq", value: "recycle"},
            ]
        });

        return <>
            <div className='dashboard'>
                <div className='container'>
                    <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
                        <TabStripTab title="Compost">
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