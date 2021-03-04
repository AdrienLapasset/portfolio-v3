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
      <Styledh2>Mes plus beaux projets&nbsp;:</Styledh2>
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
    max-width: 540px;
  `}
  ${breakpoint('md')`
    max-width: 720px;
  `}
  ${breakpoint('lg')`
    max-width: 960px;
  `}
  ${breakpoint('xl')`
    max-width: 1140px;
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
