import React from "react";
import NewKegForm from './NewKegForm';

class Inventory extends React.Component
{
    render()
    {
        return (
            <div className="top">
                <h1>Inventory</h1>
                <NewKegForm addKeg = {this.props.addKeg}/>
                <button onClick = {this.props.loadSampleKegs}>Load Sample Kegs</button>
            </div>
        );
    }
}
export default Inventory;