import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillReceiveProps() {
    // 父组件的render函数执行后，自组件的componentWillReceiveProps将会执行(除了父组件挂载时候执行的render函数),也就是刷新页面，自组件的此周期不执行
    // console.log('----- child===> componentWillReceiveProps-----');
  }
  componentWillUnmount() {
    // 组件将要删除前执行
    // console.log('----- child===> componentWillUnmount-----');
  }
  // 性能优化代码
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content!==this.props.content ) return true;
    return false;
  }
  render() {
    return (
      <li onClick={this.props.del}
        dangerouslySetInnerHTML={{ __html: this.props.avname + '为您做' + this.props.content }}
      ></li>
    );
  }
}
XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  del: PropTypes.func,
  list: PropTypes.number,
  // avname:PropTypes.string.isRequired
}
XiaojiejieItem.defaultProps = {
  avname: '波多野结衣'
}


export default XiaojiejieItem;