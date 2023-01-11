import React from 'react';

export  function App(){

  return(
    <div>
      <Nav/>
      <Section/>
    </div>
  );
}

// NavBar
function Nav(){

  return(
   
    <nav >
      <div className='bg-dark text-light p-3' style={{display:'flex',justifyContent:'space-between'}}>

        <div className='h3 m-2' style={{borderRight:'1px solid white',paddingRight:'20px'}}>React App</div>
        <div>
          <ul className='ul-elements'>
            <li>Articles</li>
            <li>Videos</li>
            <li>Newsletter</li>
            <li>Guides</li>
            <li>DigitalOcean</li>
            <li>DO Community</li>
          </ul>
        </div>
        <div>
          <button className='btn btn-primary m-2' >Contact</button>
          <button className='btn btn-primary m-2' >About</button>
        </div>
      </div>
    </nav>
  );
}

// section

function Section(){
  
  return(
    <div className='nav'>
      
    </div>
  );
}

