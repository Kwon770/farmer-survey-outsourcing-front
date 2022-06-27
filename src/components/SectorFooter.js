import React from "react";
import styled from "styled-components";
import {Alert, Button, Snackbar, Step, StepLabel, Stepper} from "@mui/material";

const SectorFooter = ({sector, movePreviousSector, moveNextSector, alertOpen, setAlertOpen}) => {

    const steps = ['응답자 정보', "농업 스타트업단지 조성사업 참여 의향", '농지 수요', '스마트팜 수요', '저활용 농지 수요']
    return (
        <Footer>
            <Button variant='text' onClick={movePreviousSector} disabled={sector === 1}>이전</Button>

            <Stepper activeStep={sector - 1} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Button variant='text' onClick={moveNextSector}>{sector !== 5 ? '다음' : '제출'}</Button>

            <Snackbar autoHideDuration={3500} open={alertOpen} onClose={() => setAlertOpen(false)}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert severity='error'>완료하지 않은 질문이 있습니다!</Alert>
            </Snackbar>
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