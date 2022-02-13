import React , { useState } from 'react';
import Modal from 'react-modal';

function RestaurantModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)

return ( 
            <div >
                <button class="button" onClick={() => setItemIsOpen(true)}>Restaurant </button> 
                <Modal  isOpen={itemIsOpen} className="Modal" ariaHideApp={false}>
                    <button class="button" onClick={() => props.func()}>Click For Option</button>
                    <div>
                        {!props.place_review.data ? null:
                            <>
                            <div class="main-text">{`Name:  ${props.restaurantPick.name}`}</div>
                            <div class="main-text">{`Overall Rating:  ${props.restaurantPick.rating}`}</div>
                            <div class="main-text">{`Price Level:  ${props.restaurantPick.price_level}`}</div>
                            <div class="main-text">{`Restaurant Address:  ${props.restaurantPick.vicinity}`}</div>
                            <div class="main-text">{`Distance From You: ${props.distance}`}</div>
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
                        <button class="button" onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                    </div>
                </Modal>
            </div>
    );
}
    
export default RestaurantModal;