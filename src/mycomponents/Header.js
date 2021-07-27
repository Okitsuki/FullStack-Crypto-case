import React from 'react'
import PropTypes from 'prop-types'
import "./Heder.css"//this is how to add style sheet in react
import { Link } from 'react-router-dom'
export default function Header(props) {
    return (
        <div>
             <h1>{props.title}</h1>
             <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/About">About</Link></li>
             </ul>
             {props.para ?
             <p className = "red">This is very Good</p>: <p className = "red">props true/false testing by me</p>
            }
        </div>
    )
}
Header.defaultProps = {
    title : "Your Title Here"// If title not given thi will show
}
Header.propTypes = {
    title : PropTypes.string,// With this I can't enter anything but string in the title portion
    para : PropTypes.bool.isRequired,// With this I have to give a para while using or it will give me error 
}
