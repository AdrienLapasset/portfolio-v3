import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components'

import Project from './Project';

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___year], order: DESC}) {
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
                fluid(quality: 70, maxWidth: 468, maxHeight: 280, cropFocus: NORTH) {
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
      <StyledBtnSecondary href="https://www.malt.fr/profile/adrienlapasset" target="_blank" rel="noopener noreferrer">Plus de projets</StyledBtnSecondary>
      <StyledBtn className="Home__contact-btn" href="mailto:aflapasset@gmail.com" target="_blank" rel="noopener noreferrer">Me contacter</StyledBtn>

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
const StyledBtn = styled.a`
  border-radius: 100px;
	text-decoration: none;
	background-color: black;
	color: white;
	padding: 13px 23px;
`
const StyledBtnSecondary = styled(StyledBtn)`
	background-color: white;
	color: black;
  border: 2px solid black;
  padding: 11px 21px;
  margin-bottom: 20px;
`

export default Projects
