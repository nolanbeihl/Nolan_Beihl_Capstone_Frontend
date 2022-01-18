import React, { useState } from 'react';


class UserChoice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : "",
        }; 

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit (event) {
        event.preventDefault(); 
        this.props.setOption(this.state.value);
        alert('You have chosen the following: ' + this.state.value);
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label className="choice-list">
                <select value={(this.state.value)} onChange={this.handleChange}  >
                    {this.props.options.map(item =>  (
                        <option key={item.id} value={item.value}>{item.value}</option>    
                    ))}
                </select> 
                </label>
                <input class="button" type="submit" value="Submit"/>
            </form>
            
        );
        }
}

export default UserChoice;




