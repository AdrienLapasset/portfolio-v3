import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components'

import Project from './Project';

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___id], order: DESC}) {
        nodes {
          html
          frontmatter {
            title
            categories
            description
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
      <Project key={index} projectContent={project.html} project={project.frontmatter} />
    )
  })

  return (
    <StyledSection>
      <Styledh2>Projets sélectionnés&nbsp;:</Styledh2>
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
  padding: 0 15px;
  ${breakpoint('sm')`
    max-width: ${props => props.theme.breakpoints.sm}px;
  `}
  ${breakpoint('md')`
    max-width: ${props => props.theme.breakpoints.md}px;
  `}
  ${breakpoint('lg')`
    max-width: ${props => props.theme.breakpoints.lg}px;
  `}
  ${breakpoint('xl')`
    max-width: ${props => props.theme.breakpoints.xl}px;
  `}
`
const Styledh2 = styled.h2`
  font-size: 35px;
  margin-bottom: 80px;
  text-align: center;
  ${breakpoint('sm')`
    font-size: 55px;
  `}
`

export default Projects
