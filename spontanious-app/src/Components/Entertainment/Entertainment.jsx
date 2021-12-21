import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';
import App from '../../App';




function Entertainment() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }

function nearbyEntertainment() = async(e) =>{
    let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.lat}%2C${this.props.lng}&radius=50000&type=${this.state.value}&key=${this.props.anotherKey}`)
    this.setState({
        entertainments : [response.data]
    })
    var choice = [response.data.results];
    var randomchoice = choice[Math.floor(Math.random()*choice.length)];
    var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
    debugger;
    alert(`${anotherchoice.name}, ${anotherchoice.rating}, ${anotherchoice.price_level}`)
    this.setState({
        entertainmentPick : [anotherchoice]
    })
}

return (

    <div className="App container">
        <DropdownButton
        alignRight
        title="Dropdown right"
        id="dropdown-menu-align-right"
        onSelect={handleSelect , nearbyEntertainment()}
          >
                <Dropdown.Item eventKey='amusement_park'>amusement park</Dropdown.Item>
                <Dropdown.Item eventKey='{this.props.options[1]}'>test2</Dropdown.Item>
                <Dropdown.Item eventKey='{this.props.options[2]}'>test3</Dropdown.Item>
                <Dropdown.Item eventKey='{this.props.options[3]}'>test4</Dropdown.Item>
                <Dropdown.Item eventKey='{this.props.options[4]}'>test5</Dropdown.Item>
                <Dropdown.Item eventKey='{this.props.options[5]}'>test6</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
        </DropdownButton>
        <h4>You selected {value}</h4>
      </div>
    );
  }
  
  export default Entertainment;