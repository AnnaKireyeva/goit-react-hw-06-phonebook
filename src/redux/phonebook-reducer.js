import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import phonebookActions from './phonebook-actions';

const items = createReducer([], {
  [phonebookActions.addContact]: (state, { payload }) => [...state, payload],
  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
