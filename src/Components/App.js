import React from 'react';
import menu from '../image/more.png';
import close from '../image/close.png';
import { useState } from 'react';
import back from '../image/news-image.jpg';
import img1 from '../image/gold.jpg';
import img2 from '../image/img2.jpeg';
import img3 from '../image/img3.jpg';


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
  const [boot, setBoot] = useState("bg-warning");

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
  function NewsContainer() {
    return (
      <div className='newscontent container-fluid bg-light p-1 m-0'>
        <div>
          <img src={back} className="rounded" />
        </div>
        <div className='p-2 mb-2 mt-2 text-light bg-dark text-center rounded'>
          <span className='h2'>LATEST NEWS</span>
        </div>

        {/* section 1 */}
        <section className='p-2'>
          <h1>
            <a href='https://www.fairobserver.com/economics/is-the-gold-standard-now-alive-or-dead/' >Is the Gold Standard Now Alive or Dead?</a>
          </h1>
          <img src={img1} className="mb-3 rounded" />
          <p>
            The current monetary system is unsustainable.
            The Bretton Woods gold standard system collapsed.
            Can another form of gold standard make a comeback?
          </p>
        </section>

        {/* section 2 */}
        <section className='p-2'>
          <h1>
            <a href='https://www.fairobserver.com/economics/is-the-gold-standard-now-alive-or-dead/' >
              As US and China Clash, Taiwan Moves Closer to the Brink of Disaster</a>
          </h1>
          <img src={img2} className="mb-3 rounded" />
          <p>
            Atul Singh and Glenn Carle get to grips with the furore caused by Nancy Pelosi’s visit to Taiwan,
            how it has incited the fury of a thin-skinned Chinese regime, and... <br />
            <strong>Atul Singh & Glenn Carle</strong>
          </p>
        </section>

        {/* section 3 */}
        <section className='p-2'>
          <h1>
            <a href='https://www.fairobserver.com/podcasts/serbian-city-novi-sad-european-through-culture/' >
              Serbian City Novi Sad: European Through Culture</a>
          </h1>
          <img src={img3} className="mb-3 rounded" />
          <p>
            On January 1, 2022, the Serbian city Novi Sad officially became the European Capital of Culture.
            After a one-year delay because of the COVID-19 pandemic, Novi Sad is the first...
          </p>
        </section>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <SideBar />
      <NewsContainer />
    </div>
  );
}

export default App;