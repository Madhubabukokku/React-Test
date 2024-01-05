import React from 'react'

const Main = () => {
    return (
        <div><h1><span>This is Main Component</span></h1>
            Here are some fun facts about React JS1and React Native2:
            <ul>
                <li className='my-5'>React JS is not a framework, but a JavaScript library1.</li>
                <li>React JS has a fast speed of Virtual DOM1.</li>
                <li>React JS allows for immutability1.</li>
                <li>React Native is built by Facebook and is open source2.</li>
                <li>React Native is JavaScript based and can be used to create android, iOS and windows apps2</li>
                <button onClick={() => console.log('iam Clicked')} type="button" class="btn btn-warning">Click Me</button>
            </ul>
        </div >
    )
}

<h1>This is Main Component</h1>
export default Main
