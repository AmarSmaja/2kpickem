import React from 'react'

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

const TeamContainer = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    &:hover {
      border: 1px solid black;
    }
`

const Image = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
`

const Hero = () => {
  return (
    <Container>
      <Link to='/celtics' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg' />
        <p>Celtics</p>
      </TeamContainer>
      </Link>

      <Link to='/nets' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg' />
        <p>Brooklyn Nets</p>
      </TeamContainer>
      </Link>

      <Link to='/knicks' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg' />
        <p>New York Knicks</p>
      </TeamContainer>
      </Link>

      <Link to='/philly' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg' />
        <p>Philadelphia 76ers</p>
      </TeamContainer>
      </Link>

      <Link to='/raptors' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg' />
        <p>Toronto Raptors</p>
      </TeamContainer>
      </Link>

      <Link to='/bulls' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg' />
        <p>Chicago Bulls</p>
      </TeamContainer>
      </Link>

      <Link to='/cavs' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg' />
        <p>Cleveland Cavaliers</p>
      </TeamContainer>
      </Link>

      <Link to='/pistons' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg' />
        <p>Detroit Pistons</p>
      </TeamContainer>
      </Link>

      <Link to='/bucks' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg' />
        <p>Milwaukee Bucks</p>
      </TeamContainer>
      </Link>

      <Link to='/hawks' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg' />
        <p>Atlanta Hawks</p>
      </TeamContainer>
      </Link>

      <Link to='/hornets' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg' />
        <p>Charlotte Hornets</p>
      </TeamContainer>
      </Link>

      <Link to='/heat' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg' />
        <p>Miami Heat</p>
      </TeamContainer>
      </Link>

      <Link to='/magic' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg' />
        <p>Orlando Magic</p>
      </TeamContainer>
      </Link>

      <Link to='/wizards' style={{color: "black", textDecoration: "none"}}>
      <TeamContainer>
        <Image src='https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg' />
        <p>Washington Wizards</p>
      </TeamContainer>
      </Link>
    </Container>
  )
}

export default Hero