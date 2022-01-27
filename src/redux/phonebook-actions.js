import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', newContact => {
  return {
    payload: {
      id: shortid.generate(),
      name: newContact.name,
      number: newContact.number,
    },
  };
});

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

// const addContact = newContact => ({
//   type: actionTypes.ADD,
//   payload: {
//     id: shortid.generate(),
//     name: newContact.name,
//     number: newContact.number,
//   },
// });

// const deleteContact = contactId => ({
//   type: actionTypes.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });

const phonebookActions = {
  addContact,
  deleteContact,
  changeFilter,
};

export default phonebookActions;
