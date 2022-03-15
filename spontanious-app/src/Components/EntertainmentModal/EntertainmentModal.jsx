import React , { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
class EntertainmentModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            entertainmentPick : [],
            ent_review : '0',
            distance: 0,
            
            openModal : false,
        }; 
        this.nearbyEntertainment = this.nearbyEntertainment.bind(this);
    }
        
    //     this.statusSubmit = this.statusSubmit.bind(this);
    //     this.priceSubmit = this.priceSubmit.bind(this);
    //     this.radiusSubmit = this.radiusSubmit.bind(this);
    //     this.statusSubmit = this.statusSubmit.bind(this);
    // }
    
    // statusSubmit  (event) {
    //     this.setState({status: event.target.value})
    //     this.props.status(event.target.value);
    //     event.preventDefault();
    // }
 
    onClickButton = e =>{
       e.preventDefault()
        this.setState({openModal : true})
    }
    onCloseModal = ()=>{
        this.setState({openModal : false})
    }
    nearbyEntertainment = async() =>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.props.lat}%2C${this.props.props.lng}&radius=${this.props.props.radius}&type=${this.props.props.entertainmentPick}&open_now=${this.props.props.openOrClosed}&key=${this.props.props.apiKey}`)
        this.setState({
            entertainments : [response.data]
        })
        var choice = [response.data.results];
        if ((choice.opening_hours) = true && ((choice.types) != "lodging"))
            var randomchoice = choice[Math.floor(Math.random()*choice.length)];
            var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
            var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${this.props.props.apiKey}`)
            var distanceTo = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${this.props.props.lat}%2C${this.props.props.lng}&destinations=${anotherchoice.geometry.location.lat}%2C${anotherchoice.geometry.location.lng}&key=${this.props.props.apiKey}`)
            this.setState({
                entertainmentPick : anotherchoice,
                ent_review : place_review,
                distance : distanceTo.data.rows[0].elements[0].distance.text,
            })
            // localStorage.setItem('entertainmentPick', JSON.stringify(anotherchoice));
            // localStorage.setItem('ent_review', JSON.stringify(place_review));
            // localStorage.setItem('distance', JSON.stringify(distanceTo.data.rows[0].elements[0].distance.text));
            // let test = JSON.parse(localStorage.getItem('entertainmentPick'));
            // console.log(test);
            // console.log('did it work?');
        }
    
render(){
    return ( 
            
            <div className='EntertainmentModal'>
                <button class="button" onClick={this.onClickButton}>Entertainment </button> 
                <Modal
                 className="Modal"
                 hideBackDrop
                 isOpen={this.state.openModal}
                 onClose={this.onCloseModal}
                 aria-labelledby="child-modal-title"
                 aria-describedby="child-modal-description"
                 ariaHideApp={false}
                 >
                     
                    <button class="button" onClick={this.nearbyEntertainment}>Click For Option</button>
                    <button class="button" onClick={this.nearbyEntertainment}>Refresh Option</button>
                  
                        {!this.state.ent_review.data ? null:
                            <><div class="main-text">{`Name:  ${this.state.entertainmentPick.name}`}</div>
                            <div class="main-text">{`Overall Rating:  ${this.state.entertainmentPick.rating}`}</div>
                            <div class="main-text">{`Price Level:  ${this.state.entertainmentPick.price_level}`}</div>
                            <div class="main-text">{`Entertainment Address:  ${this.state.entertainmentPick.vicinity}`}</div>
                            <div class="main-text">{`Distance to Location: ${this.state.distance}`}</div>
                            <div class="main-text">{`Reviews: `}</div>
                            <div class="main-text">{this.state.ent_review.data.result.reviews[0].author_name}   Rated It:  {this.state.ent_review.data.result.reviews[0].rating}</div>
                            <div class="secondary-text">{this.state.ent_review.data.result.reviews[0].text}</div>
                            <br/>
                            <div class="main-text">{this.state.ent_review.data.result.reviews[1].author_name}  Rated It:  {this.state.ent_review.data.result.reviews[1].rating}</div>
                            <div class="secondary-text">{this.state.ent_review.data.result.reviews[1].text}</div>
                            <br/>
                            <div class="main-text">{this.state.ent_review.data.result.reviews[2].author_name}  Rated It:  {this.state.ent_review.data.result.reviews[2].rating}</div>
                            <div class="secondary-text">{this.state.ent_review.data.result.reviews[2].text}</div>
                            <br/>
                            <div class="main-text">{this.state.ent_review.data.result.reviews[3].author_name}  Rated It:  {this.state.ent_review.data.result.reviews[3].rating}</div>
                            <div class="secondary-text">{this.state.ent_review.data.result.reviews[3].text}</div></>
                        }
                    <button class="button" onClick={this.onCloseModal}>Back To Menu</button>   
                    
                </Modal>
            </div>
        );
    }
}
export default EntertainmentModal;


// function EntertainmentModal (props){
//     const [itemIsOpen, setItemIsOpen] = useState(false)
//     const ent_pick = []
//     const ent_review = []
//     const distance = []
//     const refresh = () =>{
//         nearbyEntertainment();

//     }

//     const nearbyEntertainment = async() =>{
//         let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${props.props.lat}%2C${props.props.lng}&radius=${props.props.radius}&type=${props.props.entertainmentPick}&open_now=${props.props.openOrClosed}&key=${props.props.apiKey}`)
//         // this.setState({
//         //     entertainments : [response.data]
//         // })
//         var choice = [response.data.results];
//         if ((choice.opening_hours) = true && ((choice.types) != "lodging"))
//             var randomchoice = choice[Math.floor(Math.random()*choice.length)];
//             var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
//             var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${props.props.apiKey}`)
//             var distanceTo = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${props.props.lat}%2C${props.props.lng}&destinations=${anotherchoice.geometry.location.lat}%2C${anotherchoice.geometry.location.lng}&key=${props.props.apiKey}`)
//             localStorage.setItem('entertainmentPick', JSON.stringify(anotherchoice));
//             localStorage.setItem('ent_review', JSON.stringify(place_review));
//             localStorage.setItem('distance', JSON.stringify(distanceTo.data.rows[0].elements[0].distance.text));
//             let test = JSON.parse(localStorage.getItem('entertainmentPick'));
//             console.log(test);
//             console.log('did it work?');
//         }
    
