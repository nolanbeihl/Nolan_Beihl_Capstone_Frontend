import axios from 'axios';
import React, {Component} from 'react';



class Explorer extends Component {
    constructor(props){
        super(props);
        this.state = {
         explorer_id : '',
        
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async(event) =>{
        event.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/explorers/',this.state)
    }

    render(){
        return(
            <div class= "container" width="50%" height= "20%">
            <form onSubmit ={(event) => this.handleSubmit(event)}>
                <label>Explorer Information</label>
                    <input type = 'text' name="comment" onChange = {this.handleChange} value = {this.state.explorer_id}/>
                <button onClick={this.handleSubmit} type = "submit" value = "Submit"> Submit information</button>
            </form>
            </div>
        )
    }
}

export default Explorer;