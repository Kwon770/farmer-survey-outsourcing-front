import React from "react";
import styled from "styled-components";

const Grid = ({gridColumnProperty, children}) => {
    return (
        <ContentGrid gridColumnProperty={gridColumnProperty}>
            {children}
        </ContentGrid>
    )
}

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.gridColumnProperty};
`

export default Grid;