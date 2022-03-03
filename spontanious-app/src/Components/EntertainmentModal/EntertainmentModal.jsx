import React , { useState } from 'react';
import Modal from 'react-modal';
import App from '../../App';
import axios from 'axios';

function EntertainmentModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)
    const pick = []
    const ent_review = []
    const distance = []
    const refresh = () =>{
        nearbyEntertainment();

    }

    const nearbyEntertainment = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${props.props.lat}%2C${props.props.lng}&radius=${props.props.radius}&type=${props.props.entertainmentPick}&open_now=${props.props.openOrClosed}&key=${props.props.apiKey}`)
        // this.setState({
        //     entertainments : [response.data]
        // })
        var choice = [response.data.results];
        if ((choice.opening_hours) = true && ((choice.types) != "lodging"))
            var randomchoice = choice[Math.floor(Math.random()*choice.length)];
            var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
            var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${props.props.apiKey}`)
            var distanceTo = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${props.props.lat}%2C${props.props.lng}&destinations=${anotherchoice.geometry.location.lat}%2C${anotherchoice.geometry.location.lng}&key=${props.props.apiKey}`)
            localStorage.setItem('entertainmentPick', [anotherchoice]);
            localStorage.setItem('ent_review', [place_review]);
            localStorage.setItem('distance', [distanceTo.data.rows[0].elements[0].distance.text]);
        }
    
    // const pick = localStorage.getItem(entertainmentPick);
    // const ent_review = localStorage.getItem(ent_review);
    // const distance = localStorage.getItem(distance);

return ( 
            
            <div className='EntertainmentModal'>
                <button class="button" onClick={() => setItemIsOpen(true)}>Entertainment </button> 
                <Modal isOpen={itemIsOpen} className="Modal" ariaHideApp={false}>
                    <button class="button" onClick={() => nearbyEntertainment()}>Click For Option</button>
                    <button class="button" onClick={() => refresh()}>Refresh Option</button>
                    <div>
                        {!ent_review.data ? null:
                            <><div class="main-text">{`Name:  ${pick.name}`}</div>
                            <div class="main-text">{`Overall Rating:  ${pick.rating}`}</div>
                            <div class="main-text">{`Price Level:  ${pick.price_level}`}</div>
                            <div class="main-text">{`Entertainment Address:  ${pick.vicinity}`}</div>
                            <div class="main-text">{`Distance to Location: ${distance}`}</div>
                            <div class="main-text">{`Reviews: `}</div>
                            <div class="main-text">{ent_review.data.result.reviews[0].author_name}   Rated It:  {ent_review.data.result.reviews[0].rating}</div>
                            <div class="secondary-text">{ent_review.data.result.reviews[0].text}</div>
                            <br/>
                            <div class="main-text">{ent_review.data.result.reviews[1].author_name}  Rated It:  {ent_review.data.result.reviews[1].rating}</div>
                            <div class="secondary-text">{ent_review.data.result.reviews[1].text}</div>
                            <br/>
                            <div class="main-text">{ent_review.data.result.reviews[2].author_name}  Rated It:  {ent_review.data.result.reviews[2].rating}</div>
                            <div class="secondary-text">{ent_review.data.result.reviews[2].text}</div>
                            <br/>
                            <div class="main-text">{ent_review.data.result.reviews[3].author_name}  Rated It:  {ent_review.data.result.reviews[3].rating}</div>
                            <div class="secondary-text">{ent_review.data.result.reviews[3].text}</div></>
                        }
                        <button class="button" class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                                 
                    </div>
                </Modal>
            </div>
    );
}
    
export default EntertainmentModal;


