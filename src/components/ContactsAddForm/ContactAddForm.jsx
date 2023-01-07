import { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Label, ButtonAddContact } from './ContactAddForm.styled'


export function ContactAddForm({ onSubmit }) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleNmaeChange = event => {
        setName(event.currentTarget.value)
    }

    const handleNumberChange = event => {
        setNumber(event.currentTarget.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        onSubmit(name, number)
        reset()
    }

    const reset = () => {
        setName('')
        setNumber('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label>Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNmaeChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </Label>
            <Label>Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required />
            </Label>
            <ButtonAddContact type='submit'>Add contact</ButtonAddContact>
        </Form>
    )
}

ContactAddForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}