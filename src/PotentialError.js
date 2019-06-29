import React, { Component } from 'react';


// 处理错误组件 <PotentialError><children/></PotentialError>
// children组件报错时，会在页面显示错误
class PotentialError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  // 当组件有错误时候会执行
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }
  render() {
    if (this.state.error) {
      return <h1>Error: {this.state.error.toString()}</h1> ;
    }
    return this.props.children;
  }
}
export default PotentialError