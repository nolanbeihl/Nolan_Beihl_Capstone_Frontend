import React , { useState } from "react";
import axios from 'axios';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Explorer from './Components/Explorer/Explorer';
import './index.css';
import EntertainmentModal from "./Components/EntertainmentModal/EntertainmentModal";
import RestaurantModal from "./Components/RestaurantModal/RestaurantModal";
import ExplorerModal from "./Components/ExplorerModal/ExplorerModal";
import UserChoice from "./Components/UserChoice/UserChoice";





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

const restOptions = [
    {
        id: 1, 
        value: 'bar',
    },
    {
        id :2,
        value: 'meal_takeaway',
    },
    {
        id: 3,
        value:'meal_delivery',
    },
    {
        id: 4, 
        value: 'bakery',
    },
    {
        id: 5, 
        value:'restaurant',
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

const radiusOptions = [
    {
        id: 1, 
        value: '1000',
        name: 'Close',
    },
    {
        id :2,
        value: '5000',
        name: 'Not Too Far',
    },
    {
        id: 3,
        value:'10000',
        name: 'Probably Need A ride',
    },
    {
        id: 4, 
        value: '20000',
        name: 'I Would Drive',
    },
    {
        id: 5, 
        value:'50000',
        name: 'Definitely Driving',
    },
];


class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            apiKey : 'AIzaSyBwQzBmt6jC2y_0yA8R3Cr9EduNwQL0hrQ',
            address : '0',
            lat: +38.9072,
            lng: -77.0369,
            anotherKey: 'AIzaSyB1j0XHBYGZI5Pi0ryYwSb29NQNWp3uqMo',
            readableAddress : '0',
            restaruantPick : '',
            entertainmentPick : '',
            distance : 0,
            optionPicked : '0',
            rest_review : '0',
            ent_review : '0',
            radius: '50000',
            priceLevel: '',
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
    }
  
    nearbyRestaurant = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=${this.state.radius}&type=restaurant&key=${this.state.anotherKey}`)
        this.setState({
            restaurants : [response.data]
        })
        var choice = [response.data.results];
        if ((choice.opening_hours) = true)
            var randomchoice = choice[Math.floor(Math.random()*choice.length)];
            var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
            var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${this.state.apiKey}`)
            this.setState({
                restaruantPick : anotherchoice,
                rest_review : place_review
            })
    }
    
    nearbyEntertainment = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=${this.state.radius}&type=${this.state.entertainmentPick}&key=${this.state.anotherKey}`)
        this.setState({
            entertainments : [response.data]
        })
        var choice = [response.data.results];
        if ((choice.opening_hours) = true && ((choice.types) != "lodging"))
            var randomchoice = choice[Math.floor(Math.random()*choice.length)];
            var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
            var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${this.state.apiKey}`)
            this.setState({
                entertainmentPick : anotherchoice,
                ent_review : place_review
            })
        
    }

    setEntertainment = async(setOption)=>{
        this.props.setState({
            entertainmentpick : (setOption)
        })
        alert(this.state.entertainmentPick)   
    }
    
    setLocation = async(setOption) => {
        this.setState({
            radius : setOption
        })
    }
    setRestaurant = async(setOption) => {
        this.setState({
            restaurantPick : setOption
        })
    }
    setPriceLevel = async(setOption) => {
        this.setState({
            priceLevel : setOption
        })
    }
  
    setRadius = async(setOption) => {
        this.setState({
            radius : setOption
        })
        
        alert(this.state.radius);
    }
    render() {
        return(
            <div className='container'>
                <h1>Select a type of Spontaneous Adventure</h1>   
                <div class="container">
                <div class="row"></div>
                </div><h1>
                <UserChoice options = {radiusOptions} setOption={this.setRadius}/>
                <UserChoice options = {entOptions} setOption={this.setEntertainment}/>
                <UserChoice options = {priceLevel} setOption={this.setPriceLevel}/>
                <UserChoice options = {restOptions} setOption={this.setRestaurant}/>

                <ExplorerModal func = {this.convertLocation} readableAddress ={this.state.readableAddress}/>
                <EntertainmentModal func = {this.nearbyEntertainment} entertainmentPick ={this.state.entertainmentPick} place_review={this.state.ent_review}/> 
                <RestaurantModal func = {this.nearbyRestaurant} restaurantPick ={this.state.restaruantPick} place_review={this.state.rest_review}/>                 
                </h1>
            </div>
                
        );

}}

export default App;


