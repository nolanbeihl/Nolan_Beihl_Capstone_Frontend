import React from 'react';
import axios from 'axios';

class UserChoice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : "1",
            restaurants : [],
            restaurantPick : [],

        }; 

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit = async(event)=>{
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&price_level=${this.state.value}&type=restaurant&key=${this.state.anotherKey}`)
        this.setState({
            restaurants : [response.data]
        })
        var choice = [response.data.results];
        if ((choice.opening_hours) = true)
            var randomchoice = choice[Math.floor(Math.random()*choice.length)];
            var anotherchoice = randomchoice[Math.floor(Math.random()*randomchoice.length)];
            var place_review = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${anotherchoice.place_id}&fields=review&key=${this.state.apiKey}`)
            this.setState({
                restaruantPick : anotherchoice,
                rest_review : place_review
            })
        event.preventDfault();
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick the price level:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="0">$</option>
                        <option value="1">$$</option>
                        <option value="2">$$$</option>
                        <option value="3">$$$$</option>
                        <option value="4">$$$$$</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
        }
}
export default UserChoice;




// function UserChoice ({ stateFunction, title, items, multiSelect = false}) {
//     const [open, setOpen] = useState(false);
//     const [selection, setSelection] = useState([]);
//     const toggle = () => setOpen(!open);

//     function handleOnClick(item) {
//         if (!selection.some(current => current.id === item.id)) {
//             if (!multiSelect){
//                 setSelection([item.value]);}
//                 else if (multiSelect) {
//                 setSelection([...selection, item]);
//                 } 
//             }
//             else {
//                 let selectionAfterRemoval = selection;
//                 selectionAfterRemoval = selectionAfterRemoval.filter(
//                     current => current.id !== item.id
//                 );
//                 setSelection([...selectionAfterRemoval]);
//             }
//         }
//     function choiceSelected(item) {
//         if (selection.find(current => current.id === item.id)) {
//             stateFunction(item.value)
//             return item.value;
//         }
//         return false;
//     }
    
//     return(
//         <div className="choice-dropdown">
//             <div 
//                 tabIndex={0}
//                 className="choice-header" 
//                 role="button" 
//                 onKeyPress={() => toggle(!open)} 
//                 onClick={() => toggle(!open)}
//                 >
//                 <div className="choice-header_title">
//                     <p className="choice-header_title--bold">{title}</p>
//                 </div>
//                 <div className="choice-header_action">
//                     <p>{open ? 'Chose One Below' : 'Click Here To See The Options'}</p>
//                 </div>
//             </div>
//             {open && (
//                 <ul className="choice-list">
//                     {items.map(item => (
//                         <ul className="choice-list-item" key={item.id}>
//                             <button type="button" onClick={() => handleOnClick(item)}>
//                                 <span>{item.value}</span>
//                                 <span>{choiceSelected(item.value) && '         Thank You!'}</span>
                            
//                             </button>
//                         </ul>
//                     ))}
//                 </ul>
//             )}
//             </div>
//     );
// }

// export default UserChoice;