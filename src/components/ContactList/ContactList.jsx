import React from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem'
import PropTypes from 'prop-types'
import { ContsctList, } from './ContactList.styled'

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContsctList>
            {contacts.map(({ id, name, number, }) => (
                <ContactListItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
            ))}
        </ContsctList>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}