//     // const pick = JSON.parse(localStorage.getItem(entertainmentPick));
//     // const ent_review = JSON.parse(localStorage.getItem(ent_review));
//     // const distance = JSON.parse(localStorage.getItem(distance));

// return ( 
            
//             <div className='EntertainmentModal'>
//                 <button class="button" onClick={() => setItemIsOpen(true)}>Entertainment </button> 
//                 <Modal isOpen={itemIsOpen} className="Modal" ariaHideApp={false}>
//                     <button class="button" onClick={() => nearbyEntertainment()}>Click For Option</button>
//                     <button class="button" onClick={() => refresh()}>Refresh Option</button>
//                     <div>
//                         {!ent_review.data ? null:
//                             <><div class="main-text">{`Name:  ${pick.name}`}</div>
//                             <div class="main-text">{`Overall Rating:  ${pick.rating}`}</div>
//                             <div class="main-text">{`Price Level:  ${pick.price_level}`}</div>
//                             <div class="main-text">{`Entertainment Address:  ${pick.vicinity}`}</div>
//                             <div class="main-text">{`Distance to Location: ${distance}`}</div>
//                             <div class="main-text">{`Reviews: `}</div>
//                             <div class="main-text">{ent_review.data.result.reviews[0].author_name}   Rated It:  {ent_review.data.result.reviews[0].rating}</div>
//                             <div class="secondary-text">{ent_review.data.result.reviews[0].text}</div>
//                             <br/>
//                             <div class="main-text">{ent_review.data.result.reviews[1].author_name}  Rated It:  {ent_review.data.result.reviews[1].rating}</div>
//                             <div class="secondary-text">{ent_review.data.result.reviews[1].text}</div>
//                             <br/>
//                             <div class="main-text">{ent_review.data.result.reviews[2].author_name}  Rated It:  {ent_review.data.result.reviews[2].rating}</div>
//                             <div class="secondary-text">{ent_review.data.result.reviews[2].text}</div>
//                             <br/>
//                             <div class="main-text">{ent_review.data.result.reviews[3].author_name}  Rated It:  {ent_review.data.result.reviews[3].rating}</div>
//                             <div class="secondary-text">{ent_review.data.result.reviews[3].text}</div></>
//                         }
//                         <button class="button" class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                                 
//                     </div>
//                 </Modal>
//             </div>
//     );
// }
    
// export default EntertainmentModal;


