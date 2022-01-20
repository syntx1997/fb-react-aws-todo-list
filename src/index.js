import React from 'react'
import reactDom from 'react-dom'

// My first component
function HelloWorld() {
    return <h1>Hello, World!</h1>;
}

reactDom.render(<HelloWorld/>, document.getElementById('root'));