import logo from './background.jpg';
import Column from './Column';
function App() {

  return (
    <div>

      <div className="h1 text-light p-2 bg-dark text-center m-0">
        THE <span className="text-warning m-2" >NEWS</span> APP
      </div>

      <div className="subtopics bg-dark p-4">
        <ul>
          <li>
            <a href="#">Health</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Science</a>
          </li>
          <li>
            <a href="#">Entertainment</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
        </ul>
      </div>

  

      <Column/>

      
    </div>
  );
}

export default App;