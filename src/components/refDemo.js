import React, { useRef, useEffect } from 'react';

function RefDemo() {
    const btnRef = useRef(null); // 默认初始值是Null

    useEffect(()=>{
      console.log('btnRef==>', btnRef); // componentDidMount时候打印元素
      console.log('btnRef.current==>', btnRef.current); // btnRef.current是dom元素
    }, [])

    return <div>
      <button ref={ btnRef }>refDemo</button>
    </div>
}

export default RefDemo;