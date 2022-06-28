import React from "react";
import styled from 'styled-components';

const GridImg = ({src}) => (
    <Image src={src} />
);

const Image = styled.img`
  width: 100%;
`

export default GridImg