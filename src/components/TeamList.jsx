import React from 'react'

import { teams } from '../data'
import TeamCard from '../components/TeamCard'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 90%;
  margin: 0% 5%;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  grid-gap: 15px;
`

const TeamList = () => {
  return (
    <Container>
      {teams.map((item) => (
        <Link to="/" style={{color: "black", textDecoration: "none"}}>
        <TeamCard item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  )
}

export default TeamList