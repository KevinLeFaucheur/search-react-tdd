import React, { useState } from 'react'
import { styled } from 'styled-components';

export const Select = ({ options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setShowMenu(false);
  }

  return (
    <Container>

      <Selector onClick={handleShowMenu}>
        {selectedValue ? selectedValue : 'Click Me'}
      </Selector>
      {showMenu && options && <Menu>
        {options.map((option, i) => 
          <Option 
            key={i}
            onClick={() => handleOptionClick(option)}
            selected={option === selectedValue}
          >{option}</Option>
        )}
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
  background-color: ${({ selected }) => selected ? '#ff6c59' : ''};

  &:hover{
    background-color: #7dadf5;
  }
`