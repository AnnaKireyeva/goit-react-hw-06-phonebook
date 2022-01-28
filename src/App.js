import './App.css';
import { ToastContainer } from 'react-toastify';
import AddContactForm from './Components/AddContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactsList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from './redux/phonebook-selectors';
export default function App() {
  const contacts = useSelector(getContacts);
  return (
    <div className="App">
      <h1 className="Title">Phonebook</h1>
      <AddContactForm />

      <h2 className="Title">Contacts</h2>
      {contacts.length !== 0 ? (
        <Filter />
      ) : (
        <h3>Your contacts list is empty</h3>
      )}

      <ContactList />
      <ToastContainer autoClose="3000" position="top-right" theme="colored" />
    </div>
  );
}
