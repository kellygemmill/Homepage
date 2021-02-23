import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const Contact = () => {

    return(
        <div className='description'>
            <div className='contact-header'>
            <h1>Contact Me</h1>
            <h5>Please email me at <a href="mailto:kelly@kellygemmill.com">kelly@kellygemmill.com</a> or fill out the form below:</h5>
            </div>
            <Card className="contact-form">    
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
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>            
                    

                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Card>

        </div>
    )
}

export default Contact