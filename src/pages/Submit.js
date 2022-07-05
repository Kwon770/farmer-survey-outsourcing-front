import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Backdrop, CircularProgress} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import axios from 'axios';

const Submit = () => {
    const [open, setOpen] = useState(true);
    const [error, setError] = useState(false);
    const [hmm, setHmm] = useState(false);

    useEffect(() => {
        submitSurvey();

        setOpen(false);
    }, [])

    async function submitSurvey() {
        const farmer = localStorage.getItem("farmer");


        if (
            localStorage.getItem('sector1') === null ||
            (farmer === "true" && localStorage.getItem('sector2') === null) ||
            localStorage.getItem('sector3') === null ||
            (farmer === "true" && localStorage.getItem('sector4') === null)
        ) {
            setHmm(true);
            return;
        }


        let surveyData = {}

        const sector1Data = JSON.parse(localStorage.getItem('sector1'));
        Object.assign(surveyData, sector1Data);


        if (farmer === "true") {
            const sector2Data = JSON.parse(localStorage.getItem('sector2'));
            Object.assign(surveyData, sector2Data);
        } else {
            const sector2Data = {
                's2b1_1': '',
                's2b1_2': '',
                's2b1_3': '',
                's2b1_4': '',
                's2b1_5': '',
                's2b2': '',
                's2b3b1_1': '',
                's2b3b1_2': '',
                's2b3b1_3': '',
                's2b3b1_4': '',
                's2b3b1_5': '',
                's2b3b2_1': '',
                's2b3b2_2': '',
                's2b3b3': '',
                's2b4': '',
                's2b4b1_1': '',
                's2b4b1_2': '',
                's2b4b2_1': '',
                's2b4b2_2': ''
            }
            Object.assign(surveyData, sector2Data);
        }


        const sector3Data = JSON.parse(localStorage.getItem('sector3'));
        Object.assign(surveyData, sector3Data);



        if (farmer === "true") {
            const sector4Data = JSON.parse(localStorage.getItem('sector4'));
            Object.assign(surveyData, sector4Data);
        } else {
            const sector4Data = {
                's4b1': '',
                's4b2': '',
                's4b2b1': '',
                's4b2b2_1': '',
                's4b2b2_2': '',
                's4b2b3': '',
                's4b3': ''
            }
            Object.assign(surveyData, sector4Data);
        }


        const response = await axios.post(process.env.REACT_APP_SERVER_API_URL + "/submit?secret=" + process.env.REACT_APP_SERVER_SECRET, surveyData);
        console.log(response);
        if (response === undefined || response === null || response?.data === undefined || response?.data === null) {
            setError(true);
        }


        localStorage.clear();
    }

    return (
        <Center>
            <Block>
                {
                    hmm ? (
                        <>
                            <HelpOutlineIcon color={"info"} style={{fontSize: 150}}/>
                            <Text>이미 제출했거나, <br/>올바르지 않은 접근이에요.</Text>
                        </>
                    ) : (
                        <>
                            {
                                !open &&
                                <>
                                    {
                                        error ? (
                                            <>
                                                <ErrorOutlineIcon color={"error"} style={{fontSize: 150}}/>
                                                <Text>오류가 발생했어요. <br/>새로고침 해보세요!</Text>
                                            </>
                                        ) : (
                                            <>
                                                <CheckCircleOutlineIcon color={"success"} style={{fontSize: 150}}/>
                                                <Text>제출되었어요. <br/>감사합니다!</Text>
                                            </>
                                        )
                                    }
                                </>
                            }
                        </>
                    )
                }
            </Block>

            <Backdrop open={open}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </Center>
    )
}

const Block = styled.div`
  width: 40vw;
  height: 40vw;
  padding: ${(props) => props.theme.blockPadding};
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderShadowColor};
  border-radius: ${(props) => props.theme.blockBorder};

  margin-bottom: ${(props) => props.theme.blockMargin};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin-top: 15px;

  font-weight: bold;
  font-size: 25px;
  color: ${(props) => props.theme.titleFontColor};
  text-align: center;
`

const Center = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default Submit;