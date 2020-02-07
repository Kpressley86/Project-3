import React, { Component } from 'react';
import "./Form.css";

class Form extends Component {

    state = {
        income: "",
        bills: "",
        cost: "",
        save: ""
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();

        this.setState({
            income: "",
            bills: ""
        });

        let inc = parseInt(`${this.state.income}`);
        let bil = parseInt(`${this.state.bills}`);
        let leftoverIncome = (inc - bil);
        // var formatter = new Intl.NumberFormat("dollar", {
        //     style: "currency",
        //     currency: "USD"
        // });

        // var moneyLeft = (formatter.format(leftoverIncome));
        document.getElementById("leftoverInc").append(leftoverIncome);
    };

    handleFormSave = e => {
        e.preventDefault();

        this.setState({
            cost: "",
            save: ""
        });

        let cos = parseInt(`${this.state.cost}`);
        let sav = parseInt(`${this.state.save}`);
        var savingsTime = (cos / sav);

        function savingTime(sav, leftoverIncome) {
            if (sav > leftoverIncome) {
                document.getElementById("months").append('You cant save more $ Money than you have!');
            } else {
                document.getElementById("months").append(`It will take you ` + Math.round(savingsTime) + ` Months to save enough money!`);
            }
        }
        savingTime();
    };

    render() {
        return (
            <div>
                {/* <form className="form">
                    <input
                        type="text"
                        name="income"
                        placeholder="Monthly Income"
                        value={this.state.income}
                        onChange={(e) => this.handleInputChange(e)}
                    /><br />
                    <br />
                    <input
                        type="text"
                        name="bills"
                        placeholder="Estimated Monthly Bills"
                        value={this.state.bills}
                        onChange={(e) => this.handleInputChange(e)}
                    />
                    <br />
                    <br />
                    <button
                        onClick={(e) => this.handleFormSubmit(e)}
                    >Submit</button>
                    <br />
                    <br />
                    <h1 id="leftoverInc">Leftover Income: </h1>
                    <br />
                    <br />
                    <input
                        type="text"
                        name="cost"
                        placeholder="Cost of the item you are saving for?"
                        value={this.state.cost}
                        onChange={(e) => this.handleInputChange(e)}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        name="save"
                        placeholder="How much would you like to save?"
                        value={this.state.save}
                        onChange={(e) => this.handleInputChange(e)}
                    />
                    <br />
                    <br />
                    <button
                        onClick={(e) => this.handleFormSave(e)}
                    >Save!</button>
                    <br />
                    <br />
                    <p id="months"></p>
                </form> */}
            </div>
        )
    }
}

export default Form;