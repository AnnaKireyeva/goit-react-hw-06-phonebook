// import { useEffect, useState } from 'react';
// import shortid from 'shortid';
import './App.css';

import AddContactForm from './Components/AddContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactsList/ContactList';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name: newContact.name,
  //     number: newContact.number,
  //   };

  //   // if (
  //   //   contacts.find(
  //   //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
  //   //   )
  //   // ) {
  //   //   alert(newContact.name + ' is already in contacts');
  //   //   return;
  //   // }

  //   setContacts([contact, ...contacts]);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const filterContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  return (
    <div className="App">
      <h1 className="Title">Phonebook</h1>
      {/* <AddContactForm onSubmit={addContact} /> */}
      <AddContactForm />

      <h2 className="Title">Contacts</h2>
      <Filter
      // value={filter}
      // onChangeFilter={changeFilter}
      />

      <ContactList
      // contacts={filterContacts()}
      // onDeleteContact={deleteContact}
      />
    </div>
  );
}
