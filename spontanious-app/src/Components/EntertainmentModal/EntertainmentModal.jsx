import React , { useState } from 'react';
import Modal from 'react-modal';
import App from '../../App';
import EntertainmentChoice from '../Entertainment/Entertainment';


function EntertainmentModal (props){
    const [itemIsOpen, setItemIsOpen] = useState(false)
    const [selection, setSelection] = useState([]);



  

return ( 
            <div className='EntertainmentModal'>
                <button onClick={() => setItemIsOpen(true)}>Entertainment </button> 
                <Modal isOpen={itemIsOpen}>
                    <button onClick={() => props.func()}>Find New Option</button>
                    <div>
                        {!props.place_review.data ? null:
                            <><div>{`Name:  ${props.entertainmentPick.name}`}</div>
                            <div>{`Overall Rating:  ${props.entertainmentPick.rating}`}</div>
                            <div>{`Price Level:  ${props.entertainmentPick.price_level}`}</div>
                            <div>{`Entertainment Address:  ${props.entertainmentPick.vicinity}`}</div>
                            <div>{`Distance to Location: ${props.entertainmentPick}`}</div>
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
                        <button onClick={() => setItemIsOpen(false)}>Back To Menu</button>
                        <button onClick={() => setSelection(props.entertainmentPick)}>Save Location</button>          
                    </div>
                </Modal>
            </div>
    );
}
    
export default EntertainmentModal;
