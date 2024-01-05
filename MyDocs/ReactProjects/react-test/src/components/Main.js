import React from "react";

function Main() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="main">
                        <h1>InterstingAbout React</h1>
                        <ul className="facts-list">
                            <li>was first Released in 2013</li>
                            <li>was orginallycreated by jordan walke</li>
                            <li>Has well over 100k stars on Github</li>
                            <li>is Maintaned by facebook</li>
                            <li>Powers thousands of enterprise Apps, Including Mobile Apps</li>
                        </ul>

                        <div class="dropdown">
                            <button className="btn btn-secondary dropdown-toggle my-4" onClick={() => document.getElementById("btn").innerHTML = "Welcome to " 
} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            first Dropdown
                        </button>
                        {/* <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </div> */}
                    </div>  <button className="btn btn-success" onClick={() => console.log('Second button is clicked successfully')}>click me</button>

                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="main" bg-color="yellow">
                    <h1>Drawbacks About React</h1>
                    <ul className="facts-list">
                        <li>1. The high pace of development</li>
                        <li>2. Poor Documentation</li>
                        <li>3. JSX as a barrier</li>
                    </ul>

                    <button className="btn btn-outline-primary pl-5" onClick={() => alert("First button is clicked")}>click me</button>
                    <button className="btn btn-warning" onClick={() => console.log('Second button is clicked')}>click me</button>

                </div>
            </div>
        </div>

        </div >

    )
}

export default Main