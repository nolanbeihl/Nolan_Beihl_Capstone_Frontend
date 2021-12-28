import React, { useDebugValue } from "react";
import axios from 'axios';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Entertainment from "./Components/Entertainment/Entertainment";
import Explorer from './Components/Explorer/Explorer';
import EntertainmentChoice from './Components/Entertainment/Entertainment';


const options =[{id: 1, value: 'amusement_park',},{id :2, value: 'bowling_alley',},{id :3, value:'museum',},{id: 4, value: 'night_club',},{id:5, value:'aquarium',}, {id:6, value: 'casino',},{id:7, value: 'tourist_attraction',},{id:8, value: 'zoo',}];


function App() {
    return(
        <div className="container">
            <EntertainmentChoice title="Select Entertainment Type" items={[options]}/>
        </div>
      
    );
}

// class App extends Component{
//     constructor(props) {
//         super(props);
//         this.state= {
//             apiKey : 'AIzaSyBwQzBmt6jC2y_0yA8R3Cr9EduNwQL0hrQ',
//             address : '',
//             lat: 38.9661395,
//             lng: -104.6005025,
//             anotherKey: 'AIzaSyB1j0XHBYGZI5Pi0ryYwSb29NQNWp3uqMo',
//             readableAddress : '',
//             restaruantPick : [],
//             entertainmentPick : [],
//             distance : 0,
//             options : ['amusement_park','bowling_alley','museum','night_club','aquarium,casino','tourist_attraction','zoo'],
//             optionPicked : '',

//         }
//     }

//     componentDidMount(){
//         // this.explorerLocation()
//         // this.convertLocation()
//         // this.nearbyRestaurant()
//     }

//     explorerLocation = async() =>{ 
//         let response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${this.state.apiKey}`)
//         this.setState({
//             lat: (response.data.location.lat),
//             lng: (response.data.location.lng)
//         })
//     }
    
//     convertLocation = async() =>{
//         let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&key=${this.state.anotherKey}`)
//         this.setState({
//             address : [response.data.data],
//             readableAddress : (response.data.results[0].formatted_address),
//         })
//         alert(response.data.results[0].formatted_address)
//     }

//     nearbyRestaurant = async() =>{
//         let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=5000&type=restaurant&key=${this.state.anotherKey}`)
//         this.setState({
//             restaurants : [response.data]
//         })
//         var choice = [response.data.results];
//         var randomchoice = choice[Math.floor(Math.random()*choice.length)];
//         var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
//         alert(`Restaurant Name: ${anotherchoice.name} Restaurant Rating: ${anotherchoice.rating} Restaurant Price Level ${anotherchoice.price_level}`)
//         this.setState({
//             restaruantPick : [anotherchoice]
//         })
//     }
    
//     nearbyEntertainment = async(props) =>{
//         let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=50000&type=${this.state.options}&key=${this.state.anotherKey}`)
//         this.setState({
//             entertainments : [response.data]
//         })
//         var choice = [response.data.results];
//         var randomchoice = choice[Math.floor(Math.random()*choice.length)];
//         var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
//         debugger;
//         alert(`Name:  ${anotherchoice.name} Rating:  ${anotherchoice.rating} Price Level:  ${anotherchoice.price_level}`)
//         this.setState({
//             entertainmentPick : [anotherchoice]
//         })
//     }

  
//     render() {
//         return(
//             <div className='container'>
//                 <h1>Spontaneous</h1>   
//                 <p>{this.state.address}</p>
//                 <button onClick={this.explorerLocation}>Get Location</button>
//                 <button onClick={this.convertLocation}>Convert Location</button>
//                 <button onClick={this.nearbyRestaurant}>Find Restaurants</button>
//                 <button onClick={this.nearbyEntertainment}>Find Entertainment</button>
//                 {/* <Explorer /> */}
                
//                 <div><p>{this.state.readableAddress}</p></div>
            
//             </div>
                
//         )

// }}

export default App;


