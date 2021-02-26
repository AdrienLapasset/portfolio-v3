import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


import './index.scss';
import Project from './Project';

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            description
            categories
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes
  const projectsRender = projects.map((project, index) => {
    const categories = project.frontmatter.categories
    console.log(project)
    const categoriesRender = categories.map((category, index) => {
      return (<div>{category}</div>)
    })
    return (
      <div key={index} >
        {categoriesRender}
        {project.frontmatter.description}
        <Img fluid={project.frontmatter.featuredImage.childImageSharp.fluid} />
      </div>
    )
  })

  return (
    <section>
      <h2>Mes plus beaux projets :</h2>
      {projectsRender}
      <Project />
    </section>
  );
}

export default Projects
