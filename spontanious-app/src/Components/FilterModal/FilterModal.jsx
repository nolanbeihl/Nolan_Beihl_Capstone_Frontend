import React , { Component, useState } from 'react';
import Modal from 'react-modal';
// import Form from 'react-bootstrap/Form';
// import Explorer from '../Explorer/Explorer';
// import ExplorerModal from '../ExplorerModal/ExplorerModal';

class FilterModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            entOption: "tourist_attraction",
            priceLevel: "1",
            radiusOption: "1",
            status: "Open",
            entOptions: [
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
            ],
            priceLevels: [
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
            ],
            radiusOptions: [
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
            ],
            openClosed: [
                {
                    id: 1,
                    value: 'Open',
                },
                {
                    id: 2,
                    value: 'Closed',
                },
            ],
            openModal : false,
        }; 
        this.entSubmit = this.entSubmit.bind(this);
        this.priceSubmit = this.priceSubmit.bind(this);
        this.radiusSubmit = this.radiusSubmit.bind(this);
        this.statusSubmit = this.statusSubmit.bind(this);
    }
    
    entSubmit  (event) {
        this.setState({entOption: event.target.value});
        this.props.ent(event);
        event.preventDefault();
    }
    priceSubmit  (event) {
        this.setState({priceLevel: event.target.value})
        this.props.price(event);
        event.preventDefault();
    }
    radiusSubmit  (event) {
        this.setState({radiusOption: event.target.value})
        this.props.rad(event);
        event.preventDefault();
    }
    statusSubmit  (event) {
        this.setState({status: event.target.value})
        this.props.status(event);
        event.preventDefault();
    }
 
    onClickButton = e =>{
       e.preventDefault()
        this.setState({openModal : true})
    }
    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    render(){
        return(
        <div>
            <button className="button" onClick={this.onClickButton}>Select Filters</button>
            <Modal
                className="Modal"
                hideBackDrop
                isOpen={this.state.openModal}
                onClose={this.onCloseModal}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                ariaHideApp={false}
                >
                <form onSubmit={this.entSubmit}>
                    <label className="choice-list">Entertainment Type <br/>
                    <select value={(this.state.entOption)} onChange={this.entSubmit}>
                {this.state.entOptions.map(item =>  (
                    <option key={item.id} value={item.value}>{item.value}</option>    
                ))}
                    </select> 
                    </label>
                <input className="button" type="submit" value="Submit"/>
                </form>
                <form onSubmit={this.priceSubmit}>Price Level <br/>
                    <label className="choice-list">
                    <select value={(this.state.priceLevel)} onChange={this.priceSubmit}  >
                {this.state.priceLevels.map(item =>  (
                    <option key={item.id} value={item.value}>{item.value}</option>    
                ))}
                    </select> 
                    </label>
                    <input className="button" type="submit" value="Submit"/>
                </form>
                <form onSubmit={this.radiusSubmit}>Distance In Miles From You <br/>
                    <label className="choice-list">
                    <select value={(this.state.radiusOption)}  onChange={this.radiusSubmit} >
                {this.state.radiusOptions.map(item =>  (
                    <option key={item.id} value={item.value}>{item.value}</option>    
                ))}
                    </select> 
                    </label>
                    <input className="button" type="submit" value="Submit"/>
                </form>
                <form onSubmit={this.statusSubmit}>Open or Closed <br/>
                    <label className="choice-list">
                    <select value={(this.state.status)} onChange={this.statusSubmit}  >
                {this.state.openClosed.map(item =>  (
                    <option key={item.id} value={item.value}>{item.value}</option>    
                ))}
                    </select> 
                    </label>
                    <input className="button" type="submit" value="Submit"/>
                </form>
                <button className="button" onClick={this.onCloseModal}>Back To Menu</button>
            </Modal>
        </div>
        );
    }
}
export default FilterModal;


//** Old code from when using a function instead of Class.  Will delete when application works as intended **
  // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
   // handleChange (event) {
    //     // event.preventDefault();
    //     this.setState({entOption: event.target.value});
    // }
    // handleSubmit (event) {
    //     event.preventDefault();
    //     this.props.ent({entOption : event.target.value})
    // }
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

// export default function FilterModal(props){
//     const [open,setItemIsOpen] = useState(false);
//     const handleOpen =() => {
//         setItemIsOpen(true);
//     };
//     const handleClose = () => {
//         setItemIsOpen(false);
//     };

//     return(
//         <div>
//             <button className="button" onClick={handleOpen}>See Current Location</button>
//             <Modal
//                 className="Modal"
//                 closeTimeoutMS={500}
//                 isOpen={open}
//                 onClose={handleClose}
//                 aria-labelledby="parent-modal-title"
//                 aria-describedby="parent-modal-description"
//                 >
//                      <button className="button-1" onClick={() => props.func()}>Refresh Location</button>
//                      <button className="button-1" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
//                      {!props.readableAddress ? null:
//                      <div className="address">
//                         <> 
//                         <div><h3>Current Location: </h3> </div>
//                         <br/>
//                         <div><h3>{props.readableAddress}</h3></div></>
//                     </div>
//                     }
//                     <Filter />
//             </Modal>
//         </div>
//     );
// }       

    // const entOptions = [
    //     {
    //         id: 1, 
    //         value: 'amusement_park',
    //     },
    //     {
    //         id :2,
    //         value: 'bowling_alley',
    //     },
    //     {
    //         id: 3,
    //         value:'museum',
    //     },
    //     {
    //         id: 4, 
    //         value: 'night_club',
    //     },
    //     {
    //         id: 5, 
    //         value:'aquarium',
    //     },
    //     {
    //         id: 6,
    //         value: 'casino',
    //     },
    //     {
    //         id: 7, 
    //         value: 'tourist_attraction',
    //     },
    //     {
    //         id: 8, 
    //         value: 'zoo',
    //     }
    // ];

    // const priceLevel = [
    //     {
    //         id: 1, 
    //         value: 0,
    //     },
    //     {
    //         id :2,
    //         value: 1,
    //     },
    //     {
    //         id: 3,
    //         value: 2,
    //     },
    //     {
    //         id: 4, 
    //         value: 3,
    //     },
    //     {
    //         id: 5, 
    //         value: 4,
    //     },
    // ];

    // const radiusOptions = [
    //     {
    //         id: 1, 
    //         value: '1',
    //     },
    //     {
    //         id :2,
    //         value: '2',
    //     },
    //     {
    //         id: 3,
    //         value:'3',
    //     },
    //     {
    //         id: 4, 
    //         value: '4',
    //     },
    //     {
    //         id: 5, 
    //         value:'5',
    //     },
    //     {
    //         id: 6,
    //         value: 'Max',
    //     }
    // ];
    // const openClosed =[
    //     {
    //         id: 1,
    //         value: 'Open',
    //     },
    //     {
    //         id: 2,
    //         value: 'Closed',
    //     },
    // ];


// export default function Filter (props){
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     }
//     const [entOption, setOption] = useState("");
//     const [priceLevel, setPrice] = useState("");
//     const [radiusOption, setRad] = useState("");
//     const [openClosed, setClosed] = useState("");
