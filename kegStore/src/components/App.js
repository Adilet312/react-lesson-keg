import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import { v4 } from 'uuid';
import sampleKegs from "../sampleKegs";
import Keg from './Keg';

class App extends React.Component
{
    state = 
    {
        kegs: {},
        order: {}
    }
    addKeg = (keg) => 
    {
        const kegs = { ...this.state.kegs};
        kegs[`keg${v4()}`] = keg;
        this.setState({
            kegs: kegs
        });
        
    };
    loadSampleKegs = () =>
    {
        this.setState({kegs: sampleKegs});
    }

    render()
    {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    < Header />
                    <ul className="fishes">
                    {Object.keys(this.state.kegs).map(key => <Keg key={key} details={this.state.kegs[key]} />)}
                    </ul>
                </div> 
                    <Order/>
                    <Inventory addKeg = {this.addKeg} loadSampleKegs = {this.loadSampleKegs}/>
                </div>

        );
    }
}
export default App; 