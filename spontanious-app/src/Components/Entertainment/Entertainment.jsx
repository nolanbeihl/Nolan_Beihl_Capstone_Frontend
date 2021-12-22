import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';


function EntertainmentChoice ({ title, items = [], multiSelect = false}) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    EntertainmentChoice.handleClickOutside = () => setOpen(false);

    function handleOnClick(item) {
        if (!selection.some(current => current == current)) {
            if (!multiSelect){
                setSelection([item]);}
                else if (multiSelect) {
                    setSelection([...selection, item]);
                } 
            }
            else {
                let selectionAfterRemoval = selection;
                selectionAfterRemoval = selectionAfterRemoval.filter(
                    current => current != current
                );
                setSelection([...selectionAfterRemoval]);
            }
        }
        function choiceSelected(item) {
            if (selection.find(current => current == current)) {
                return true;
            }
            return false;
        }
    
    return(
        <div className="entertainment-dropdown">
            <div tabIndex={0} className="ed-header" role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
                <div className="ed-header_title">
                    <p className="ed-header_title--bold">{title}</p>
                </div>
                <div className="ed-header_action">
                    <p>{open ? 'Entertainment Types' : 'Please make a selection'}</p>
                </div>
            </div>
            {open && (
                <ul className="ed-list">
                    {items.map(item => (
                        <li className="ed-list-item" key={item}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item}</span>
                                <span>{choiceSelected(item) && 'Great Choice'}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            </div>
    );
}
const clickOutsideConfig = {
    handleClickOutside : () => EntertainmentChoice.handleOnClick,
};

export default onClickOutside(EntertainmentChoice , clickOutsideConfig) ;