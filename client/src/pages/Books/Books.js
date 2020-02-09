import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";

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
            {this.state.Save.length ? (
              <List>
                {this.state.save.map(save => {
                  return (
                    <ListItem key={save._id}>
                      <a href={"/save/" + save._id}>
                        <strong>
                          {save.item} by {save.income}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteSave(save._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
        <Container>
                <Row>
                    <Col sm="12">
                        <div className="card card-body">
                            <h3 className="text-center">BUDGET INFORMATION</h3>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header">Leftover Income</div>
                                        <div className="card-body">
                                            <h5 className="text-center card-title">GET.leftoverIncome</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header">GET.item</div>
                                        <div className="card-body">
                                            <h5 className="text-center card-title"> GET.cost</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header">Time it will take to save</div>
                                        <div className="card-body">
                                            <h5 className="text-center card-title">GET.time</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
      </Container>
    );
  }
}

export default Save;
