import React from 'react'
import { styled } from 'styled-components'

export const Card = ({ movie }) => {
  return (
    <Container>
      <Head>

      </Head>
      <Body>

        <CardHeader>
          <Title>{movie.title.toUpperCase()}</Title>  
          <Label>DIRECTED BY</Label>
          <Value>{movie.director}</Value>
        </CardHeader>

        <CardBody>
          <Row>
            <Label>GENRE:&nbsp;</Label><Value>{movie.genre}</Value>
          </Row>
          <Row>
            <Label>LANGUAGE:&nbsp;</Label><Value>{movie.language}</Value>
          </Row>
        </CardBody>

        <Separator />

        <CardFooter>
          <Block>
            <Label>CITY</Label>
            <Value>{movie.city}</Value>
          </Block>
          <Block>
            <Label>TIME</Label>
            <Value>{movie.time}</Value>
          </Block>
          <Block>
            <Label>PRICE</Label>
            <Value>{movie.price}</Value>
          </Block>
        </CardFooter>

      </Body>
    </Container>
  )
}

const Container = styled.div`
  width: 30%;
  height: 400px;
  background-color: #FFFBD8;
  border-radius: 15px;
  margin-bottom: 1rem;
`

const Head = styled.header`
  height: 52%;
  background-color: #929292;
  border-radius: 15px 15px 0 0;
`

const Body = styled.div`
  padding: 20px;
`

const CardHeader = styled.div`
  margin-bottom: 0.5rem;
`

const CardBody = styled.div`
  margin-bottom: 0.5rem;
`

const Block = styled.div`

`

const Row = styled.div`
  display: flex;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  width: 20%;
  font-size: 0.65rem;
  line-height: 1rem;
  color: #85847a;
  text-align: start;
`

const Title = styled.h2`
  font-size: 1.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  margin: 0 0 0.5rem 0;
`

const Value = styled.div`
  line-height: 1rem;

`

const Separator = styled.div`
  height: 1px;
  background-color: black;
  margin: 0.25rem 0;
`