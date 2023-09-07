import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { TagContext } from '../TagContext';

export const Tag = ({ tag }) => {
  const { tags, setTags } = useContext(TagContext);

  const handleOnClick = () => {
    setTags(tags.filter(t => t !== tag));
  }

  return (
    <Container>
      {tag}
      <Close onClick={handleOnClick}>x</Close>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #3282F7;
  width: 90px;
  color: white;
  border-radius: 5px;
  padding: 8px 12px;
  margin-right: 1rem;
`

const Close = styled.button`
  appearance: none;
  background: none;
  color: white;
  border: none;
`