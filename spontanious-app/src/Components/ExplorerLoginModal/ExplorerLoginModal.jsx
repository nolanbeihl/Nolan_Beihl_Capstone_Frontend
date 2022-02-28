import axios from 'axios';
import React, {Component} from 'react';
import Modal from 'react-modal';



class ExplorerLoginModal extends Component {
    constructor(props){
        super(props);
        this.state = {
         username:'',
         password:'',
         openModal: false,

        
        }
    }
    onClickButton = e =>{
        e.preventDefault()
         this.setState({openModal : true})
     }
     onCloseModal = ()=>{
        this.setState({openModal : false})
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    loginExplore = async(event) => {
        event.preventDefault();
        let result = await axios.post('http://127.0.0.1:8000/api/auth/login/',{username:this.state.username, password:this.state.password})
        console.log(result)
        alert(`${this.state.username}  is now logged in`)
    }
    render(){
        return(
            <div >
            <button className="button" onClick={this.onClickButton}>Login</button>
            <Modal
            className="Modal"
            hideBackDrop
            isOpen={this.state.openModal}
            onClose={this.onCloseModal}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            ariaHideApp={false}
            >
            <form onSubmit ={(event) => this.loginExplore(event)}>
                <label>Explorer User Name
                    <input type = 'text' name="username" onChange = {this.handleChange} value = {this.state.username}/>
                    </label>
                <label>Explorer Password
                    <input type = 'text' name="password" onChange = {this.handleChange} value = {this.state.password}/>
                    </label>
                <button onClick={this.handleSubmit} type = "submit" value = "Submit"> Login</button>
            </form>
            <button className="button" onClick={this.onCloseModal}>Back To Menu</button>
            </Modal>
            </div>
        )
    }
}

export default ExplorerLoginModal;