import React , { useState } from 'react';
import Modal from 'react-modal';

function EntertainmentModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)

return ( 
            <div className='EntertainmentModal'>
                <button class="button" onClick={() => setItemIsOpen(true)}>Entertainment </button> 
                <Modal isOpen={itemIsOpen}>
                    <button class="button" onClick={() => props.func()}>Find New Option</button>
                    <div>
                        {!props.place_review.data ? null:
                            <><div class="main-text">{`Name:  ${props.entertainmentPick.name}`}</div>
                            <div class="main-text">{`Overall Rating:  ${props.entertainmentPick.rating}`}</div>
                            <div class="main-text">{`Price Level:  ${props.entertainmentPick.price_level}`}</div>
                            <div class="main-text">{`Entertainment Address:  ${props.entertainmentPick.vicinity}`}</div>
                            <div class="main-text">{`Distance to Location: ${props.distance}`}</div>
                            <div class="main-text">{`Reviews: `}</div>
                            <div>{props.place_review.data.result.reviews[0].author_name}   Rated It:  {props.place_review.data.result.reviews[0].rating}</div>
                            <div>{props.place_review.data.result.reviews[0].text}</div>
                            <br/>
                            <div>{props.place_review.data.result.reviews[1].author_name}  Rated It:  {props.place_review.data.result.reviews[1].rating}</div>
                            <div>{props.place_review.data.result.reviews[1].text}</div>
                            <br/>
                            <div>{props.place_review.data.result.reviews[2].author_name}  Rated It:  {props.place_review.data.result.reviews[2].rating}</div>
                            <div>{props.place_review.data.result.reviews[2].text}</div>
                            <br/>
                            <div>{props.place_review.data.result.reviews[3].author_name}  Rated It:  {props.place_review.data.result.reviews[3].rating}</div>
                            <div>{props.place_review.data.result.reviews[3].text}</div></>
                        }
                        <button class="button" class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                                 
                    </div>
                </Modal>
            </div>
    );
}
    
export default EntertainmentModal;
