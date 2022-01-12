import React, { useState } from 'react';


class UserChoice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : "",
        }; 

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        // this.props.nearbyRestaurant();
        alert('You have chosen the following: ' + this.state.value);
        event.preventDfault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label className="choice-list">
                    {this.props.options.map(item => (
                        <label className="choice-list-item"> 
                        <select value={(this.props.options.value)} onChange={this.handleChange} key={this.props.options.id}>
                            <option value={this.props.options.value}>{this.props.options.value}</option>
                        </select>
                        </label>
                    ))}
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