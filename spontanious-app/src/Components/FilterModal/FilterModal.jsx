import React , { Component, useState } from 'react';
import Modal from 'react-modal';
import Form from 'react-bootstrap/Form';
import Explorer from '../Explorer/Explorer';


const entOptions = [
    {
        id: 1, 
        value: 'amusement_park',
    },
    {
        id :2,
        value: 'bowling_alley',
    },
    {
        id: 3,
        value:'museum',
    },
    {
        id: 4, 
        value: 'night_club',
    },
    {
        id: 5, 
        value:'aquarium',
    },
    {
        id: 6,
        value: 'casino',
    },
    {
        id: 7, 
        value: 'tourist_attraction',
    },
    {
        id: 8, 
        value: 'zoo',
    }
];

const priceLevel = [
    {
        id: 1, 
        value: 0,
    },
    {
        id :2,
        value: 1,
    },
    {
        id: 3,
        value: 2,
    },
    {
        id: 4, 
        value: 3,
    },
    {
        id: 5, 
        value: 4,
    },
];

const radiusOptions = [
    {
        id: 1, 
        value: '1',
    },
    {
        id :2,
        value: '2',
    },
    {
        id: 3,
        value:'3',
    },
    {
        id: 4, 
        value: '4',
    },
    {
        id: 5, 
        value:'5',
    },
    {
        id: 6,
        value: 'Max',
    }
];
const openClosed =[
    {
        id: 1,
        value: 'Open',
    },
    {
        id: 2,
        value: 'Closed',
    },
];


export function Filter (props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const [entOption, setOption] = useState("");
    const [priceLevel, setOption] = useState("");
    const [radiusOptions, setOption] = useState("");
    const [openClosed, setOption] = useState("");
   
    const entSubmit = (event) => {
        props.func(entOption);
        event.preventDefault();
    }
    const priceSubmit = (event) => {
        props.func(priceLevel);
        event.preventDefault();
    }
    const radiusSubmit = (event) => {
        props.func(radiusOption);
        event.preventDefault();
    }
    const handleChange = (event) =>{
        this.setState({value: event.target.value});
    }

    return(
        <React.Fragment>
            <button className="button" onClick={handleOpen}>Select Type Of Entertainment</button>
            <Modal
                className="Modal"
                hideBackDrop
                isOpen={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                >
                <form onSubmit={this.handleSubmit()}>
                    <label className="choice-list">
                    <select value={(this.entOption)} onChange={this.handleChange()}  >
                {this.entOptions.map(item =>  (
                    <option key={item.id} value={item.value}>{item.value}</option>    
                ))}
                    </select> 
                    </label>
                <input className="button" type="submit" value="Submit"/>
                </form>
                <form onSubmit={this.handleSubmit()}>
                    <label className="choice-list">
                    <select value={(this.priceLevel)} onChange={this.handleChange()}  >
                {this.priceLevel.map(item =>  (
                    <option key={item.id} value={item.value}>{item.value}</option>    
                ))}
                    </select> 
                    </label>
                <input className="button" type="submit" value="Submit"/>
                </form>
                <form onSubmit={this.handleSubmit()}>
                    <label className="choice-list">
                    <select value={(this.radiusOption)} onChange={this.handleChange()}  >
                {this.radiusOptions.map(item =>  (
                    <option key={item.id} value={item.value}>{item.value}</option>    
                ))}
                    </select> 
                    </label>
                <input className="button" type="submit" value="Submit"/>
                </form>
            </Modal>
        </React.Fragment>
    );
}

// render(){
//     return(
//         <form onSubmit={this.handleSubmit}>
//             <label className="choice-list">
//             <select value={(this.state.value)} onChange={this.handleChange}  >
//                 {this.props.options.map(item =>  (
//                     <option key={item.id} value={item.value}>{item.value}</option>    
//                 ))}
//             </select> 
//             </label>
//             <input className="button" type="submit" value="Submit"/>
//         </form>
        
//     );
//     }
// }

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
                        <br/>
                        <div><h3>{props.readableAddress}</h3></div></>
                    </div>
                    }
            </Modal>
        </div>
    );
}       
                