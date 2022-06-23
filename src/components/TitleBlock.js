import React from "react";
import styled from "styled-components";

const TitleBlock = styled.div`
  width: 100%;
  padding: 13px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: white;

  background-color: ${(props) => props.theme.highlightColor};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderShadowColor};

  margin-top: 60px;
  margin-bottom: 40px;
`

export default TitleBlock;