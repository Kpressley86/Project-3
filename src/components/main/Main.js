import React, { Component } from 'react';
import Team from '../team/Team';

class Main extends Component {
    render() {
        return (
            <main>
                <section className="intro">
                    <h2>About The App</h2>
                    <div>
                        <p>$ave The Day app is a user friendly application that will help you manage your Monthly Budget and Expenses.
                            But the main purpose of this application is to help you for your future Big Purchases
                            like car, house or go on vacation with family! It will you keep in track on how long you'll
                            gonna reach your goal in savings money.
                        </p>
                    </div>
                </section>

                <div>
                 <Team />
                </div>
            </main>
        );
    }
}

export default Main;