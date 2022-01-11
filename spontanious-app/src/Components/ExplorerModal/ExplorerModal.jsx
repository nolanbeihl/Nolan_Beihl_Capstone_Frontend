import React , { useState } from 'react';
import Modal from 'react-modal';
import App from '../../App';


function ExplorerModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)
  

return ( 
            <div className='ExplorerModal'>
                <button onClick={() => setItemIsOpen(true)}>See Your Location </button> 
                <Modal isOpen={itemIsOpen}>
                    <button onClick={() => props.func()}>Refresh Location</button>
                    <div>
                    {!props.readableAddress ? null:
                        <> 
                        <div>Current Location:  </div>
                        <div>{props.readableAddress}</div></>
                    }
                       <button onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                    </div>
                </Modal>
            </div>
    );
}
    
export default ExplorerModal;