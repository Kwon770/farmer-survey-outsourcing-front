import React from "react";
import styled from "styled-components";
import {Button, Snackbar, Step, StepLabel, Stepper} from "@mui/material";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SectorFooter = ({farmer, last, sector, movePreviousSector, moveNextSector, alertOpen, setAlertOpen}) => {

    const farmerSteps = ['응답자 기본 정보', "청년농업인 농지 이용형태 및 수요", '농업 스마트업단지 조성사업 참여 의향', '농지매입 경험'];
    const notFarmerSteps = ['응답자 기본 정보', '농업 스마트업단지 조성사업 참여 의향'];
    return (
        <Footer>
            <Button variant='text' style={{fontSize: 23}} onClick={movePreviousSector} disabled={sector === 1}>이전</Button>

            <Stepper activeStep={sector - 1} alternativeLabel>
                {
                    farmer === "false" ? (
                        notFarmerSteps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))
                    ) : (
                        farmerSteps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))
                    )
                }
            </Stepper>

            <Button variant='text' style={{fontSize: 23}} onClick={moveNextSector}>
                {last ? '제출' : '다음'}
            </Button>

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