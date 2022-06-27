import React from "react";
import styled from "styled-components";

const QuestionBlock = ({title, announcement, onChange, children}) => {
    return (
        <Block>
            <Title>
                {title}
            </Title>
            <Content>
                {children}
                {announcement}
            </Content>
        </Block>
    )
}

const Block = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.blockPadding};
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderShadowColor};
  border-radius: ${(props) => props.theme.blockBorder};

  margin-bottom: ${(props) => props.theme.blockMargin};
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 15px;

  text-align: start;
  font-size: 17px;
  font-weight: normal;
  color: ${(props) => props.theme.titleFontColor};
`

const Content = styled.div`
  width: 100%;
  margin-top: 5px;
  
  font-size: 16px;
  font-weight: normal;
  color: ${(props) => props.theme.contentFontColor};
`

export default QuestionBlock;