import React, { Component } from 'react';
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';


class BalanceDisplay extends Component {

    componentDidMount() {
        this.loadSave();
    };

    // Loads all Save  and sets them to this.state.Save
    loadSave = () => {
        API.getSaves()
            .then(res =>
                this.setState({ save: res.data, income: "", bills: "", cost: "", save: "" })
            )
            .catch(err => console.log(err));
    };

    render(props) {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">Leftover Income</div>
                        <div className="card-body">
                            <h5 className="text-center card-title">1000</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">Big Purchase Amount</div>
                        <div className="card-body">
                            <h5 className="text-center card-title"> </h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">How Much You Save</div>
                        <div className="card-body">
                            <h5 className="text-center card-title">500</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BalanceDisplay;