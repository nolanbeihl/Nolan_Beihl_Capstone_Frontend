import axios from 'axios';
import React, {Component} from 'react';
import Modal from 'react-modal';



class Explorer extends Component {
    constructor(props){
        super(props);
        this.state = {
         first_name: '',
         last_name:'',
         email:'',
         username:'',
         password:'',
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
        let user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            password: this.state.password,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            email: this.state.email,
        }
        await axios.post('http://127.0.0.1:8000/api/auth/register/', user)
        alert('Explorer Has Been Created')
        this.loginExplore()
        const explorerJWT = localStorage.getItem('token');
        await axios.post('http://127.0.0.1:8000/api/explorers_explorer/', user,  {headers: {Authorization: 'Bearer ' + explorerJWT}});
        this.onCloseModal();
    }

    loginExplore = async() => {
        let result = await axios.post('http://127.0.0.1:8000/api/auth/login/', {username:this.state.username, password:this.state.password})
        console.log(result)
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('token', result.data.access);
        const tokenFromStorage = localStorage.getItem('token');
        console.log(tokenFromStorage);
    }

    getExplorer = async() =>{
        const explorerJWT = localStorage.getItem('token');
        let result = await axios.get('http://127.0.0.1:8000/api/explorers_explorer/', {headers: {Authorization: 'Bearer ' + explorerJWT}});
        console.log(result.data)
    }
    onClickButton = e =>{
        e.preventDefault()
         this.setState({openModal : true})
     }
     onCloseModal = ()=>{
        this.setState({openModal : false})
    }
    explorerInfo =()=>{
        <ExplorerInfo/>
    }
    render(){
        return(
            <div >
            <button className="button" onClick={this.onClickButton}>Create Explorer </button>
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
                    <h2>Please Fill In The Information Below</h2>
                    <div>
                    <input className='formInput' type = 'text' name="first_name" onChange = {this.handleChange} value = {this.state.first_name} placeholder="First Name"/>
                    </div>
                    <div>
                    <input className='formInput' type = 'text' name="last_name" onChange = {this.handleChange} value = {this.state.last_name} placeholder="Last Name"/>
                    </div>
                    <div>
                    <input className='formInput' type = 'text' name="email" onChange = {this.handleChange} value = {this.state.email} placeholder="Email Address"/>
                    </div>
                    <div>
                    <input className='formInput' type = 'text' name="username" onChange = {this.handleChange} value = {this.state.username} placeholder="User Name"/>
                    </div>
                    <div>
                    <input className='formInput' type = 'text' name="password" onChange = {this.handleChange} value = {this.state.password} placeholder="Min 8 Character Password"/>
                    </div>
                    <div>
                    <input className='formInput' type = 'text' name="street" onChange = {this.handleChange} value = {this.state.street} placeholder="123+Street+Name+Rd"/>
                    </div>
                    <div>
                    <input className='formInput' type = 'text' name="city" onChange = {this.handleChange} value = {this.state.city} placeholder="City+Name"/>
                    </div>
                    <div>
                    <input className='formInput' type = 'text' name="state" onChange = {this.handleChange} value = {this.state.state} placeholder="2 letter State"/>
                    </div>
                <button className="button" type = "submit" value = "Submit"> Submit information</button>
            </form>
            <button className="button" onClick={this.onCloseModal}>Back To Menu</button>
            <button className="button" onClick={this.explorerInfo}>Get Explorers Information</button>
            </Modal>
            </div>
        )
    }
}

export default Explorer;

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
        response: [],
        
        }
    }
    componentDidMount() {
        this.getExplorer();
    }

    getExplorer = async() =>{
        let response = await axios.get('http://127.0.0.1:8000/api/explorers_explorer/')
        const user = response.fetch(localStorage.getItem('username'))
        console.log({user})
        // alert(`${response.data[8].firstName}, ${response.data[8].lastName}, ${response.data[8].street}`)
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
        {!this.response.data ? null:
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
