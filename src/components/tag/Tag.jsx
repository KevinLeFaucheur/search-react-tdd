import React from 'react'
import { styled } from 'styled-components'

export const Tag = ({ tag }) => {
  return (
    <Container>
      {tag}
      <Close>x</Close>
    </Container>
  )
}

const Container = styled.div`
  background-color: #3282F7;
  color: white;
  border-radius: 5px;
  padding: 8px 10px;
  width: fit-content;
  margin-right: 1rem;
`

const Close = styled.button`
  appearance: none;
  background: none;
  color: white;
  border: none;
`