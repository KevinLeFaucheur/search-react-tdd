import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';

export const Select = ({ name, color, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const handler = (e) => { 
      if(inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false); 
      }
    }

    window.addEventListener('click', handler);
    return () => { window.removeEventListener('click', handler) }
  }, [showMenu])

  const handleShowMenu = () => {
    setShowMenu(true);
  }

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setShowMenu(false);
  }

  return (
    <Container ref={inputRef}>

      <Selector onClick={handleShowMenu} color={color}>
        {showMenu ? <Input /> : name ? name : selectedValue }
      </Selector>
      {showMenu && options && <Menu color={color}>
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
  background-color: ${({ color }) => color ? color : '#3282F7' };
  color: white;
  padding-left: 0.5rem;
  text-align: left;
  border-radius: 5px;
  user-select: none;
  line-height: 35px;
  box-sizing: border-box;
`

const Input = styled.input`
  padding-left: 0.5rem;
  border: none;
  background-color: transparent;
  font-family: 'Signika', sans-serif;
  font-size: 1rem;
  color: white;

  &:focus {
    outline: none;
  }
`

const Menu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow-x: scroll;
  margin-top: 1px;
  left: 0;
  height: fit-content;
  max-height: 150px;
  width: 100%;
  padding: 10px;
  background-color: ${({ color }) => color ? color : '#3282F7' };
  color: white;
  z-index: 10;
  border-radius: 5px;
  
  &::-webkit-scrollbar {
    height: 10px;
  }
 
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ color }) => color ? color : '#3282F7' };
    outline: 1px solid ${({ color }) => color ? color : '#3282F7' };
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
    border-radius: 15px;
  }
`

const Option = styled.div`
  height: 25px;
  width: 150px;
  text-align: start;
  user-select: none;
  background-color: ${({ selected }) => selected ? '#ff6c59' : ''};

  &:hover{
    background-color: #7dadf5;
  }
`