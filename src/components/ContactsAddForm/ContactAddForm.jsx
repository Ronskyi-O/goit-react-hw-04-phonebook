import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Label, ButtonAddContact } from './ContactAddForm.styled'


export class ContactAddForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = (event) => {
        const { name, value } = event.currentTarget
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        const { name, number } = this.state

        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                </Label>
                <Label>Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </Label>
                <ButtonAddContact type='submit'>Add contact</ButtonAddContact>
            </Form>
        )
    }
}

ContactAddForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}