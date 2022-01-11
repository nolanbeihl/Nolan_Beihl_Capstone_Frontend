import React, { useState } from 'react';

function UserChoice ({ stateFunction, title, items, multiSelect = false}) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiSelect){
                setSelection([item.value]);}
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
            stateFunction(item.value)
            return item.value;
        }
        return false;
    }
    
    return(
        <div className="choice-dropdown">
            <div 
                tabIndex={0}
                className="choice-header" 
                role="button" 
                onKeyPress={() => toggle(!open)} 
                onClick={() => toggle(!open)}
                >
                <div className="choice-header_title">
                    <p className="choice-header_title--bold">{title}</p>
                </div>
                <div className="choice-header_action">
                    <p>{open ? 'Chose One Below' : 'Click Here To See The Options'}</p>
                </div>
            </div>
            {open && (
                <ul className="choice-list">
                    {items.map(item => (
                        <ul className="choice-list-item" key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span>{choiceSelected(item.value) && '         Thank You!'}</span>
                            
                            </button>
                        </ul>
                    ))}
                </ul>
            )}
            </div>
    );
}

export default UserChoice;