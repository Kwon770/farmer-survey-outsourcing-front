import React from "react";
import styled from "styled-components";
import {FormControl, RadioGroup} from "@mui/material";

const QuestionBlock = ({title, gridColumnProperty, rowGap, columnGap, announcement, onChange, children}) => {
    return (
        <Block>
            <Title>
                {title}
            </Title>
            <Content>
                <FormControl fullWidth={true} >
                    <RadioGroup onChange={onChange}>
                        <ContentGrid gridColumnProperty={gridColumnProperty} rowGap={rowGap} columnGap={columnGap}>
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
`;

const Title = styled.div`
  width: 100%;
  padding-bottom: 10px;

  text-align: start;
`

const Content = styled.div`
  width: 100%;
`

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.gridColumnProperty};
  row-gap: ${(props) => props.rowGap ? props.rowGap : 0}px;
  column-gap: ${(props) => props.columnGap ? props.columnGap : 0}px;

`

export default QuestionBlock;