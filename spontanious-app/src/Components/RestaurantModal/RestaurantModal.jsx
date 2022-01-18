import React , { useState } from 'react';
import Modal from 'react-modal';

function RestaurantModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)

return ( 
            <div className='RestaurantModal'>
                <button class="button" onClick={() => setItemIsOpen(true)}>Restaurant </button> 
                <Modal isOpen={itemIsOpen}>
                    <button class="button" onClick={() => props.func()}>Find Another Option</button>
                    <div>
                        {!props.place_review.data ? null:
                            <>
                            <div>{`Name:  ${props.restaurantPick.name}`}</div>
                            <div>{`Overall Rating:  ${props.restaurantPick.rating}`}</div>
                            <div>{`Price Level:  ${props.restaurantPick.price_level}`}</div>
                            <div>{`Restaurant Address:  ${props.restaurantPick.vicinity}`}</div>
                            <div>{`Distance From You: ${props.distance}`}</div>
                            <div>{`Reviews: `}</div>
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