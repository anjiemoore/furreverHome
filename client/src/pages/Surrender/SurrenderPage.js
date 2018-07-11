import React, { Component } from "react";
import API from "../../utils/API";
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class surrenderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        API.saveAnimal();
        alert('Thanks for your post!');
        event.preventDefault();
      }

  render() {
    return (
       <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-name'
        value={this.state.name}
        onChange={this.handleInputChange}
        control={Input}
        label='Pets Name'
        placeholder='Name (required)'
      />
      <Form.Field
        id='form-image'
        value={this.state.image}
        onChange={this.handleInputChange}
        control={Input}
        type='file'
        label='file'
        placeholder='Search images... (required)'
      />
    </Form.Group>
    <Form.Field
      id='form-textarea'
      value={this.state.about}
      onChange={this.handleInputChange}
      control={TextArea}
      label='Information'
      placeholder='Tell others about your pet'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      onClick={this.handleSubmit}
      type='submit'
      content='Submit'
    />
  </Form>
    );
  }
}

export default surrenderPage;
