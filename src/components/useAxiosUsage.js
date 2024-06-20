import useAxios from '../customHooks/useAxios'
import {useState, useEffect} from 'react'

function UseAxiosUsageDemo() {
  const url = 'http://localhost:3000'
  const [loading, data, error] = useAxios(url)

  // const [count, setCount] = useState({count: 0});

  // useEffect(()=>{
  //   console.log('useEffect==>', count); // 打印一次，为0
  //   setInterval(() => {
  //     console.log('setInterval==>', count); // 此时每隔一秒count打印都为0，因为useEffect依赖为[]时候，不会在update时候重新调用内部函数，所以count一直是0；
  //     setCount(count.count + 1)
  //   }, 1000);
  // }, [])

  if(loading) {
    return <div>loading...</div>
  }

  return <div>
    {error ? JSON.stringify(error) : JSON.stringify(data)} 
  </div>
  
}

export default UseAxiosUsageDemo;
