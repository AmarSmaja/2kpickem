import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    width: 90%;
    height: 90%;
    object-fit: contain;
`

const PistonsCard = ({ item }) => {
  return (
    <Container>
          <Image src={item.img}/>
          <h1>{item.name}</h1>
    </Container>
  )
}

export default PistonsCard