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

const phonebookActions = {
  addContact,
  deleteContact,
  changeFilter,
};

export default phonebookActions;
