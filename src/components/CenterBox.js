import React from "react";
import styled from "styled-components";

const CenterBox = ({start, size, weight, padding, children}) => (
    <Box start={start} size={size} weight={weight} padding={padding}>{children}</Box>
)

const Box = styled.div`
  display: flex;
  justify-content: ${(props) => props.start ? 'flex-start' : 'center'};
  align-items: center;
  text-align: ${(props) => !props.start && 'center'};
  
  padding: ${(props) => props.padding}px;
  
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  word-break: keep-all;
`

export default CenterBox;