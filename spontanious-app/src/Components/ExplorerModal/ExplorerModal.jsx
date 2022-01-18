import React , { useState } from 'react';
import Modal from 'react-modal';

function ExplorerModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)
  

return ( 
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
                       <button class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                    </div>
                </Modal>
            </div>
    );
}
    
export default ExplorerModal;