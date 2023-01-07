import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { ContactAddForm } from '../ContactsAddForm/ContactAddForm'
import { Filter } from "../Filter/Filter";
import { ContactList } from 'components/ContactList/ContactList';
import { Container, PhonebookHeading, ContactsHeading } from './App.styled';


export function App() {
  const [contacts, setContacts] = useState(() => { return JSON.parse(localStorage.getItem("contacts")) ?? [] })
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    const nameInArray = contacts.map(contact => (
      contact.name
    ))
    if (nameInArray.includes(contact.name)) {
      alert(`${contact.name} is already in contacts `)
    } else {
      setContacts(prevState => [...prevState, contact])
    }
  }

  const filterChange = (event) => {
    setFilter(event.currentTarget.value)
  }

  const getFiltredContacts = () => {
    const filterNormalized = filter.toLowerCase()
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized))
  }

  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId)
    )
  }

  return (
    <Container>
      <div>
        <PhonebookHeading>Phonebook</PhonebookHeading>
        <ContactAddForm onSubmit={addContact} />
        <ContactsHeading>Contacs</ContactsHeading>
        <Filter value={filter} onChange={filterChange} />
        <ContactList contacts={getFiltredContacts()} onDeleteContact={deleteContact} />
      </div>
    </Container>

  );
}
