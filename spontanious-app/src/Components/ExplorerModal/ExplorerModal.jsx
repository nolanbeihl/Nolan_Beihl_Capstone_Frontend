import React , { Component, useState } from 'react';
import Modal from 'react-modal';
import Form from 'react-bootstrap/Form';


export function AddressModal (props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    var address = [street, city, state];

    const handleSubmit = (event) => {
        props.func(address);
        event.preventDefault();
    }
    

    return(
        <React.Fragment>
            <button className="button" onClick={handleOpen}>Change Address</button>
            <Modal
                className="Modal"
                hideBackDrop
                isOpen={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                >
                    <form onSubmit={handleSubmit} className="row" >
                        <h1>Change Your Location</h1>
                        <h3>Replace any spaces with a '+'</h3>
                        <h5>See Example Below</h5>
                        <label>
                            Street Address:
                            <input
                                name="street"
                                type="text"
                                value={street}
                                placeholder="123+Street+Name+Rd"
                                onChange={e => setStreet(e.target.value)}
                                required />
                        </label>
                        <label>
                            City: 
                            <input
                                name="city"
                                type="text"
                                value={city}
                                placeholder="City+Name"
                                onChange={e=> setCity(e.target.value)}
                                required />
                        </label>
                        <label>
                            2 Letter State:
                            <input  
                                name="state"
                                type="text"
                                value={state}
                                placeholder="CA"
                                onChange={e=> setState(e.target.value)}
                                required />
                        </label>
                        <button className="button" type="submit" onClick={handleSubmit}> Submit</button>
                        <button className="button" type="submit" onClick={handleClose}>Back To Menu</button>
                    </form>
                
                </Modal>
        </React.Fragment>
    );
}


export default function ExplorerModal(props){
    const [open,setItemIsOpen] = useState(false);
    const handleOpen =() => {
        setItemIsOpen(true);
    };
    const handleClose = () => {
        setItemIsOpen(false);
    };

    return(
        <div>
            <button className="button" onClick={handleOpen}>See Current Location</button>
            <Modal
                className="Modal"
                closeTimeoutMS={500}
                isOpen={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                >
                     <button className="button-1" onClick={() => props.func()}>Refresh Location</button>
                     <button className="button-1" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                     {!props.readableAddress ? null:
                     <div className="address">
                        <> 
                        <div><h3>Current Location: </h3> </div>
                        <div><h3>{props.readableAddress}</h3></div></>
                    </div>
                    }
            </Modal>
        </div>
    );
}       
                