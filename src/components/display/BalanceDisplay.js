import React from 'react';

const BalanceDisplay = (props) => {
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
    
    export default BalanceDisplay;