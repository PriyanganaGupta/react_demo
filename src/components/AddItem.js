import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName:"",
            productPrice:0,
        }
    }
    render() { 
        return (
            <Form className="row mb-5">
            <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter Name" name="productName"
              onChange={() => {
                this.setState({productName : Event.currentTaget.value})
              }} />
               value = {this.state.productName}
            </Form.Group>
      
            <Form.Group className="mb-3 col-4" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control placeholder="Price" name ="productPrice"
              onChange={() => {
                this.setState({productPrice : Event.currentTaget.value})
              }}/>
              value = {this.state.productPrice}
            </Form.Group>
            <Button variant="primary col-4" type="submit" onClick={ () => {
                this.props.addItem()
            }}>
              Add
            </Button>
          </Form>
        );
    }
}
 
export default AddItem;