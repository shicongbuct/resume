import React from 'react';
import {render} from 'react-dom';
import {Greeter,Basic} from './Greeter';

import './main.css';//使用require导入css文件
var names = ['Alice', 'Emily', 'Kate'];
render(<Greeter />, document.getElementById('root'));
render(<Basic />, document.getElementById('root'));

render(<div>{
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }</div>,document.getElementById('test'));