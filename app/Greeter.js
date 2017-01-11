import React, {Component} from 'react';
import config from './json/config.json';

import styles from './Greeter.css';//导入

class Basic extends Component{
	render() {
	    return (
	        <div>
	        	<div>哈哈，第一个</div>
	        	<div>不是吧</div>
	        </div>
	    );
  	}
}

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}
//export default Greeter;
export {Greeter,Basic};