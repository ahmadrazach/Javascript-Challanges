import React, { Component } from 'react';
import gql from 'graphql-tag';
import PostViewer from './PostViewer';
import PostEditor from './PostEditor';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Field, Input
} from 'reactstrap';

// Checking in Post Editor here 
const SUBMIT_POST = gql`
  mutation SubmitPost($input: PostInput!) {
    submitPost(input: $input) {
      id
    }
  }
`;
//

class App extends Component {
  state = {
    editing: null,
  };


  
  render() {

   function handleSubmit(e){
      e.preventDefault();

      
    }

    const { editing } = this.state;

    return (
    <Container fluid>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
              <Label>Author</Label>
              <Input
                required
                name="author"
                placeholder="username" 
              />
            </FormGroup>
            <FormGroup>
              <Label>Body</Label>
              <Input
                required
                name="body"
                placeholder="Body" 
              />
            </FormGroup>
            <Button type="submit"  color="primary">Add</Button>
            </Form>
        <PostViewer />
        
      </Container>
    );
  }
}

export default App;