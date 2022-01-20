import React , { Component, useState } from 'react';
import Modal from 'react-modal';
import Form from 'react-bootstrap/Form';


function ExplorerModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)

    const customStyles={
        content: {
            top : '50%',
            left : '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            background: 'rgb(255, 176, 103)',

        }
    };

return ( 
            <div class="container">
                <button class="button" onClick={() => setItemIsOpen(true)}>See Your Location </button> 
                <Modal isOpen={itemIsOpen} style={customStyles}>
                    <button class="button-1" onClick={() => props.func()}>Refresh Location</button>
                    <button class="button-1" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                    <div className="address">
                    {!props.readableAddress ? null:
                        <> 
                        <div><h3>Current Location: </h3> </div>
                        <div><h3>{props.readableAddress}</h3></div></>
                    }
                    {/* <button class="button" onClick={() => addressForm()}></button> */}
                    </div>
                </Modal>
            </div>
    );
}

    
export default ExplorerModal;


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
// class ExplorerModal extends Component {
//     constructor(props){
//         super(props);
//         this.state={ 
//             street: null,
//             city: null,
//             state: null,
//             open: false
//         }
//     }

//     handleChange = (e) => this.setState({street: e.target.value});
  
//     render(){
//       return(
//         <div class="container">
//             <button class="button" onClick={() => this.state.open=(true)}>See Your Location </button> 
//         <Modal 
//           show={this.props.isOpen} 
//           onHide={this.props.closeModal}
//         >
//         <Modal.Header closeButton>
//           <Modal.Title>{this.props.readableAddress}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <Form.Group >
//                 <Form.Label>Street Address </Form.Label>
//                 <Form.Control type="text" onChange={this.handleChange} value={this.state.street} placeholder="street address"/>  
//                 <Form.Label>City </Form.Label>
//                 <Form.Control type="text" onChange={this.handleChange} value={this.state.city} placeholder="city"/>
//                 <Form.Label>Street Address </Form.Label>
//                 <Form.Control type="text" onChange={this.handleChange} value={this.state.state} placeholder="state abbreviation"/>         
//             </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//             <button variant="primary" type="submit" onClick={() => this.state.handleSubmit(this.state.name)}>
//                 Submit
//             </button>
//         </Modal.Footer>
//       </Modal>
//       </div>
//       )
//     }
//   }
// export default ExplorerModal;

// class ExplorerModal extends Component {
//     constructor(props) {
//         super(props);
//         this.handleSave = this.handleSave.bind(this);
//         this.state = {
//             street: '',
//             city: '',
//             state:''
//         }
//     }

//     componentWillReceiveProps(nextProps) {
//         this.setState({
//             street: nextProps.street,
//             city: nextProps.city,
//         });
//     }

//     titleHandler(e) {
//         this.setState({ title: e.target.value });
//     }

//     msgHandler(e) {
//         this.setState({ msg: e.target.value });
//     }

//     handleSave() {
//         const item = this.state;
//         this.props.saveModalDetails(item)
//     }

//     render() {
//         return (
//             <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <p><span className="modal-lable">Street:</span><input value={this.state.street} onChange={(e) => this.titleHandler(e)} /></p>
//                             <p><span className="modal-lable">City:</span><input value={this.state.city} onChange={(e) => this.msgHandler(e)} /></p>
//                             <p><span className="modal-lable">State:</span><input value={this.state.state} onChange={(e) => this.msgHandler(e)} /></p>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default ExplorerModal;
