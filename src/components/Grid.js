import React from "react";
import styled from "styled-components";
import { useWindowWidth } from '@react-hook/window-size/throttled'

const Grid = ({strict, gridColumnProperty, gridRowProperty, rowGap, columnGap, margin, children}) => {
    const browserWidth = useWindowWidth();

    return (
        <ContentGrid strict={strict} gridColumnProperty={gridColumnProperty} gridRowProperty={gridRowProperty} rowGap={rowGap}
                     columnGap={columnGap} margin={margin} browserWidth={browserWidth}>
            {children}
        </ContentGrid>
    )
}

const ContentGrid = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-columns: ${(props) => !props.strict && props.browserWidth < 800 ? "1fr" : props.gridColumnProperty};
  grid-template-rows: ${(props) => props.gridRowProperty};
  row-gap: ${(props) => props.rowGap ? props.rowGap : 0}px;
  column-gap: ${(props) => props.columnGap ? props.columnGap : 0}px;
  
  margin: ${(props) => props.margin && props.margin};
`

export default Grid;