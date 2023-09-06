import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { TagContext } from '../TagContext';

export const Tag = ({ tag }) => {
  const { tags, setTags } = useContext(TagContext);

  const handleOnClick = () => {
    let newTags = tags.filter(t => t !== tag);
    setTags(newTags);
  }

  return (
    <Container>
      {tag}
      <Close onClick={handleOnClick}>x</Close>
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