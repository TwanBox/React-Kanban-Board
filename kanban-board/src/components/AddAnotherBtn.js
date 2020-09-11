import React, { useState } from 'react';
import { Icon } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';
import './AddAnotherBtn.css';

function AddAnotherBtn({ list, dispatch, listID }) {
    const [formOpen, setFormOpen] = useState(false);
    const [formText, setFormText] = useState('');

    const displayForm = () => {
        const placeholderText = list ? 'Enter list title..' : 'Enter a title for this card..';
        const addbuttonText = list ? 'Add List' : 'Add Card';

        const handleAddList = () => {
            if (formText) {
                dispatch(addList(formText));
                setFormText('');
                setFormOpen(false);
            }

            return;
        }

        const handleFormClose = () => {
            setFormText('');
            setFormOpen(false);
        }

        const handleAddCard = () => {
            if (formText) {
                dispatch(addCard(listID, formText));
                setFormText('');
                setFormOpen(false);
            }

            return;
        }


        return (
            <form className="addAnotherBtn-form">
                <textarea 
                    className={`addAnotherBtn-input ${list ? 'addAnotherBtn-inputList' : ''}`}
                    type="text" placeholder={placeholderText}
                    value={formText}
                    onChange={e => setFormText(e.target.value)}
                >
                </textarea>
                <div class="addAnotherBtn-btnGroup">
                    <button className="addAnotherBtn-addBtn" type="button" onClick={() => list ? handleAddList() : handleAddCard()}>{addbuttonText}</button>
                    <button className="addAnotherBtn-closeBtn" onClick={() => handleFormClose()}><ClearIcon /></button>
                </div>
            </form>
        )
    }

    const buttonText = list ? 'Add another list' : 'Add another card';

    return (
        <>
            {!formOpen

            ? <div 
                className={list ? 'addAnotherBtn-list' : 'addAnotherBtn-card'}
                onClick={() => setFormOpen(!formOpen)}
            >
                <Icon className="addAnotherBtn-plus">add</Icon>
                <p className={list ? 'addAnotherBtn-listText' : 'addAnotherBtn-cardText'}>{buttonText}</p>
            </div>
            : ''}
            
            <div>
                { formOpen ? displayForm() : '' }
            </div>
        </>
    )
}

export default connect() (AddAnotherBtn);
