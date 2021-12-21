import React, { useDebugValue } from "react";
import axios from 'axios';
import {Component} from "react";


class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            apiKey : 'AIzaSyBwQzBmt6jC2y_0yA8R3Cr9EduNwQL0hrQ',
            address : '',
            lat: 23.000,
            lng: 115.000,
            anotherKey: 'AIzaSyB1j0XHBYGZI5Pi0ryYwSb29NQNWp3uqMo',
            readableAddress : ''

        }
    }

    componentDidMount(){
        this.testlocation()
        this.convertlocation()
        this.nearbyRestaurant()
    }


    testlocation = async() =>{ 
        let response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${this.state.apiKey}`)
        this.setState({
            lat: (response.data.location.lat),
            lng: (response.data.location.lng)
        })
    }
    
    convertlocation = async() =>{
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
        debugger;
        alert(response.data)
    }
    
    

    render() {
  
        return(
            <div className = 'container'>
                <h1>Spontaneous</h1>
                <div><p>{this.state.lat}</p></div>
                <div><p>{this.state.lng}</p></div>
                <button onClick={this.convertlocation}>Convert Location</button>
                <button onClick={this.nearbyRestaurant}>Find restaurants</button>
                <div><p>{this.state.readableAddress}</p></div>
            </div>
            );
           
    }

}

export default App;


