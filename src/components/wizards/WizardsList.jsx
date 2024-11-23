import React from 'react'

import { wizardsPlayers } from '../../data'
import styled from 'styled-components'
import WizardsCard from './WizardsCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const WizardsList = () => {
  return (
    <Container>
        {wizardsPlayers.map((item) => (
            <WizardsCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default WizardsList