import React from 'react';
import styled from "styled-components";

const ColorCenterBlock = styled.div`
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.innerHighlightColor};

`

export default ColorCenterBlock;