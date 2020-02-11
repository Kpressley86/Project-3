import React from 'react';


const BalanceDisplay = () => {
    
    return (
        <div className="row">
        <div className="col-lg-4">
            <div className="card">
                <div className="card-header" style={{background: '#cc3333'}}>LEFT OVER INCOME</div>
                <div className="card-body">
                    <h5 className="text-center card-title">1000</h5>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
                <div className="card">
                    <div className="card-header" style={{background: '#cc3333'}}>BIG PURCHASE AMOUNT</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">10000</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header" style={{background: '#cc3333'}}>HOW MUCH YOU SAVE</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">500</h5>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default BalanceDisplay;