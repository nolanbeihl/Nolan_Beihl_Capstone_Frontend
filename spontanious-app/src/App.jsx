import React from "react";
import axios from 'axios';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Explorer from './Components/Explorer/Explorer';
import './index.css';
import EntertainmentModal from "./Components/EntertainmentModal/EntertainmentModal";
import RestaurantModal from "./Components/RestaurantModal/RestaurantModal";
import ExplorerModal from "./Components/ExplorerModal/ExplorerModal";
import UserChoice from "./Components/UserChoice/UserChoice";


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

const priceLevel = [
    {
        id: 1, 
        value: 0,
        name: 'Cheap',
    },
    {
        id :2,
        value: 1,
        name: 'Not very much',
    },
    {
        id: 3,
        value: 2,
        name: 'Moderate',
    },
    {
        id: 4, 
        value: 3,
        name: 'A little high',
    },
    {
        id: 5, 
        value: 4,
        name: 'Are You Have Enough?',
    },
];

const radiusOptions = [
    {
        id: 1, 
        value: '1',
        name: 'Close',
    },
    {
        id :2,
        value: '2',
        name: 'Not Too Far',
    },
    {
        id: 3,
        value:'3',
        name: 'Probably Need A ride',
    },
    {
        id: 4, 
        value: '4',
        name: 'I Would Drive',
    },
    {
        id: 5, 
        value:'5',
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
            entertainmentPick : '',
            distance : 0,
            optionPicked : '0',
            rest_review : '0',
            ent_review : '0',
            radius: '50000',
            priceLevel: 5,
            choice : [],
            choiceLat : 0,
            choiceLng : 0,
            distance : '',
        }
    }
    componentDidMount(){
        this.convertLocation()
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
            var distanceTo = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${this.state.lat}%2C${this.state.lng}&destinations=${anotherchoice.geometry.location.lat}%2C${anotherchoice.geometry.location.lng}&key=${this.state.anotherKey}`)
            if (anotherchoice.price_level === this.state.priceLevel);
                this.setState({
                    restaruantPick : anotherchoice,
                    rest_review : place_review,
                    distance : distanceTo.data.rows[0].elements[0].distance.text,
            });
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
            var distanceTo = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${this.state.lat}%2C${this.state.lng}&destinations=${anotherchoice.geometry.location.lat}%2C${anotherchoice.geometry.location.lng}&key=${this.state.anotherKey}`)
            this.setState({
                entertainmentPick : anotherchoice,
                ent_review : place_review,
                distance : distanceTo.data.rows[0].elements[0].distance.text,
            })
        
    }
   
    setEntertainment = (setOption)=>{
        this.setState({
            entertainmentPick : setOption,
        })  
    }
    
    setLocation = async(setOption) => {
        this.setState({
            radius : setOption
        })
    }

    setPriceLevel = async(setOption) => {
        this.setState({
            priceLevel : setOption
        })
    }
  
    setRadius = async(setOption) => {
        if (setOption === 1)
            this.setState({
                radius : 1609,
            })
        if (setOption === 2)
            this.setState({
                radius : 3218,
            })
        if (setOption === 3)
            this.setState({
                radius : 4828
            })    
        if (setOption === 4)
            this.setState({
                radius : 6437
            })
        if (setOption === 5)
            this.setState({
                radius : 8046
        })
    }

    render() {
        return(
            <div className="App">    
                   
            <div class="container">
            <h1>Select a type of Spontaneous Adventure</h1>
                <h1>
                    <div className="row">
                    
                        Choose to filter with the below options </div>
                    <div className="row">
                        If you want a completely random option just click on Entertainment or Restaurant</div>
                    <div className='dist' class="col-md-3"> </div>
                    <div className="row">
                        Set distance from you in Miles
                    <UserChoice options = {radiusOptions} setOption={this.setRadius}/>
                    </div>
                    <div className="row">
                    <div  class="col-md-3"className="entOption">
                        Options in type of Entertainment
                    <UserChoice options = {entOptions} setOption={this.setEntertainment}/>
                    </div>
                    </div>
                    <div className="row">
                    <div  class="col-md-3" className="price">
                        Set Max Price Level
                    <UserChoice options = {priceLevel} setOption={this.setPriceLevel}/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="location">
                        See Your Current Location
                    <ExplorerModal func = {this.convertLocation} readableAddress ={this.state.readableAddress}/>
                    </div>
                    </div>
                    <div className="ent">
                    <EntertainmentModal func = {this.nearbyEntertainment} entertainmentPick ={this.state.entertainmentPick} place_review={this.state.ent_review} distance={this.state.distance}/> 
                    </div>
                    <div className="rest">
                    <RestaurantModal func = {this.nearbyRestaurant} restaurantPick ={this.state.restaruantPick} place_review={this.state.rest_review} distance={this.state.distance}/>
                    </div>
                    </h1>
                 </div>
               </div>
        );
}}

export default App;


