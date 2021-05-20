import React from "react";

import "./ItemAddForm.css";

export default class ItemAddForm extends React.Component {
    constructor(){
        super()

        this.state = {

        }
    }


    render(){
        return (
            <div className="item-add-form">
                <button className="btn btn-outline-secondary"
                    onClick={() => this.props.onAddItem("hello")}
                    >
                    Add Item</button>
            </div>
        )
    }
}