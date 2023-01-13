import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import user from '../images/user.jpg'

const ContactDetail = (props) => {
    const location = useLocation()
    const { id, name, email } = location.state.contact
    console.log(location)
    console.log(props)
    // console.log(name, email)
    return (
        <div className='main' style={{ marginTop: "4rem" }}>
            <div className='ui card centered'>
                <div className='image'>
                    <img src={user} alt='user' />
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>
            <Link to={"/"}>
                <button className='ui button blue'>View Contacts</button>
            </Link>
            <Link to={`/delete/${id}`} state={{ contact: location.state.contact }}>
                <button className='ui button red' style={{ float: 'right' }}>Delete</button>
            </Link>
        </div >
    )
};

export default ContactDetail;