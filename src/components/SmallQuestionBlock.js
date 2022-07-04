import React from "react";
import styled from "styled-components";

const SmallQuestionBlock = ({title, announcement, children}) => {
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

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 22%;
  padding-right: 10px;
  border-right: 3px solid ${(props) => props.theme.innerShadowColor};

  text-align: start;
  font-size: 19px;
  font-weight: normal;
  color: ${(props) => props.theme.titleFontColor};
`

const Content = styled.div`
  width: 82%;
  padding-left: 20px;

  font-size: 16px;
  font-weight: normal;
  color: ${(props) => props.theme.contentFontColor};
`

export default SmallQuestionBlock;