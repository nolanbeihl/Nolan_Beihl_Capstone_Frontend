import React from "react";
import axios from 'axios';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Entertainment from "./Components/Entertainment/Entertainment";
import Explorer from './Components/Explorer/Explorer';
import EntertainmentChoice from './Components/Entertainment/Entertainment';
import RestaurantChoice from "./Components/Restaurant/Restaurant";
import './index.css';
import EntertainmentModal from "./Components/EntertainmentModal/EntertainmentModal";
import RestaurantModal from "./Components/RestaurantModal/RestaurantModal";


const entOptions = [
    {
        id: 1, 
        value: 'amusement_park',
    },
    {
        id :2,
        value: 'bowling_alley',
    },
    {
        id: 3,
        value:'museum',
    },
    {
        id: 4, 
        value: 'night_club',
    },
    {
        id: 5, 
        value:'aquarium',
    },
    {
        id: 6,
        value: 'casino',
    },
    {
        id: 7, 
        value: 'tourist_attraction',
    },
    {
        id: 8, 
        value: 'zoo',
    }
];

const foodOptions = [
    {
        id: 1, 
        name: 'bar',
    },
    {
        id :2,
        name: 'meal_takeaway',
    },
    {
        id: 3,
        name:'meal_delivery',
    },
    {
        id: 4, 
        name: 'bakery',
    },
    {
        id: 5, 
        name:'restaurant',
    },
];

const priceLevel = [
    {
        id: 1, 
        value: '0',
        name: 'Cheap',
    },
    {
        id :2,
        value: '1',
        name: 'Not very much',
    },
    {
        id: 3,
        value:'2',
        name: 'Moderate',
    },
    {
        id: 4, 
        value: '3',
        name: 'A little high',
    },
    {
        id: 5, 
        value:'4',
        name: 'Are You Have Enough?',
    },
];

// function funcApp() {
//     return(
//         <div className="container">
//             <h1 style={{textAlign: 'center'}}>
//                 Choose Your Next Spontaneous Adventure{' '}
//                 <span role="img" aria-label="Entertainment Choice">

//                 </span>
//             </h1>
//             <EntertainmentChoice title="Entertainment Types" items={entOptions} key={apiKey} lat={lat} lng={lng}/>
//             <RestaurantChoice title="Restaurant by price level" items={priceLevel}/>
//             <RestaurantChoice title="Restaurant type" items={foodOptions}/>

                        
//         </div>
            
//     );
// }


class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            apiKey : 'AIzaSyBwQzBmt6jC2y_0yA8R3Cr9EduNwQL0hrQ',
            address : '',
            lat: +38.9072,
            lng: -77.0369,
            anotherKey: 'AIzaSyB1j0XHBYGZI5Pi0ryYwSb29NQNWp3uqMo',
            readableAddress : '',
            restaruantPick : [],
            entertainmentPick : [],
            distance : 0,
            options : ['amusement_park','bowling_alley','museum','night_club','aquarium,casino','tourist_attraction','zoo'],
            optionPicked : '',
            choice : 'night_club',
            rest_review : '',
            ent_review : '',
        }
    }

    componentDidMount(){
        // this.explorerLocation()
        // this.convertLocation()
        // this.nearbyRestaurant()
    }

    explorerLocation = async() =>{ 
        let response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${this.state.apiKey}`)
        this.setState({
            lat: (response.data.location.lat),
            lng: (response.data.location.lng)
        })
    }
    
    convertLocation = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&key=${this.state.anotherKey}`)
        this.setState({
            address : [response.data.data],
            readableAddress : (response.data.results[0].formatted_address),
        })
        alert(`${response.data.results[0].formatted_address} Is your current address`)
    }

    nearbyRestaurant = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=5000&type=restaurant&key=${this.state.anotherKey}`)
        this.setState({
            restaurants : [response.data]
        })
        debugger;
        var choice = [response.data.results];
        if ((choice.opening_hours) = true)
            var randomchoice = choice[Math.floor(Math.random()*choice.length)];
            var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
            var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${this.state.apiKey}`)
            // alert(`Restaurant Name: ${anotherchoice.name}\nRestaurant Rating: ${anotherchoice.rating}\nRestaurant Price Level:  ${anotherchoice.price_level}\nRestaurant Address: ${anotherchoice.vicinity}\nReviews: ${anotherchoice.reviews}`)
            this.setState({
                restaruantPick : anotherchoice,
                rest_review : place_review
            })
    }
    
    nearbyEntertainment = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=50000&type=${this.state.choice}&key=${this.state.anotherKey}`)
        this.setState({
            entertainments : [response.data]
        })
        debugger;
        var choice = [response.data.results];
        if ((choice.opening_hours) = true && ((choice) != "lodging"))
            var randomchoice = choice[Math.floor(Math.random()*choice.length)];
            var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
            var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${this.state.apiKey}`)
            this.setState({
                entertainmentPick : anotherchoice,
                ent_review : place_review
            })
    }

    thingToPassDown = async(thingToSetStateWith)=>{
        this.setState({
            entertainmentpick : thingToSetStateWith
        })
    }
  
    render() {
        return(
            <div className='container'>
                <h1>Spontaneous Adventure</h1>   
                <div class="container">
                <div class="row"></div>
                </div><button class="button"  onClick={this.convertLocation}>Get Location</button>
                <div class="row"></div>
                <button class="button" onClick={this.nearbyRestaurant}>Find Restaurants</button>
                <EntertainmentModal func = {this.nearbyEntertainment} entertainmentPick ={this.state.entertainmentPick} place_review={this.state.ent_review}/> 
                <RestaurantModal func = {this.nearbyRestaurant} restaurantPick ={this.state.restaruantPick} place_review={this.state.rest_review}/>
                <Entertainment stateFunction = {this.thingToPassDown} title="Options" items={entOptions}></Entertainment>                   
            </div>
                
        );

}}

export default App;


