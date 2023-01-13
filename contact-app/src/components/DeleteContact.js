import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

const DeleteContact = (props) => {
    const location = useLocation()
    console.log(location)
    console.log(props)
    const { name, id } = location.state.contact
    return (
        <div className='main' style={{ marginTop: "4rem" }}>
            <div className='ui card centered' style={{ padding: '2rem', width: '50%' }}>
                <h1>Are you sure you want to delete {name}?</h1>
                <Link to="/">
                    <button className='ui button green' onClick={() => { props.deleteContactId(id); alert("Contact Deleted!") }}>Yes</button>
                    <button className='ui button red' style={{ float: 'right' }}>No</button>
                </Link>
            </div>
        </div >
    )
}

export default DeleteContact;