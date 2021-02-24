import React from 'react'
import { Jumbotron, CardGroup, Card, Image, Button } from 'react-bootstrap'
import Projects from './Projects'



const SingleProject = ({ project }) => {
    
    // const project = projects.dictionary

    return(
        <div className="single-project">
            <Jumbotron>
                <h2>{project.title}</h2>
                <CardGroup >
                    <Card bg='dark'>
                        <a href={project.address} className="sample-image">
                            <Image className="picture" alt={project.title} src={project.image} />
                        </a>
                    </Card>
                    
                    <Card bg='light'>
                        <Card.Header>
                            <div className='site-link-div'>
                                <Button className='site-link' variant="primary" href={project.address}>Visit Site</Button>
                                <Button className='site-link' variant="secondary" href={project.github}
                                    target="_blank" rel="noopener noreferrer">View on GitHub</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="project-description">
                                {/* <hr></hr> */}
                                <h5 className="bullet-item">{project.summary}</h5>
                                <h5><ul>
                                    {project.description.map((value,idx) => 
                                        <li key={idx} className="bullet-item">{value}</li>
                                    )}
                                </ul></h5>
                            </div>
                        </Card.Body>
                        
                    </Card>
                </CardGroup>
            </Jumbotron>
        </div>
    )
}

export default SingleProject

