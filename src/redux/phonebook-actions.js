import actionTypes from './phonebook-types';
import shortid from 'shortid';

const addContact = newContact => ({
  type: actionTypes.ADD,
  payload: {
    id: shortid.generate(),
    name: newContact.name,
    number: newContact.number,
  },
});

const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

const phonebookActions = {
  addContact,
  deleteContact,
  changeFilter,
};

export default phonebookActions;
