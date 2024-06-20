import React, { useState, useEffect } from 'react'
// import FriendStatus from './components/friendStatus'
// import RefDemo from './components/refDemo'
// import ContextDemo from './components/contextDemo';
import UseReducerDemo from './components/useReducerDemo'
// import UseMemoDemo from './components/useMemoDemo'
// import UseAxiosUsageDemo from './components/useAxiosUsage'
// import ModalType from './components/modalType'
// import ClassLifeCycleOrder from './components/classLifeCycleOrder/index'
// import UseHookReduxDemo from './components/useHookReduxDemo'

function App() {
  const [flag, setFlag] = useState(true);
  const [friendId, setFriendId] = useState(1);

  // const fatherClick = () => {
  //   console.log('father 合成事件==>');
  // }

  // let handle1 = e => {
  //   console.log('addEvent btn 原生事件1==>');
  //   // e.stopImmediatePropagation();
  //   // e.stopPropagation();
    
  // }

  // let handle3 = e => {
  //   console.log('addEvent btn 原生事件2==>');
    
  // }
  // let handle2 = e => {
  //   console.log('addEvent document 原生事件==>');
  // }
  // let handle4 = e => {
  //   console.log('addEvent father 原生事件3==>');
    
  // }
  
  // 1. e.stopPropagation在原生事件里面，会阻止该元素的合成事件但是不会阻止该元素上面同类型的原生事件，会阻止父元素无论原生事件还是合成事件的冒泡
  // 2. e.stopPropagation在合成事件里面，不会阻止该元素的原生事件，会阻止父元素的无论原生事件还是合成事件的冒泡
  // 3. e.stopImmediatePropagation在原生事件里面，会阻止该元素的合成事件以及该元素上面同类型的原生事件，会阻止父元素无论原生事件还是合成事件的冒泡
  // 4. e.nativeEvent.stopImmediatePropagation在合成事件里面，不会阻止该元素的原生事件和父元素的原生和合成事件，只能用来禁用直接绑定在 document 上的事件

  // useEffect(() => {
  //   // child1
  //   let btnEle = document.getElementById('btn');
  //   btnEle.removeEventListener('click', handle1);
  //   btnEle.addEventListener('click', handle1);

  //   // child2
  //   btnEle.removeEventListener('click', handle3);
  //   btnEle.addEventListener('click', handle3);

  //   // father
  //   let fatherEle = document.getElementById('father');
  //   fatherEle.removeEventListener('click', handle4);
  //   fatherEle.addEventListener('click', handle4);

  //   // document
  //   document.removeEventListener('click', handle2);
  //   document.addEventListener('click', handle2);
  // }, []);

  

  return (
    // <div id="father" onClick={fatherClick.bind(this)} style={{width: '400px', height: '400px', background: 'red'}}>
    <div id="father">
      {/* e.nativeEvent.stopImmediatePropagation(); */}
      <button id='btn' onClick={(e) => { console.log('child==>');setFlag(false) }}>销毁组件</button>
      <button onClick={() => { setFriendId(friendId + 1) }}>friendId + 1</button>
      {/* --friendId: {friendId} */}
      <hr></hr>
      {/* {flag && <FriendStatus friendId={friendId} changeId={(val)=>{setFriendId(val)}} />} */}
      {/* { <RefDemo></RefDemo> } */}
      {/* <ContextDemo></ContextDemo> */}
      <UseReducerDemo></UseReducerDemo>
      {/* <UseMemoDemo></UseMemoDemo> */}
      {/* <UseAxiosUsageDemo></UseAxiosUsageDemo> */}
      {/* <ModalType></ModalType> */}
      {/* { flag && <ClassLifeCycleOrder></ClassLifeCycleOrder>} */}
      {/* <UseHookReduxDemo></UseHookReduxDemo> */}
    </div>
  );
}

export default App;
