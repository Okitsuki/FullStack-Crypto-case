import React from 'react'
import PropTypes from 'prop-types'
import "./mystyling/Heder.css"//this is how to add style sheet in react
import { Link } from 'react-router-dom'
export default function Header(props) {
    return (
        <div className = "Header">
             <h1>{props.title}</h1>
             <ul>
                 <li><Link className = "page" to="/">Home</Link></li>
                 <li><Link className = "page" to="/About">About</Link></li>
                 <li><Link className = "page" to="/About">Services</Link></li>
                 <li><Link className = "page" to="/About">Contact us</Link></li>
             </ul>
        </div>
    )
}
Header.defaultProps = {
    title : "Your Title Here"// If title not given this will show
}
Header.propTypes = {
    title : PropTypes.string,// With this I can't enter anything but string in the title portion
    para : PropTypes.bool.isRequired,// With this I have to give a para while using or it will give me error 
}
