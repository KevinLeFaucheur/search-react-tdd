import React from 'react'
import { styled } from 'styled-components'

export const Search = () => {
  return (
    <SearchContainer>
      <SearchInput type="search" placeholder="Search here" />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  margin-bottom: 1rem;
`

const SearchInput = styled.input`
  height: 3rem;
  background-color: #E7E7E7;
  border-radius: 5px;
  padding-left: 1%;
  border: none;
`