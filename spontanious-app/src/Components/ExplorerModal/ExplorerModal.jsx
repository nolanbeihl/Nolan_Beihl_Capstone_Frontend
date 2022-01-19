import React , { useState } from 'react';
import Modal from 'react-modal';

// function ExplorerModal (props){
const [itemIsOpen, setItemIsOpen] = useState(false)

//     form

// return ( 
//             <div className='ExplorerModal'>
//                 <button class="button" onClick={() => setItemIsOpen(true)}>See Your Location </button> 
//                 <Modal isOpen={itemIsOpen}>
//                     <button class="button" onClick={() => props.func()}>Refresh Location</button>
//                     <div>
//                     {!props.readableAddress ? null:
//                         <> 
//                         <div>Current Location:  </div>
//                         <div>{props.readableAddress}</div></>
//                     }
//                     <div class="button" onClick{() => this.addressForm()}></div>
//                        <button class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
//                     </div>
//                 </Modal>
//             </div>
//     );
// }
class ExplorerModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : "",
        }; 

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit (event) {
        event.preventDefault(); 
        this.props.setOption(this.state.value);
    }
    addressForm(){
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="address">Street Address</label>
                <input className="form-control" id="address"/>
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="City" />
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">Submit Change</button>
            </div>
        </form> 
    }
    render(){
        return(
            <div className='ExplorerModal'>
            <button class="button" onClick={() => setItemIsOpen(true)}>See Your Location </button> 
            <Modal isOpen={itemIsOpen}>
                <button class="button" onClick={() => props.func()}>Refresh Location</button>
                <div>
                {!props.readableAddress ? null:
                    <> 
                    <div>Current Location:  </div>
                    <div>{props.readableAddress}</div></>
                }
                <div class="button" onClick={() => addressForm()}>Change Address</div>
                   <button class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                </div>
            </Modal>
        </div>
);
}
}

    
export default ExplorerModal;