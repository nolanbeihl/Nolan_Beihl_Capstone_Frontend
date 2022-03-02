import React , { useState } from 'react';
import Modal from 'react-modal';
import App from '../../App';
import axios from 'axios';

function EntertainmentModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)

    const refresh = () =>{
        nearbyEntertainment();

    }

    const nearbyEntertainment = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${App.state.lat}%2C${App.state.lng}&radius=${App.state.radius}&type=${App.state.entertainmentPick}&open_now=${App.state.openOrClosed}&key=${App.state.anotherKey}`)
        this.setState({
            entertainments : [response.data]
        })
        var choice = [response.data.results];
        if ((choice.opening_hours) = true && ((choice.types) != "lodging"))
            var randomchoice = choice[Math.floor(Math.random()*choice.length)];
            var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
            var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${App.state.apiKey}`)
            var distanceTo = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${App.state.lat}%2C${App.state.lng}&destinations=${anotherchoice.geometry.location.lat}%2C${anotherchoice.geometry.location.lng}&key=${App.state.anotherKey}`)
            this.setState({
                entertainmentPick : anotherchoice,
                ent_review : place_review,
                distance : distanceTo.data.rows[0].elements[0].distance.text,
            })
    }
   
    const setEntertainment = (setOption)=>{
        this.setState({
            entertainmentPick : setOption,
        })  
    }

return ( 
            <div className='EntertainmentModal'>
                <button class="button" onClick={() => setItemIsOpen(true)}>Entertainment </button> 
                <Modal isOpen={itemIsOpen} className="Modal" ariaHideApp={false}>
                    <button class="button" onClick={() => nearbyEntertainment()}>Click For Option</button>
                    <button class="button" onClick={() => refresh()}>Refresh Option</button>
                    <div>
                        {!props.place_review.data ? null:
                            <><div class="main-text">{`Name:  ${props.entertainmentPick.name}`}</div>
                            <div class="main-text">{`Overall Rating:  ${props.entertainmentPick.rating}`}</div>
                            <div class="main-text">{`Price Level:  ${props.entertainmentPick.price_level}`}</div>
                            <div class="main-text">{`Entertainment Address:  ${props.entertainmentPick.vicinity}`}</div>
                            <div class="main-text">{`Distance to Location: ${props.distance}`}</div>
                            <div class="main-text">{`Reviews: `}</div>
                            <div class="main-text">{props.place_review.data.result.reviews[0].author_name}   Rated It:  {props.place_review.data.result.reviews[0].rating}</div>
                            <div class="secondary-text">{props.place_review.data.result.reviews[0].text}</div>
                            <br/>
                            <div class="main-text">{props.place_review.data.result.reviews[1].author_name}  Rated It:  {props.place_review.data.result.reviews[1].rating}</div>
                            <div class="secondary-text">{props.place_review.data.result.reviews[1].text}</div>
                            <br/>
                            <div class="main-text">{props.place_review.data.result.reviews[2].author_name}  Rated It:  {props.place_review.data.result.reviews[2].rating}</div>
                            <div class="secondary-text">{props.place_review.data.result.reviews[2].text}</div>
                            <br/>
                            <div class="main-text">{props.place_review.data.result.reviews[3].author_name}  Rated It:  {props.place_review.data.result.reviews[3].rating}</div>
                            <div class="secondary-text">{props.place_review.data.result.reviews[3].text}</div></>
                        }
                        <button class="button" class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                                 
                    </div>
                </Modal>
            </div>
    );
}
    
export default EntertainmentModal;


