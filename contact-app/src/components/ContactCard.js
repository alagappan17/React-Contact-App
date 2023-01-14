import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.jpg'

const ContactCard = (props) => {
    console.log(props.clickHandler)
    const { id, name, email } = props.contact;
    return (
        <div className='item' style={{ padding: "10px" }}>
            <img className='ui avatar image' src={user} alt="user" />
            <div className='content'>
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <Link to={`/delete/${id}`} state={{ contact: props.contact }} >
                <i className='trash alternate outline icon' style={{ color: "red", marginTop: '10px', float: "right", fontSize: "1.5rem" }}></i>
            </Link>
        </div>
    )
};

export default ContactCard;