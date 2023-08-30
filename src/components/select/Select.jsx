import React, { useState } from 'react'
import { styled } from 'styled-components';

export const Select = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <Container>
      <Selector onClick={handleShowMenu}>
        Click Me
      </Selector>
      {showMenu && <Menu>
        <Option>Test</Option>
        <Option>Test</Option>
        <Option>Test</Option>
        <Option>Test</Option>
      </Menu>}

    </Container>
  )
}

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100px;
`

const Selector = styled.div`
  height: 30px;
  width: 100%;
  background-color: #3282F7;
  color: white;
  border-radius: 5px;
  user-select: none;
`

const Menu = styled.div`
  position: absolute;
  left: 0;
  height: 100px;
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
`