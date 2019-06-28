import React, { Component } from 'react';
class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (  <li onClick={this.props.del} dangerouslySetInnerHTML={{__html:this.props.content}}></li> );
  }
}

export default XiaojiejieItem;