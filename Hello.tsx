import React from 'react';
import { connect } from 'react-redux';
import {
  ADD_ELEMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  DELETE_ELEMENT,
} from './store';
let Hello = (props) => {
  console.log(props.tester);
  return (
    <div>
      <button onClick={props.update}>INC</button>
      <button onClick={props.update}>DEC</button>PUSH POP{props.test.length}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { count: state.counter.count, test: state.tester };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: COUNTER_INCREMENT }),
    decrement: () => dispatch({ type: COUNTER_DECREMENT }),
    update: () => dispatch({ type: ADD_ELEMENT, value: Math.random() }),
    remove: () => dispatch({ type: DELETE_ELEMENT }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
