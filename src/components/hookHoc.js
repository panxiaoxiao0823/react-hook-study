import react, { useState } from 'react'

function HookHoc(Cmpt) {
    return function WithHooksHOC() {
      const [data, setData] = useState('取消'); 

      return <div style={{border: '1px solid #390', width: '300px', height: '300px'}}>
        <Cmpt data={data}></Cmpt>
      </div>
    }
}

export default HookHoc;