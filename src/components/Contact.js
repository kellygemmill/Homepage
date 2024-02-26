import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const Contact = () => {

    return(
        <div className='description' id='contact-me'>
            <div className='contact-header'>
            <h1>Contact Me</h1>
            <h5>To get in touch, please email me at <a href="mailto:kelly@kellygemmill.com">kelly@kellygemmill.com</a> or add me on <a href="https://www.linkedin.com/in/kelly-gemmill/">LinkedIn</a>.</h5>
            </div>
            {/* <Card className="contact-form">    
                <Form className="contact-form">
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    
                    <Form.Group controlId="Email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group controlId="Subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group controlId="Message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>            
                    

                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Card> */}

        </div>
    )
}

export default Contact