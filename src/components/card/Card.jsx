import React from 'react'
import { styled } from 'styled-components'

export const Card = () => {
  return (
    <Container>
      <Head>

      </Head>
      <Body>
        Card
      </Body>
    </Container>
  )
}

const Container = styled.div`
  width: 30%;
  height: 400px;
  background-color: #E7E7E7;
  border-radius: 5px;
  margin-bottom: 1rem;
`

const Head = styled.header`
  height: 65%;
  background-color: #929292;
  border-radius: 5px 5px 0 0;
`

const Body = styled.div`

`