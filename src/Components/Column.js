import logo from './background.jpg';

function Column() {

    const subbox = [

        <div className="card" style={{ width: "68vh", margin: '5px' }} >
            <div className="  p-2 m-1" style={{ height: '200px' }}>
                <img src={logo} alt="Card image cap" style={{ width: "400px", height: '200px' }} />
            </div>
            <div className="card-body" >
                <h5 className="card-title" >Card Title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>


    ]

    return (
        <div>
            <div className="d-flex m-1 p-3">

                {subbox}
                {subbox}
                {subbox}

            </div>

            <div className="d-flex m-1 p-3">

                {subbox}
                {subbox}
                {subbox}

            </div>

            <div className="d-flex m-1 p-3">

                {subbox}
                {subbox}
                {subbox}

            </div>
        </div>
    );
}

export default Column;