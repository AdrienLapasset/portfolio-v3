import React from 'react';
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"

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
            siteUrl
            repoUrl
            featuredImage {
              childImageSharp {
                fluid(quality: 90) {
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
    return (
      <Project key={index} project={project.frontmatter} />
    )
  })

  return (
    <StyledSection>
      <Styledh2>Mes plus beaux projets :</Styledh2>
      {projectsRender}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 1080px;
`
const Styledh2 = styled.h2`
  font-size: 55px;
  margin-bottom: 80px;
`

export default Projects
