import React, { Component } from 'react';
import NavBar from '../components/navbar';
import '../App.css';

export default class Test extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="grid">
            <div class="box a">A</div>
            <div class="box b">B</div>
            <div class="box c">C</div>
            <div class="box d">D</div>
            <div class="box e">E</div>
            <div class="box f">F</div>
            <div class="box g">G</div>
        </div>
      </div>
    );
  }
}
