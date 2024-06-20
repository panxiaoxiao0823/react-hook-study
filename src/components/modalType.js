import React from "react";
import HookHoc from "./hookHoc";
import HookRenderProps from "./hookRenderProps";

// 1. hook使用hoc
// function ModalType(props) {
//   return <div>
//     弹框内容1
//     <br></br>
//     <button>{props.data}</button>
//   </div>;
// }
// export default HookHoc(ModalType);

// 2. hook使用render props
function ModalType() {
  return (
    <HookRenderProps
      render={props => (
        <div>
          弹框内容1
          <br></br> <button>{props.data}</button>
        </div>
      )}
    ></HookRenderProps>
  );
}
export default ModalType;
