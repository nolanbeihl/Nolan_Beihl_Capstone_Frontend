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
        localStorage.clear()
        event.preventDefault();
        let result = await axios.post('http://127.0.0.1:8000/api/auth/login/',{username:this.state.username, password:this.state.password})
        localStorage.setItem('username' , this.state.username);
        localStorage.setItem('token', result.data.access);
        alert(`${this.state.username}  is now logged in`);
        this.onCloseModal();
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
                    <h2>Please Enter The Fields Below</h2>
                    <div>
                    <input type = 'text' name="username" onChange = {this.handleChange} value = {this.state.username} placeholder="User Name"/>
                    </div>
                    <div>
                    <input type = 'text' name="password" onChange = {this.handleChange} value = {this.state.password} placeholder="Password"/>
                    </div>
                <button className="button" type = "submit" value = "Submit"> Login</button>
            </form>
            <button className="button" onClick={this.onCloseModal}>Back To Menu</button>
            </Modal>
            </div>
        )
    }
}

export default ExplorerLoginModal;