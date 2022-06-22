import React from "react";
import styled from "styled-components";

const SmallQuestionBlock = ({title, gridColumnProperty, announcement, children}) => {
    return (
        <Block>
            <Title>
                {title}
            </Title>
            <Content>
                <ContentGrid gridColumnProperty={gridColumnProperty}>
                    {children}
                </ContentGrid>
                {announcement}
            </Content>
        </Block>
    )
}

const Block = styled.div`
  width: ${(props) => props.theme.blockWidth};
  padding: ${(props) => props.theme.blockPadding};
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderShadowColor};
  border-radius: ${(props) => props.theme.blockBorder};

  margin-top: ${(props) => props.theme.blockMargin};
  
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 20%;
  padding-right: 10px;
  border-right: 3px solid ${(props) => props.theme.innerShadowColor};
  
  text-align: start;
`

const Content = styled.div`
  width: 82%;
  padding: 0px 20px;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumnProperty};
  
  margin-bottom: 10px;
`

export default SmallQuestionBlock;