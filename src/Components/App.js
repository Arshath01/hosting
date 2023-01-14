import { buildQueries } from '@testing-library/react';
import React, { Component } from 'react';

import menu from '../image/more.png';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    
    const headings = ['Science','Technology','Sports','Business','Entertainment','Politics'];
    const elements = headings.map(topic=>
      <a href='#'>
        <center>{topic}</center>
      </a>
    );
    
    // NavBar
    function Nav() {
      return(
        <div>
          <h1 className='m-0'>
            <center className="bg-dark text-light p-3" >
              The <span className='text-warning' >News</span> App
            </center>
          </h1>
        </div>
      );
    }

     // handleSideBar
     function handleSideBar() {
      
     }

    // SubNav
    function SubNav() {
      return(
        <div  id='subnav'>
          
          <aside>
            <button onClick={handleSideBar}>
              <h1></h1>
              <img src={menu}/>
            </button>
          </aside>
        </div>
      );
    }

    // sideBar
    function SideBar() {
      return(
        <div className='sidebar bg-light' >

          {/* get values from Array (headings) */}
          <ul >
            <li>{elements}</li>
          </ul>
        </div>
      );
    }

    // Main Return
    return(
      <div>
        <Nav/>
        <SubNav/>
        <SideBar/>
     </div>
    )
  }
}


export default App;