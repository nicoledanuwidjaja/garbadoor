import React from 'react';
import 'bootstrap-4-grid/css/grid.min.css';

// Data from JSON objects (Firebase)
import items from './items.json';

// KendoReact UI
// import {Menu, PanelBar, TabStrip} from '@progress/kendo-react-layout';
import {process} from '@progress/kendo-data-query';
import {Grid, GridColumn as Column} from '@progress/kendo-react-grid';
import {DropDownList} from '@progress/kendo-react-dropdowns';
import {PanelBar, PanelBarItem} from '@progress/kendo-react-layout';
import {Window} from '@progress/kendo-react-dialogs';
// import '@progress/kendo-theme-default/dist/all.css';

class Dashboard extends React.Component {

    render() {
        return <>
            <div>
                <Grid style={{height: '300px'}} data={items}>
                    <Column field="id" title="ID" width="40px"/>
                    <Column field="garbageType" title="Name" width="160px"/>
                    <Column field="count" title="Category Name" width="80px"/>
                </Grid>
            </div>
        </>;
    }
}

export default Dashboard;