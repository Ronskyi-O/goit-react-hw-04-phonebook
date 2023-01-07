import React from "react";
import PropTypes from 'prop-types'
import { ContactItem, ContactItemInfo, ContactItemButton } from './ContactListItem.styled'

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <ContactItem>
            <ContactItemInfo>{name}: {number}</ContactItemInfo>
            <ContactItemButton onClick={() => onDeleteContact(id)}>Delete</ContactItemButton>
        </ContactItem>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}