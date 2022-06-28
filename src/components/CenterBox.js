import React from "react";
import styled from "styled-components";

const CenterBox = ({size, weight, padding, children}) => (
    <Box size={size} weight={weight} padding={padding}>{children}</Box>
)

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  padding: ${(props) => props.padding}px;
  
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
`

export default CenterBox;