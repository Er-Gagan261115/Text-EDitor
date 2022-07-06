import React from 'react'
import PropTypes from 'prop-types'
import  {Link}  from 'react-router-dom'

export default function Navbar(props) {
    function changetheme(){
        if(props.mode=== "blue"||props.mode=== "yellow"){
return "dark";
        }
        else 
        return "light"; 
    }
    const changecolor = ()=>{
        if(props.mode=== "blue"){
          return "primary";
        }
        else if(props.mode=== "yellow")
        {
            return "warning"
        }
        else 
        return "light"; 
    }

    return (
        <div>
            {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
            <nav className={`navbar navbar-expand-lg navbar-${changetheme} bg-${changecolor}`} style = {{border: "2px solid black"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>

                </div>
            </div>
            {/* <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={props.changemode} role="switch" id="flexSwitchCheckDefault" />
                </div> */}
            <button type="button" onClick={() => { props.changemode1('blue') }} style={{ backgroundColor: 'blue' }} className="btn btn-primary mx-2">Blue</button>
            <button type="button" onClick={() => { props.changemode1('yellow') }} style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-primary mx-2">Yellow</button>
            <button type="button" onClick={() => { props.changemode1('white') }} style={{ backgroundColor: 'white', color: 'black' }} className="btn btn-primary mx-2">default</button>



        </nav>
        </div >
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "set title"
}
