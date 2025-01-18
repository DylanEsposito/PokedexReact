//import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../features/counter/counterSlice'

/*export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})*/

import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import pokemonReducer from '../features/team/teamReducer';

const store = createStore(pokemonReducer);

export default store;