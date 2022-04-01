import React from "react";
import axios from 'axios';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Explorer from './Components/Explorer/Explorer';
import './index.css';
import EntertainmentModal from "./Components/EntertainmentModal/EntertainmentModal";
import RestaurantModal from "./Components/RestaurantModal/RestaurantModal";
import ExplorerModal from "./Components/ExplorerModal/ExplorerModal";
import { AddressModal } from "./Components/ExplorerModal/ExplorerModal";
import FilterModal, { Filter } from "./Components/FilterModal/FilterModal";
import ExplorerLoginModal from "./Components/ExplorerLoginModal/ExplorerLoginModal";
import ExplorerInfo from "./Components/ExplorerInfo/ExplorerInfoModal";



class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            apiKey : 'AIzaSyAORImFpOkztcGpu9e3iInNX_nB10Cn8AA',
            address : '0',
            lat: +38.9072,
            lng: -77.0369,
            anotherKey: 'AIzaSyB1j0XHBYGZI5Pi0ryYwSb29NQNWp3uqMo',
            readableAddress : '',
            entertainmentPick : 'tourist_attraction',
            distance : 0,
            optionPicked : '0',
            rest_review : '0',
            ent_review : '0',
            radius: '50000',
            priceLevel: 5,
            choice : [],
            choiceLat : 0,
            choiceLng : 0,
            openOrClosed: true,
            street: '',
            city: '',
            state: '',
        }
    }
    componentDidMount(){
        //this.explorerLocation()
        this.convertLocation()
        this.setItems()
    }
    setItems(){
        localStorage.setItem('APIKey', this.state.apiKey);
        //localStorage.setItem('lat', +38.9072);
        //localStorage.setItem('lng', -77.0369);
        localStorage.setItem('radius', 50000);
        this.setState({
            street : localStorage.getItem('street'),
            city: localStorage.getItem('city'),
            state: localStorage.getItem('state'),
        })
        this.convertLocation()
    }
    explorerLocation = async() =>{ 
        let response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${this.state.apiKey}`)
        localStorage.setItem('lat', response.data.location.lat);
        localStorage.setItem('lng', response.data.location.lng);
        this.convertLocation();
        // this.setState({
        //     lat: (response.data.location.lat),
        //     lng: (response.data.location.lng)
        // })
    }
    addressUpdate = async()=> {
        this.setItems()
        let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.street},+${this.state.city},+${this.state.state}&key=${this.state.apiKey}`)
        console.log(response)
        this.setState({
            lat: (response.data.results[0].geometry.location.lat),
            lng: (response.data.results[0].geometry.location.lng),
        })
        localStorage.setItem('lat', response.data.results[0].geometry.location.lat)
        localStorage.setItem('lng', response.data.results[0].geometry.location.lng)
        // this.explorerLocation()
        this.convertLocation()
        
    }
    
    convertLocation = async() =>{
        let lat = localStorage.getItem('lat')
        let lng = localStorage.getItem('lng')
        let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.state.apiKey}`)
        this.setState({
            address : [response.data.data],
            readableAddress : (response.data.results[0].formatted_address),
        })
    }

    nearbyRestaurant = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=${this.state.radius}&type=restaurant&open_now=${this.state.openOrClosed}&key=${this.state.apiKey}`)
        this.setState({
            restaurants : [response.data]
        })
        var choice = [response.data.results];
        if ((choice.opening_hours) = true)
            var randomchoice = choice[Math.floor(Math.random()*choice.length)];
            var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
            var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${this.state.apiKey}`)
            var distanceTo = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${this.state.lat}%2C${this.state.lng}&destinations=${anotherchoice.geometry.location.lat}%2C${anotherchoice.geometry.location.lng}&key=${this.state.apiKey}`)
            if (anotherchoice.price_level === this.state.priceLevel);
                this.setState({
                    restaruantPick : anotherchoice,
                    rest_review : place_review,
                    distance : distanceTo.data.rows[0].elements[0].distance.text,
            });
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
        if (setOption == 1)
            localStorage.setItem('radius', 1609);
        if (setOption == 2)
            localStorage.setItem('radius', 3218);
        if (setOption == 3)
            localStorage.setItem('radius', 4828);                
        if (setOption == 4)
            localStorage.setItem('radius', 6437);            
        if (setOption == 5)
            localStorage.setItem('radius', 8046);        
        if (setOption ==='Max')
            localStorage.setItem('radius', 5000);
            
    }

    setStatus = async(setOption)=> {
        if (setOption === "Closed");
            this.setState({
                openOrClosed : false
        })
    }

    setAddress = async(setOption)=> {
        this.setState({
            street : setOption[0],
            city : setOption[1],
            state : setOption[2],
        })
        this.addressUpdate();

    }
    render() {
        return(
            <div className="App">    
            <div className="container">
            <h1>Welcome To Your Next Spontaneous Adventure</h1>
            <br/>
            <h1>Login Or Select If You Would Like To Make A New Account </h1>
                <h1>
                    <div className="row">
                    <EntertainmentModal props={this.state}/>
                    <RestaurantModal func = {this.nearbyRestaurant} restaurantPick ={this.state.restaruantPick} place_review={this.state.rest_review} distance={this.state.distance}/>
                    </div>
                    <FilterModal rad={this.setRadius} status={this.setStatus} price={this.setPriceLevel} ent={this.setEntertainment}/>
                    <ExplorerLoginModal/>
                    <Explorer/>
                    <ExplorerModal  convert={this.addressUpdate} readableAddress ={this.state.readableAddress} setOption={this.setAddress}/>
                    <ExplorerInfo/>
                </h1>
                
               </div>
               </div>
        );
}}
export default App;

