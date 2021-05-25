import React from "react";

import "./ItemAddForm.css";

export default class ItemAddForm extends React.Component {
    constructor() {
        super()

        this.state = {
            msg: "",
        }
    }


    onInputChange(e) {
        this.setState((state) => {
            return {
                msg: e.target.value,
            }
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        if(this.state.msg.length === 0) return false;

        this.props.onAddItem(this.state.msg)
        this.setState((state) => {
            return { msg: "" }
        })
    }

    render() {
        return (
            <form className="item-add-form"
                onSubmit={(e) => this.onSubmit(e)}
            >
                <div className="row mb-3 d-flex">
                    <div className="col-8">
                        <input type="text" className="form-control"
                            onChange={(e) => this.onInputChange(e)}
                            value={this.state.msg}
                            placeholder="Wthat to be done..."
                        />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-secondary float-end"
                        >
                            {/* onClick={() => this.props.onAddItem("hello")} */}
                            Add Item</button>
                    </div>
                </div>


            </form>
        )
    }
}