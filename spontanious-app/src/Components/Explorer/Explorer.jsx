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

        
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async(event) =>{
        event.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/explorers_explorer/',this.state)
    }

    render(){
        return(
            <div class= "container" width="50%" height= "20%">
            <form onSubmit ={(event) => this.handleSubmit(event)}>
                <label>Explorer First Name
                    <input type = 'text' name="firstName" onChange = {this.handleChange} value = {this.state.firstName}/>
                    </label>
                <label>Explorer Last Name
                    <input type = 'text' name="lastName" onChange = {this.handleChange} value = {this.state.lastName}/>
                    </label>
                <button onClick={this.handleSubmit} type = "submit" value = "Submit"> Submit information</button>
            </form>
            </div>
        )
    }
}

export default Explorer;