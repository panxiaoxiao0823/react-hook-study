import React from 'react'
import Child from './child'

export default class ClassLifeCycleOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true,
      extraState: 1,
      propsState: 1
    };
  }

  // 废弃的生命周期：componentWillReceiveProps、componentWillMount、componentWillUpdate
  // 新增的生命周期：getSnapshotBeforeUdpate、getDerivedStateFromProps

  componentDidMount() {
    console.log('father==>componentDidMount==>');
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    // 触发时机：初始化加载或者每次render之前触发
    // 返回一个对象来更新state，如果不更新state需要return null
    // 由于是静态方法，所以getDerivedStateFromProps中不能访问到this实例，this为undefined
    // 该生命周期类似于函数式组件调用useState的set更新函数
    console.log('father==>getDerivedStateFromProps==>', nextProps, nextState);
    
    // if (props.userID !== state.prevUserID) {
    //   return {
    //     prevUserID: props.userID,
    //     email: props.defaultEmail
    //   };
    // }
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 触发时机：render之后，dom更新之前触发
    // 返回的值作为componentDidUpdate的第三个参数传入
    console.log('father==>getSnapshotBeforeUpdate==>', prevProps, prevState);
    console.log('father==>getSnapshotBeforeUpdate==>this.state', this.state.propsState);
    return 'This is father snapshot value'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('father==>componentDidUpdate==>', prevProps, prevState);
    console.log('father==>componentDidUpdate==>this.state', this.state.propsState);
    // console.log('father==>componentDidUpdate==>snapshot', snapshot);
  }

  componentWillUnmount() {
    console.log('father==>componentWillUnmount==>');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 触发时机：render之前触发
    // 返回布尔值判断是否可以跳过重新渲染
    console.log('father==>shouldComponentUpdate==>', nextProps, nextState);
    console.log('father==>shouldComponentUpdate==>this.state', this.state.propsState);
    return true;
  }

  render() {
    console.log('father==>render==>');

    return <div>
      father
      <button onClick={() => {this.setState({flag: !this.state.flag})}}>{this.state.flag ? "销毁" : "加载"}子组件</button>
      <button onClick={() => {this.setState({extraState: this.state.extraState + 1})}}>extraState++</button>
      <button onClick={() => {this.setState({propsState: this.state.propsState + 1})}}>propsState++</button>
      { this.state.flag && <Child></Child>}
    </div>

  }
}