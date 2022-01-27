import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import phonebookReducer from './phonebook-reducer';
// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };
// const reducer = (state = initialState, action) => {
//   console.log('Лог экшена в редьюсер:', action);
//   return state;
// };
// const store = createStore(reducer);

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
