import React from "react";
import styled from "styled-components";
import {FormControl, RadioGroup} from "@mui/material";

const SmallQuestionBlock = ({title, gridColumnProperty, announcement, onChange, children}) => {
    return (
        <Block>
            <Title>
                {title}
            </Title>
            <Content>
                <FormControl fullWidth={true} >
                    <RadioGroup onChange={onChange}>
                        <ContentGrid gridColumnProperty={gridColumnProperty}>
                            {children}
                        </ContentGrid>
                    </RadioGroup>
                </FormControl>
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
  width: 20%;
  padding-right: 10px;
  border-right: 3px solid ${(props) => props.theme.innerShadowColor};

  text-align: start;
`

const Content = styled.div`
  width: 82%;
  padding-left: 20px;
`

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.gridColumnProperty};

`

export default SmallQuestionBlock;