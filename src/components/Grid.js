import React from "react";
import styled from "styled-components";
import { useWindowWidth } from '@react-hook/window-size/throttled'

const Grid = ({gridColumnProperty, gridRowProperty, rowGap, columnGap, children}) => {
    const browserWidth = useWindowWidth();

    return (
        <ContentGrid gridColumnProperty={gridColumnProperty} gridRowProperty={gridRowProperty} rowGap={rowGap}
                     columnGap={columnGap} browserWidth={browserWidth}>
            {children}
        </ContentGrid>
    )
}

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.browserWidth < 800 ? "1fr" : props.gridColumnProperty};
  grid-template-rows: ${(props) => props.gridRowProperty};
  row-gap: ${(props) => props.rowGap ? props.rowGap : 0}px;
  column-gap: ${(props) => props.columnGap ? props.columnGap : 0}px;
`

export default Grid;