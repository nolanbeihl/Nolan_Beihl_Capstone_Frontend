import React, { useDebugValue } from "react";
import axios from 'axios';
import {Component} from "react";


class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            apiKey : 'AIzaSyBwQzBmt6jC2y_0yA8R3Cr9EduNwQL0hrQ',
            address : '',
            lat: 38.9661395,
            lng: -104.6005025,
            anotherKey: 'AIzaSyB1j0XHBYGZI5Pi0ryYwSb29NQNWp3uqMo',
            readableAddress : '',
            restaruantPick : [],
            entertainmentPick : [],
        }
    }

    componentDidMount(){
        // this.testlocation()
        // this.convertlocation()
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
        alert(response.data.results[0].formatted_address)
    }
    nearbyRestaurant = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=5000&type=restaurant&key=AIzaSyB1j0XHBYGZI5Pi0ryYwSb29NQNWp3uqMo`)
        this.setState({
            restaurants : [response.data]
        })
        var choice = [response.data.results];
        var randomchoice = choice[Math.floor(Math.random()*choice.length)];
        var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
        alert(`${anotherchoice.name}, ${anotherchoice.rating}, ${anotherchoice.price_level}`)
        this.setState({
            restaruantPick : [anotherchoice]
        })
    }
    nearbyEntertainment = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=5000&type=entertainment&key=AIzaSyB1j0XHBYGZI5Pi0ryYwSb29NQNWp3uqMo`)
        this.setState({
            entertainments : [response.data]
        })
        var choice = [response.data.results];
        var randomchoice = choice[Math.floor(Math.random()*choice.length)];
        var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
        alert(`${anotherchoice.name}, ${anotherchoice.rating}, ${anotherchoice.price_level}`)
        this.setState({
            entertainmentPick : [anotherchoice]
        })
    }
  

    render() {
  
        return(
            <div className='container'>
                <h1>Spontaneous</h1>   
                <button onClick={this.explorerLocation}>Get Location</button>
                <button onClick={this.convertLocation}>Convert Location</button>
                <button onClick={this.nearbyRestaurant}>Find Restaurants</button>
                <button onClick={this.nearbyEntertainment}>Find Entertainment</button>
                <div><p>{this.state.readableAddress}</p></div>
            </div>
                
        )

}}

export default App;