//** Old code from when using a function instead of Class.  Will delete when application works as intended **
{/* <div className="row">
Or Continue As A Guest
Or choose to filter with the below options </div>
<div className="row">
Set distance from you in miles
<UserChoice options = {radiusOptions} setOption={this.setRadius}/>
</div>
<div className="row" >
Options in type of Entertainment
<UserChoice options = {entOptions} setOption={this.setEntertainment}/>
</div>
<div className="row">
Set Max Price Level
<UserChoice options = {priceLevel} setOption={this.setPriceLevel}/>
</div>
<div className="row">
Option to Filter by Open/Closed
<UserChoice options = {open} setOption={this.setStatus}/>
</div> */}
                    {/* <EntertainmentModal props={this.state} func = {this.nearbyEntertainment} entertainmentPick ={this.state.entertainmentPick} place_review={this.state.ent_review} distance={this.state.distance}/>  */}
                    {/* <div className="row">
                        See Your Current Location
                    <ExplorerModal func = {this.explorerLocation} readableAddress ={this.state.readableAddress} setOption={this.setAddress}/>
                    </div> */}
                    {/* <AddressModal func={this.setAddress} explorer={Explorer}/> */}


// const entOptions = [
//     {
//         id: 1, 
//         value: 'amusement_park',
//     },
//     {
//         id :2,
//         value: 'bowling_alley',
//     },
//     {
//         id: 3,
//         value:'museum',
//     },
//     {
//         id: 4, 
//         value: 'night_club',
//     },
//     {
//         id: 5, 
//         value:'aquarium',
//     },
//     {
//         id: 6,
//         value: 'casino',
//     },
//     {
//         id: 7, 
//         value: 'tourist_attraction',
//     },
//     {
//         id: 8, 
//         value: 'zoo',
//     }
// ];

// const priceLevel = [
//     {
//         id: 1, 
//         value: 0,
//     },
//     {
//         id :2,
//         value: 1,
//     },
//     {
//         id: 3,
//         value: 2,
//     },
//     {
//         id: 4, 
//         value: 3,
//     },
//     {
//         id: 5, 
//         value: 4,
//     },
// ];

// const radiusOptions = [
//     {
//         id: 1, 
//         value: '1',
//     },
//     {
//         id :2,
//         value: '2',
//     },
//     {
//         id: 3,
//         value:'3',
//     },
//     {
//         id: 4, 
//         value: '4',
//     },
//     {
//         id: 5, 
//         value:'5',
//     },
//     {
//         id: 6,
//         value: 'Max',
//     }
// ];
// const open =[
//     {
//         id: 1,
//         value: 'Open',
//     },
//     {
//         id: 2,
//         value: 'Closed',
//     },
// ];

 // nearbyEntertainment = async() =>{
    //     let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=${this.state.radius}&type=${this.state.entertainmentPick}&open_now=${this.state.openOrClosed}&key=${this.state.anotherKey}`)
    //     this.setState({
    //         entertainments : [response.data]
    //     })
    //     var choice = [response.data.results];
    //     if ((choice.opening_hours) = true && ((choice.types) != "lodging"))
    //         var randomchoice = choice[Math.floor(Math.random()*choice.length)];
    //         var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
    //         var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${this.state.apiKey}`)
    //         var distanceTo = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${this.state.lat}%2C${this.state.lng}&destinations=${anotherchoice.geometry.location.lat}%2C${anotherchoice.geometry.location.lng}&key=${this.state.anotherKey}`)
    //         this.setState({
    //             entertainmentPick : anotherchoice,
    //             ent_review : place_review,
    //             distance : distanceTo.data.rows[0].elements[0].distance.text,
    //         })
    // }