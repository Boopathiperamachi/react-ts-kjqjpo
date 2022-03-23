import * as redux from 'redux';
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
export const ADD_ELEMENT = 'push';
export const DELETE_ELEMENT = 'pop';
const initialState = {
  count: 0,
};
const countReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};
const testReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_ELEMENT: {
      const data = [...state];
      console.log('aaaaaaaaa', action.value);
      data.push(action.value);
      console.log('bbbbbbb', data);
      return [...data];
    }
    case DELETE_ELEMENT: {
      const data = [...state];
      data.pop();
      return [...data];
    }
    default: {
      return state;
    }
  }
};
const rootReducer = redux.combineReducers({
  counter: countReducer,
  tester: testReducer,
});
const store = redux.createStore(rootReducer);
export default store;
