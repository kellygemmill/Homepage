import React from 'react'
import SingleProject from 'components/SingleProject'
import { projects } from "projects/index"

const Projects = () => {
    console.log(projects)
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <h5>See below for descriptions of some projects I have created:</h5>
            <SingleProject project={projects.dictionary} />
            <SingleProject project={projects.sudoku} />
        </div>
    )
}

export default Projects