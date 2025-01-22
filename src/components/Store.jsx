import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  input: '',
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, input: action.payload }; // Corrected to 'input'
    default:
      return state;
  }
};

const store = configureStore({
  reducer: inputReducer,
});

export default store;
