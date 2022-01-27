import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactsItem from '../ContactsItem/ContactsItem';
import phonebookActions from '../../redux/phonebook-actions';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        ></ContactsItem>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   onClick: PropTypes.func,
// };

// const filterContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = state => {
//   const { filter, items } = state.contacts;
//   const normalizedFilter = filter.toLowerCase();

//   const filteredContacts = items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
//   return {
//     contacts: filteredContacts,
//   };
// };

const filterContacts = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allItems.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
// const mapStateToProps = state => {
//   const { filter, items } = state.contacts;
//   const filteredContacts = filterContacts(items, filter);

//   return {
//     contacts: filteredContacts,
//   };
// };
// или
const mapStateToProps = state => ({
  contacts: filterContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
