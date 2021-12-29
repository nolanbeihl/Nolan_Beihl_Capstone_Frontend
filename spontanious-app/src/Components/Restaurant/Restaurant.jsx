import React, { useState } from 'react';

function RestaurantChoice ({ title, items, multiSelect = false}) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
   

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiSelect){
                setSelection([item]);}
                else if (multiSelect) {
                setSelection([...selection, item]);
                } 
            }
            else {
                let selectionAfterRemoval = selection;
                selectionAfterRemoval = selectionAfterRemoval.filter(
                    current => current.id !== item.id
                );
                setSelection([...selectionAfterRemoval]);
            }
        }
    function choiceSelected(item) {
        if (selection.find(current => current.id === item.id)) {
            return true;
        }
        return false;
    }
    
    return(
        <div className="restaurant-dropdown">
            <div 
                tabIndex={0}
                className="rt-header" 
                role="button" 
                onKeyPress={() => toggle(!open)} 
                onClick={() => toggle(!open)}
                >
                <div className="rt-header_title">
                    <p className="rt-header_title--bold">{title}</p>
                </div>
                <div className="rt-header_action">
                    <p>{open ? 'Chose One Below' : 'Please Make a Selection'}</p>
                </div>
            </div>
            {open && (
                <ul className="rt-list">
                    {items.map(item => (
                        <ul className="rt-list-item" key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.name}</span>
                                <span>{choiceSelected(item) &&'       I will keep that in mind'}</span>
                            </button>
                        </ul>
                    ))}
                </ul>
            )}
            </div>
    );
}


export default RestaurantChoice;