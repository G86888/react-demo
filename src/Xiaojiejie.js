import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './XiaojiejieItem';


class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iptVal: '',
      list: ['按摩', '推背']
    }
    this.addService = this.addService.bind(this)
    this.delService = this.delService.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="ipt">增加服务</label>
          <input id="ipt" onChange={e=>{this.iptValChange(e)}} value={this.state.iptVal} />
          <button onClick={this.addService}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (<XiaojiejieItem key={item + index} content={item} del={this.delService.bind(this,index)} />)
            })
          }
        </ul>
      </Fragment>
    );
  }
  // 输入框值改变
  iptValChange(e) {
    this.setState({
      iptVal: e.target.value
    });
  }
  // 增加服务按钮点击事件
  addService() {
    this.setState({
      list: [...this.state.list, this.state.iptVal],
      iptVal:''
    });
  }
  // 删除服务
  delService(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }

}

export default Xiaojiejie;