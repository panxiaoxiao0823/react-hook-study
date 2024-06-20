import React from 'react'

export default class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // 废弃的生命周期：componentWillReceiveProps、componentWillMount、componentWillUpdate
  // 新增的生命周期：getSnapshotBeforeUdpate、getDerivedStateFromProps

  componentDidMount() {
    console.log('child==>componentDidMount==>');
  }

  static getDerivedStateFromProps() {
    console.log('child==>getDerivedStateFromProps==>');
    return null;
  }

  getSnapshotBeforeUpdate() {
    console.log('child==>getSnapshotBeforeUpdate==>');
  }

  componentDidUpdate() {
    console.log('child==>componentDidUpdate==>');
  }

  componentWillUnmount() {
    console.log('child==>componentWillUnmount==>');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('child==>shouldComponentUpdate==>');
    return true;
  }

  render() {
    console.log('child==>render==>');

    return <div>
      child
    </div>

  }
}