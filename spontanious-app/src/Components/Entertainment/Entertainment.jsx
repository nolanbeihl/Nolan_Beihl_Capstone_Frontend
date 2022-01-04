import React, { useState } from 'react';
// import onClickOutside from 'react-onclickoutside';


function EntertainmentChoice ({ title, items, multiSelect = false}) {
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
            this.state.selection = {item}
            return true;
        }
        return false;
    }
    
    return(
        <div className="entertainment-dropdown">
            <div 
                tabIndex={0}
                className="ed-header" 
                role="button" 
                onKeyPress={() => toggle(!open)} 
                onClick={() => toggle(!open)}
                >
                <div className="ed-header_title">
                    <p className="ed-header_title--bold">{title}</p>
                </div>
                <div className="ed-header_action">
                    <p>{open ? 'Chose One Below' : 'Please Make a Selection'}</p>
                </div>
            </div>
            {open && (
                <ul className="ed-list">
                    {items.map(item => (
                        <ul className="ed-list-item" key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span>{choiceSelected(item) && '         That should be fun!'}</span>
                            </button>
                        </ul>
                    ))}
                </ul>
            )}
            </div>
    );
}

export default EntertainmentChoice;