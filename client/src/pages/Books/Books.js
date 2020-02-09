import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Save extends Component {
  // Setting our component's initial state
  state = {
    //item: "",
    //income: "",
    Save: [],
    //bills: "",
    title: "",
    //cost: "",
    author: "",
    //save: ""
    synopsis: ""
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
          save: res.data, title: "", author: "", synopsis: ""
          //income: "", bills: "", cost: "", save: "" 
        })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads Save from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadSave())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload Save from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveSave({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadSave())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {this.state.Save.length ? (
              <List>
                {this.state.save.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/save/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Save;
