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
  padding-bottom: 10px;

  text-align: start;
`

const Content = styled.div`
  width: 100%;
`

export default QuestionBlock;