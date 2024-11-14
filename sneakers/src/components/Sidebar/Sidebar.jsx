import React from 'react'
import './Sidebar.css'
import Colors from './Colors/Colors'
import Company from './Company/Company'

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <Company />
            <Colors />


        </div>
    )
}

export default Sidebar
