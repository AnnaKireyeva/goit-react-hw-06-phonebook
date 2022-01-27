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

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'contacts/changeFilter':
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
