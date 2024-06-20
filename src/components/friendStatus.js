import React, { useState, useEffect, useCallback } from 'react';

function FriendStatus() {
  const [count, setCount] = useState(0);
  const [config, setConfig] = useState({});

  console.log('config==>', config);

  useEffect(()=>{
    // setCount(count + 1)
    console.log('useEffect==>', count);
  }, [])
  
  return <div>
    <button onClick={() => { setCount(count + 1) }}>点击count + 1</button>
    <button onClick={() => { setConfig({c: count}) }}>修改config</button>
    <br></br>
    count为 {count}
    <br></br>
  </div>
}

export default FriendStatus;