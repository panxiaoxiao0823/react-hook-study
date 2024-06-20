import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../features/counter/counterSlice'


function UseHookReduxDemo() {
  const reduxCount = useSelector((state) => {
    console.log('state.counter==>', state.counter);
    return state.counter.value
  });
  const dispatch = useDispatch()

  return (
    <div>
      count: {reduxCount}
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default UseHookReduxDemo;
