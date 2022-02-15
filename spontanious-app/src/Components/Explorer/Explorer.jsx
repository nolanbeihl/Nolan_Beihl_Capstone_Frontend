import axios from 'axios';
import React, {Component} from 'react';
import Modal from 'react-modal';



class Explorer extends Component {
    constructor(props){
        super(props);
        this.state = {
         explorer_id : '',
         firstName: '',
         lastName:'',
         street:'',
         city:'',
         state:'',
         openModal: false,

        
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addExplorer = async(event) =>{
        event.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/explorers_explorer/',this.state)
        alert('Explorer Has Been Created')
    }
    getExplorer = async() =>{
        let response = await axios.get('http://127.0.0.1:8000/api/explorers_explorer/')
        alert(`${response.data[8].firstName}, ${response.data[8].lastName}, ${response.data[8].street}`)
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
            <button className="button" onClick={this.onClickButton}>Explorer Information</button>
            <Modal
            className="Modal"
            hideBackDrop
            isOpen={this.state.openModal}
            onClose={this.onCloseModal}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            ariaHideApp={false}
            >
            <form onSubmit ={(event) => this.addExplorer(event)}>
                <label>Explorer First Name
                    <input type = 'text' name="firstName" onChange = {this.handleChange} value = {this.state.firstName}/>
                    </label>
                <label>Explorer Last Name
                    <input type = 'text' name="lastName" onChange = {this.handleChange} value = {this.state.lastName}/>
                    </label>
                <label>Explorer Street
                    <input type = 'text' name="street" onChange = {this.handleChange} value = {this.state.street} placeholder="123+Street+Name+Rd"/>
                    </label>
                <label>Explorer City
                    <input type = 'text' name="city" onChange = {this.handleChange} value = {this.state.city} placeholder="City+Name"/>
                    </label>
                <label>Explorer State
                    <input type = 'text' name="state" onChange = {this.handleChange} value = {this.state.state} placeholder="CA"/>
                    </label>
                <button onClick={this.handleSubmit} type = "submit" value = "Submit"> Submit information</button>
            </form>
            <button className="button" onClick={this.onCloseModal}>Back To Menu</button>
            <button className="button" onClick={this.getExplorer}>Get Explorers Information</button>
            </Modal>
            </div>
        )
    }
}

export default Explorer;