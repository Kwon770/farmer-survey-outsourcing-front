import React from "react";
import styled from "styled-components";

const TextBlock = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.blockPadding};
  text-align: ${(props) => props.start ? "start" : "center"};
  font-size: 18px;
  line-height: 25px;

  background-color: white;
  border-radius: ${(props) => props.theme.blockBorder};
  border: 1px solid ${(props) => props.theme.borderShadowColor};

  margin-bottom: ${(props) => props.theme.blockMargin};

  display: inline-block;
  line-break: normal;
`

export default TextBlock;