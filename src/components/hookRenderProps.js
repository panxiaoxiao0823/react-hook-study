import react, { useState } from 'react'

function HookRenderProps(props) {
  const [data, setData] = useState('关闭'); 

  return <div style={{border: '1px solid #390', width: '300px', height: '300px'}}>
    {props.render({data})}
  </div>
}

export default HookRenderProps;