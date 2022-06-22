import React from "react";
import styled from "styled-components";

const CenterBox = ({size, weight, children}) => <Box size={size} weight={weight}>{children}</Box>

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
`

export default CenterBox;