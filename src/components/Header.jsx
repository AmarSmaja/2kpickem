import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
`

const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`

const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end
`

const Logo = styled.a`
    margin-left: 10%;
    text-decoration: none;
    color: black;
    font-size: 18px;
`

const Links = styled.ul`
    list-style-type: none;
    margin-right: 10%;
`

const Item = styled.li`
    display: inline-block;
    padding: 15px;
`

const Link = styled.a`
    text-decoration: none;
    color: black;
`

const Header = () => {
  return (

    <Container>
        <Left>
            <Logo href="/">2k Pick 'Em</Logo>
        </Left>
        <Right>
            <Links>
                <Item><Link href="/teams">Teams</Link></Item>
                <Item><Link href="/lakers">Players</Link></Item>
                <Item><Link href="#">Draft</Link></Item>
                <Item><Link href="#">Link</Link></Item>
            </Links>
        </Right>
    </Container>

    )
}

export default Header