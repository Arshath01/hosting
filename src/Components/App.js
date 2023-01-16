import React from 'react';
import menu from '../image/more.png';
import close from '../image/close.png';
import { useState } from 'react';
import back from '../image/background.jpg';


const elements = ['Science', 'Technology', 'Health', 'Business', 'Entertainment', 'Sports'];
const title = elements.map
  (
    (element) =>
      <li>
        <a href='#' >{element}</a>
      </li>
  );

function App() {

  const [value, setValue] = useState(0);
  const [style, setStyle] = useState();
  const[boot,setBoot] = useState("bg-warning");

  const btnOpen = [
    <button onClick={handleOpen}>
      <img src={menu} />
    </button>
  ];

  const btnClose = [
    <button onClick={handleClose}>
      <img src={close} />
    </button>
  ];

  function handleOpen() {
    setValue(1);
    setStyle({ display: 'block' });
    setBoot("bg-light");
  }

  function handleClose() {
    setValue(0);
    setStyle({ display: 'hidden' });
  }

  function Nav() {
    return (
      <div>
        <h1 className='m-0'>
          <center className="bg-dark text-light p-3" >
            The <span className='text-warning' >News</span> App
          </center>
        </h1>
      </div>
    );
  }

  // SideBar
  function SideBar() {
    return (
      <div className='SideBar'>

        <nav className='buttonBox bg-warning p-2'>
          {value == 0 ? btnOpen : btnClose}
        </nav>

        <center className={boot} style={style} id='topics'>
          {
            <ul>{title}</ul>
          }
        </center>
      </div>
    )
  }


  // news Content
  function NewsContainer(){
    return(
      <div className='newscontent container-fluid  p-1 m-0'>
          <div className='rounded' >
            <img src={back}/>
          </div>
      </div>
    );
  }

  return (
    <div>
          <Nav/>  
          <SideBar/>
          <NewsContainer/>
    </div>
  );
}

export default App;