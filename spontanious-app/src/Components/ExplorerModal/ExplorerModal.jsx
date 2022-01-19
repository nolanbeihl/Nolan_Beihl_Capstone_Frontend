import React , { useState } from 'react';
import Modal from 'react-modal';

function ExplorerModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)

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
return ( 
            <div className='ExplorerModal'>
                <button class="button" onClick={() => setItemIsOpen(true)}>See Your Location </button> 
                <Modal isOpen={itemIsOpen}>
                    <button class="button" onClick={() => props.func()}>Refresh Location</button>
                    <div className="address">
                    {!props.readableAddress ? null:
                        <> 
                        <div>Current Location:  </div>
                        <div>{props.readableAddress}</div></>
                    }
                    {/* <button class="button" onClick={() => addressForm()}></button> */}
                       <button class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                    </div>
                </Modal>
            </div>
    );
}

    
export default ExplorerModal;
