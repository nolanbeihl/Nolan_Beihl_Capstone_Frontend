import axios from 'axios';
import React, {Component} from 'react';
import Modal from 'react-modal';


class ExplorerInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        //  explorer_id : '',
         firstName: '',
         lastName:'',
         street:'',
         city:'',
         state:'',
        //  total_refresh: 0,
        //  total_usage: 0,
        openModal: false,
        response: '',
        
        }
    }
    componentDidMount() {
        this.getExplorer();
    }

    getExplorer = async() =>{
        let jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/explorers_explorer/', {headers: {Authorization: 'Bearer ' + jwt}});
        
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
        <div >
            <button className="button" onClick={this.onClickButton}>Explorer Info</button>
        <Modal
        className="Modal"
        hideBackDrop
        isOpen={this.state.openModal}
        onClose={this.onCloseModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        ariaHideApp={false}
        >
        <div>
        {!this.response ? null:
                        <><div class="main-text">{`First Name:  ${this.response.data[8].firstName}`}</div>
                        <div class="main-text">{`Last Name:  ${this.response.data[8].lastName}`}</div>
                        <div class="main-text">{`Street:  ${this.response.data[8].street}`}</div>
                        <div class="main-text">{`City:  ${this.response.data[8].city}`}</div>
                        <div class="main-text">{`State: ${this.response.data[8].state}`}</div>                 
                        </>
        }
        </div>
        <button className="button" onClick={this.onCloseModal}>Back To Menu</button>
        </Modal>
        </div>
        )
    }
}
export default ExplorerInfo;