import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import user from '../images/user.jpg'

const ContactDetail = (props) => {
    const location = useLocation()
    const { name, email } = location.state.contact
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

        </div>
    )
};

export default ContactDetail;