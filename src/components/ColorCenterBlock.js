import React from 'react';
import styled from "styled-components";

const ColorCenterBlock = ({size, weight, padding, children}) => (
    <Block size={size} weight={weight} padding={padding}>{children}</Block>
)


const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  background-color: ${(props) => props.theme.innerHighlightColor};
  border-radius: ${(props) => props.theme.blockBorder};

  padding: ${(props) => props.padding ? props.padding : 8}px;
  
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};

`

export default ColorCenterBlock;