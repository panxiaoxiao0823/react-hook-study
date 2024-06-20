import React, { useReducer, useEffect, useState } from "react";

const initState = {
  count: 0,
};
const reducers = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducers, initState); // useReducer第一个参数是reducer，第二个参数是初始化state值

  return (
    <div>
      count: {state.count}
      <br />

      <button onClick={() => dispatch({type: 'increment'})}>increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
    </div>
  );
}

export default UseReducerDemo;
