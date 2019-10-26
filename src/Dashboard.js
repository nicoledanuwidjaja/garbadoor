import React from 'react';
import 'bootstrap-4-grid/css/grid.min.css';

// Data from JSON objects (Firebase)
import items from './items.json';

// KendoReact UI
// import {Menu, PanelBar, TabStrip} from '@progress/kendo-react-layout';
import {process} from '@progress/kendo-data-query';
import {Grid, GridColumn} from '@progress/kendo-react-grid';
import {DropDownList} from '@progress/kendo-react-dropdowns';
import {Window} from '@progress/kendo-react-dialogs';
// import '@progress/kendo-theme-default/dist/all.css';

// TODO: FIX THE ROUTES!
class Dashboard extends React.Component {
    state = {
        dropdownlistCategory: null
    }

    handleDropDownChange = (e) => {
        this.setState({
            dropdownlistCategory: e.target.value.itemID
        });
    }

    render() {
        return <>
            <h1>TESTING HI DO I EXIST?</h1>
            <p>
                <DropDownList
                    data={items}
                    dataItemKey="itemID"
                    textField="categoryType"
                    defaultItem={{itemID: null, categoryType: "Category type"}}
                    onChange={this.handleDropDownChange}
                />
            </p>
        </>;
    }
}

export default Dashboard;