/*
 * @Author: benjie
 * @Date: 2024-07-21 23:26:05
 * @LastEditTime: 2024-07-22 11:42:04
 * @LastEditors: benjie
 * @Description: 
 */
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3']
    };
  }

  updateItem = (index, newItem) => {
    // 直接修改现有数组
    this.state.items[index] = newItem;
    // 由于直接修改了数组，React 不会检测到状态变化
    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={() => this.updateItem(1, 'Updated Item 2')}>Update Item 2</button>
      </div>
    );
  }
}


export default App;
