import React , { Component, useState } from 'react';
import Modal from 'react-modal';
import Form from 'react-bootstrap/Form';


class ExplorerModal extends Component {

    state={ 
        street: null,
        city: null,
        state: null,
    }
  
    handleChange = (e) => this.setState({street: e.target.value})
  
    render(){
      return(
        <Modal 
          show={this.props.isOpen} 
          onHide={this.props.closeModal}
        >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.readableAddress}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group >
                <Form.Label>Street Address </Form.Label>
                <Form.Control type="text" onChange={this.handleChange} value={this.state.street} placeholder="street address"/>  
                <Form.Label>City </Form.Label>
                <Form.Control type="text" onChange={this.handleChange} value={this.state.city} placeholder="city"/>
                <Form.Label>Street Address </Form.Label>
                <Form.Control type="text" onChange={this.handleChange} value={this.state.state} placeholder="state abbreviation"/>         
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <button variant="primary" type="submit" onClick={() => this.state.handleSubmit(this.state.name)}>
                Submit
            </button>
        </Modal.Footer>
      </Modal>
      )
    }
  }
export default ExplorerModal;








// function ExplorerModal (props){
//     const [itemIsOpen, setItemIsOpen] = useState(false)


// return ( 
//             <div class="container">
//                 <button class="button" onClick={() => setItemIsOpen(true)}>See Your Location </button> 
//                 <Modal isOpen={itemIsOpen}>
//                     <button class="button" onClick={() => props.func()}>Refresh Location</button>
//                     <div className="address">
//                     {!props.readableAddress ? null:
//                         <> 
//                         <div>Current Location:  </div>
//                         <div>{props.readableAddress}</div></>
//                     }
//                     {/* <button class="button" onClick={() => addressForm()}></button> */}
//                        <button class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
//                     </div>
//                 </Modal>
//             </div>
//     );
// }

    
// export default ExplorerModal;


//Previous Attempts at forms

// function addressForm (){
//     <form onSubmit={onSubmit}>
//     <div className="form-group">
//         <label htmlFor="address">Street Address</label>
//         <input className="form-control" id="address" placeholder="street address" />
//     </div> 

//     <div className="form-group">
//         <label htmlFor="city">City</label>
//         <input type="text" className="form-control" id="city"
//         placeholder="name@example.com" 
//         />
//     </div>
//     <div className="form-group">
//         <label htmlFor="state">State</label>
//         <input type="text" className="form-control" id="state"
//         placeholder="state" 
//         />
//     </div>
//     <div className="form-group">
//         <button className="form-control btn btn-primary" type="submit">
//         Submit
//         </button>
//     </div>
//     </form>
// }