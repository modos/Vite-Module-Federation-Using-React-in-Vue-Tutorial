import React from "react"
import ReactDOM from "react-dom"

const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '8px',
    fontWeight: 'bold',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '5px',
    cursor: 'Pointer'
}

const buttonClicked = () => {
    alert("Vite React !")
}
const Button = (el, props) => {
    ReactDOM.render(<button style={buttonStyle} onClick={buttonClicked}>{props.value}</button>, el)
}

export {Button};
