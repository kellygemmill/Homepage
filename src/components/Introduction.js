import React from 'react'
import { Image } from 'react-bootstrap'

const Introduction = () => {

    return (
        <div>
            <h1>Kelly Gemmill</h1>
            <div className='profile-pic-div'><Image className='profile-pic' src="profile.jpg" roundedCircle /></div>
            <h5 className="description">As an aerospace engineer, I create engineering applications to 
            predict aircraft performance and analyze data. Outside of work, I have been creating 
            applications using Java and React.</h5>
        </div>

    )
}

export default Introduction