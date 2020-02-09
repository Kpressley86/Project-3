import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
import './Books.css';

class Save extends Component {
  // Setting our component's initial state
  state = {
    item: "",
    income: "",
    bills: "",
    leftoverIncome: "",
    cost: "",
    save: "",
    time: "",
  };

  // When the component mounts, load all Save and save them to this.state.Save
  componentDidMount() {
    this.loadSave();
  };

  // Loads all Save  and sets them to this.state.Save
  loadSave = () => {
    API.getSaves()
      .then(res =>
        this.setState({
          Save: res.data,
          item: "",
          income: "",
          bills: "",
          leftoverIncome: "",
          cost: "",
          save: "",
          time: "",
        })
      )
      .catch(err => console.log(err));
  };

  // Deletes a save from the database with a given id, then reloads Save from the db
  deleteSave = id => {
    API.deleteSave(id)
      .then(res => this.loadSave())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="oldSaves">
        <Row>
          <Col sm="12">
          <div className="card card-body">
            <DeleteBtn onClick={() => this.deleteSave(Save._id)} />
            <h3 className="text-center">Old Saving</h3>
            <Row>
              <Col lg="4">
                <div className="card">
                  <div className="card-header text-center">Leftover Income</div>
                  <div className="card-body">
                    <h5 className="text-center card-title">GET.leftoverIncome</h5>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <div className="card-header text-center">GET.item</div>
                  <div className="card-body">
                    <h5 className="text-center card-title"> GET.cost</h5>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <div className="card-header text-center">Time it will take to save</div>
                  <div className="card-body">
                    <h5 className="text-center card-title">GET.time</h5>
                  </div>
                </div>
              </Col>
            </Row>
</div>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Save;
