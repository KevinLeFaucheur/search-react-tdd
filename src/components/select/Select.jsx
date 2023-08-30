import React, { useState } from 'react'
import { styled } from 'styled-components';

export const Select = ({ options }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <Container>
      <Selector onClick={handleShowMenu}>
        Click Me
      </Selector>
      {showMenu && options && <Menu>
        {options.map((option, i) => <Option key={i}>{option}</Option>)}
      </Menu>}

    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 35px;
`

const Selector = styled.div`
  height: 100%;
  width: 100%;
  background-color: #3282F7;
  color: white;
  border-radius: 5px;
  user-select: none;
  line-height: 35px;
`

const Menu = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-top: 1px;
  left: 0;
  height: fit-content;
  width: 100%;
  padding: 10px;
  background-color: #3282F7;
  color: white;
  z-index: 10;
  border-radius: 5px;
`
const Option = styled.div`
  height: 25px;
  user-select: none;

  &:hover{
    background-color: #7dadf5;
  }
`