import React, { useState, memo, useMemo, useCallback } from "react";

// 1. 使用 memo 将子组件包裹起来
const Child = memo(({ userInfo, onChange }) => {
  console.log("Child更新", userInfo);

  return (
    <div>
      child component
      <p>name is {userInfo && userInfo.name}</p>
      <p>age is {userInfo && userInfo.age}</p>
      <input onChange={onChange}></input>
    </div>
  );
});

function App() {
  console.log("App更新");

  const [count, setCount] = useState(0);
  const [name, setName] = useState("张三");
  const [priceObj, setPrice] = useState({price: 100});

  // 2. 使用 useMemo 缓存数据
  // 第二个参数是依赖数组，和 useEffecct第二个参数用法相同
  const userInfo = useMemo(() => {
    return {
      name,
      age: 28,
    };
  }, [name]);

  // 3. 使用 useCallback 缓存函数
  // 第二个参数是依赖数组，和 useEffecct第二个参数用法相同，这里只用[]就行，初始化缓存一次，后续无需更新
  // 注意：如果有onChange函数props但是却没有用useCallback，那么useMemo缓存数据进行性能优化就会失效，每次父组件更新子组件都会更新，这两个得搭配使用
  const onChange = useCallback(e => {
    console.log('触发onChangr函数', e.target.value);
  }, [])

  return (
    <div>
      <p>count: {count} ; name: {name}</p>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <button onClick={() => setName(name + '1')}>change name</button>
      <button onClick={() => setPrice({price: priceObj.price - 1})}>change price</button>
      <br></br>
      {/* <Child userInfo={userInfo} onChange={onChange}></Child> */}
      <Child priceObj={priceObj}></Child>
    </div>
  );
}

export default App;
