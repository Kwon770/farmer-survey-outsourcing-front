import React from "react";
import styled from "styled-components";
import {Button, Step, StepLabel, Stepper} from "@mui/material";

const SectorFooter = ({sector, movePreviousSector, moveNextSector}) => {

    const steps = ['응답자 정보', '농지 수요', '스마트팜 수요', '저활용 농지 수요', "농업 스타트업단지 조성사업 참여 의향"]
    return (
        <Footer>
            <Button variant='text' onClick={movePreviousSector}>이전</Button>

            <Stepper activeStep={sector} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Button variant='text' onClick={moveNextSector}>다음</Button>
        </Footer>
    )
}

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`

export default SectorFooter;