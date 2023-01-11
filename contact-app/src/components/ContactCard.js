import React from 'react'
import user from '../images/user.jpg'

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className='item' style={{ padding: "10px" }}>
            <img className='ui avatar image' src={user} alt="user" />
            <div className='content'>
                <div className='header'>
                    {name}
                </div>
                <div>
                    {email}
                </div>
            </div>
            <i className='trash alternate outline icon' style={{ color: "red", marginTop: '10px', float: "right", fontSize: "1.5rem" }}></i>
        </div>
    )
};

export default ContactCard;