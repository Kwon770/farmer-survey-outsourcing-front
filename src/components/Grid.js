import React from "react";
import styled from "styled-components";

const Grid = ({gridColumnProperty, rowGap, columnGap, children}) => {
    return (
        <ContentGrid gridColumnProperty={gridColumnProperty} rowGap={rowGap} columnGap={columnGap}>
            {children}
        </ContentGrid>
    )
}

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.gridColumnProperty};
  row-gap: ${(props) => props.rowGap ? props.rowGap : 0}px;
  column-gap: ${(props) => props.columnGap ? props.columnGap : 0}px;
`

export default Grid;