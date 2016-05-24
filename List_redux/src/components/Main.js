require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/css/user.less');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      show:false
    };
  }

  handleChange(event) {
      let obj = {
        value : event.target.value
      }
      if(event.target.value === '' || event.target.value === ' '){
        obj.show = false;
      } else {
        obj.show = true;
      }
    this.setState(obj);
  }

  handleEmpty() {
      this.setState({value: '',show:false});
  }

  render() {
      return (
        <form action="" method="post" className="info">
          <div className="container" style={{marginBottom: '40px'}}>
              <div className="item-line">
                  <input type="text" name="name" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="请输入姓名"/>
                  <div className="icon icon-delete2" style={this.state.show ? {display: 'block'}:{display: 'none'}} ref="deleteIcon" onClick={this.handleEmpty.bind(this)}></div>
              </div>
          </div>
          <button type="submit" className="btn-green2" style={{width: '85%'}}>保存</button>
        </form>
      );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

