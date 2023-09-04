import React from 'react'
import { styled } from 'styled-components'

export const Card = ({ movie }) => {
  return (
    <Container>
      <Head>

      </Head>
      <Body>
        <Title>{movie.title}</Title>
        <CardHeader>
          <Director>{movie.director}</Director>
          <Genre>{movie.genre}</Genre>
        </CardHeader>
        <section>
          <City>{movie.city}</City>
          <Time>{movie.time}</Time>
          <Language>{movie.language}</Language>
          <Price>{movie.price}</Price>
        </section>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  width: 30%;
  height: 400px;
  background-color: #E7E7E7;
  border-radius: 15px;
  margin-bottom: 1rem;
`

const Head = styled.header`
  height: 65%;
  background-color: #929292;
  border-radius: 15px 15px 0 0;
`

const Body = styled.div`
  padding: 10px;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`

`

const Director = styled.div`

`

const Genre = styled.div`

`

const City = styled.div`

`

const Time = styled.div`

`

const Price = styled.div`

`

const Language = styled.div`

`