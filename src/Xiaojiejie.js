import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './XiaojiejieItem';
import PotentialError from './PotentialError';


class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iptVal: '',
      list: ['按摩', '推背']
    }
    this.delService = this.delService.bind(this)
  }
  /** Mounting */
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  //警告!在react v17中被弃用。使用componentDidMount代替。
  componentWillMount() {
    // 组件挂载前执行
    // console.log('-----componentWillMount-----');
  }
  componentDidMount() {
    // 组件挂载后执行
    // console.log('-----componentDidMount-----');
  }
  /** Updation */
  shouldComponentUpdate() {
    // 组件更新前执行 *注：此函数必须要有返回值(boolean)，否则会报错,并且state,prop状态不会更新
    // console.log('----- 1===> shouldComponentUpdate-----');
    return true;
  }
  componentWillUpdate() {
    // 组件更新前执行 在shouldComponentUpdate后执行
  }
  componentDidUpdate() {
    // 组件更新后执行 在render函数之后执行
    // console.log('----- 4===> componentDidUpdate-----');
  }
  render() {
    // 只要state或prop的属性改变时执行render函数
    // console.log('----- 3===> render-----');
    return (
      <Fragment>
        <div>
          <label htmlFor="ipt">增加服务</label>
          <input
            id="ipt"
            onKeyUp={e => { this.addService(e) }}
            onChange={e => { this.iptValChange(e) }}
            value={this.state.iptVal}
            ref={input => { this.input = input }}
          />
          <button onClick={e => { this.addService() }}>增加服务</button>
        </div>
        <ul ref={ul => { this.ul = ul }}>
          {
            this.state.list.map((item, index) => {
              return (
                <XiaojiejieItem
                  key={item + index}
                  content={item}
                  del={this.delService.bind(this, index)}
                  list={3}
                />
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
  // 输入框值改变
  iptValChange(e) {
    this.setState({
      // iptVal: e.target.value
      //        ||
      iptVal: this.input.value
    });
  }
  // 增加服务按钮点击事件
  addService(e) {
    if ((e && e.keyCode === 13) || !e) {
      this.setState({
        list: [...this.state.list, this.state.iptVal],
        iptVal: ''
      }, () => {
        // console.log(this.ul.querySelectorAll('li').length);
      });
    }
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