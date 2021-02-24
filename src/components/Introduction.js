import React from 'react'
import { Image } from 'react-bootstrap'

const Introduction = () => {

    return (
        <div>
            <h1>Kelly Gemmill</h1>
            <div className='profile-pic-div'><Image className='picture' src="profile.jpg" roundedCircle /></div>
            <h5 className="description">Welcome! As an aerospace engineer, I develop engineering applications for  
            aircraft performance prediction and data analysis. Outside of work, I have been creating 
            applications using Java and React.</h5>
        </div>

    )
}

export default Introduction