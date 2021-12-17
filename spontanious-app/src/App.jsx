import React from "react";
import axios from 'axios';
import {Component} from "react";


class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            apiKey : 'AIzaSyBwQzBmt6jC2y_0yA8R3Cr9EduNwQL0hrQ',
            address : '',
            lat: 0,
            lng: 0,


        }
    }

    componentDidMount(){
        this.testlocation()
    }


    testlocation = async() =>{
        let response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${this.state.apiKey}`)
        this.setState({
            lat: (response.data.location.lat),
            lng: (response.data.location.lng)
        })
        debugger;
        console.log(response.data)
    }
    
    // convertlocation = async() =>{
    //     let response = await.axios
    // }

    render() {
        return(
            <div className = 'container'>
                <h1>Spontaneous</h1>
                <div><p>{this.state.lat}</p></div>
                <div><p>{this.state.lng}</p></div>
            </div>
            );
    }

}

export default App;


