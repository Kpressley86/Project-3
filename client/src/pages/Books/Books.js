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
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            {this.state.Save ? (
              <div>
                {this.state.Save.map(Save => {
                  return (
                    <div key={Save._id}>
                      <a href={"/save/" + Save._id}>
                        <strong>
                          {Save.item} by {Save.income}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteSave(Save._id)} />
                    </div>
                  );
                })}
              </div>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
        <Container className="oldSaves">
          <Row>
            <Col sm="12">
              <div className="card card-body">
                <DeleteBtn onClick={() => this.deleteSave(Save._id)} />
                <h3 className="text-center">BUDGET INFORMATION</h3>
                <Row>
                  <Col lg="4">
                    <div className="card">
                      <div className="card-header">Leftover Income</div>
                      <div className="card-body">
                        <h5 className="text-center card-title">GET.leftoverIncome</h5>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="card">
                      <div className="card-header">GET.item</div>
                      <div className="card-body">
                        <h5 className="text-center card-title"> GET.cost</h5>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="card">
                      <div className="card-header">Time it will take to save</div>
                      <div className="card-body">
                        <h5 className="text-center card-title">GET.time</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Save;
