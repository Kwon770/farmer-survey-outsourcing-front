import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import SectorFooter from "../components/SectorFooter";
import {
    Button,
    Checkbox, Dialog,
    DialogActions,
    DialogTitle,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField, useMediaQuery
} from "@mui/material";
import QuestionBlock from "../components/QuestionBlock";
import Grid from "../components/Grid";
import CenterBox from "../components/CenterBox";

const Sector4 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);
    const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
    const [farmer, setFarmer] = useState("");

    useEffect(() => {
        setFarmer(localStorage.getItem("farmer"));

    //     if (localStorage.getItem('sector4') === null) {
    //         movePreviousSector();
    //     }
    }, [])


    const [s4b1, setS4b1] = useState('');

    const [s4b2, setS4b2] = useState('');

    const [s4b2b1, setS4b2b1] = useState('');
    const [s4b2b2_1, setS4b2b2_1] = useState('');
    const [s4b2b2_2, setS4b2b2_2] = useState('');
    const [s4b2b2Data, setS4b2b2Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false,
        false,
        false // 8
    ])
    const [s4b2b3, setS4b2b3] = useState('');

    const [s4b3, setS4b3] = useState('');



    const handleS4b1 = (e) => {
        setS4b1(e.target.value);

        if (e.target.value === '2') {
            resetS4b1_1s();
        }
    }
    const resetS4b1_1s = () => {
        setS4b2('');

        resetS4b2_13s();
    }

    const handleS4b2 = (e) => {
        setS4b2(e.target.value);

        if (e.target.value === '2') {
            resetS4b2_13s();
        }
    }
    const resetS4b2_13s = () => {
        setS4b2b1('');

        setS4b2b2_1('');
        setS4b2b2_2('');
        setS4b2b2Data(s4b2b2Data.map(() => false));

        setS4b2b3('');
    }

    const handleS4b2b1 = (e) => {
        setS4b2b1(e.target.value);
    }

    const handleS4b2b2 = (e) => {
        // 2??? ?????? ????????? ??????
        let checking = false;
        let checkable = s4b2b2_1 === '' || s4b2b2_2 === ''
        s4b2b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2??? ?????? ????????? ??????
        if (checking && !checkable) {
            return
        }
        //

        setS4b2b2Data(s4b2b2Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s4b2b2_1 === '') setS4b2b2_1(e.target.name);
            else if (s4b2b2_2 === '') setS4b2b2_2(e.target.name);
        } else {
            if (s4b2b2_1 === e.target.name) setS4b2b2_1('');
            else if (s4b2b2_2 === e.target.name) setS4b2b2_2('');
        }
    }

    const handleS4b2b3 = (e) => {
        setS4b2b3(e.target.value);
    }



    const validateAllWritten = () => {
        if (s4b1 === '') {
            return false;
        }

        if (s4b1 === '1') {
            if (s4b2 === '')
                return false;

            if (s4b2 === '1' || s4b2 === '3') {
                if (
                    s4b2b1 === '' ||
                    s4b2b2_1 === '' || s4b2b2_2 === '' ||
                    s4b2b3 === ''
                ) {
                    return false;
                }
            }
        }


        return true;
    }

    const saveSector4Data = () => {
        const sector4DataObject = {
            's4b1': s4b1,
            's4b2': s4b2,
            's4b2b1': s4b2b1,
            's4b2b2_1': s4b2b2_1,
            's4b2b2_2': s4b2b2_2,
            's4b2b3': s4b2b3,
            's4b3': s4b3
        }

        localStorage.setItem('sector4', JSON.stringify(sector4DataObject))

    }

    const movePreviousSector = () => {
        navigate('/3');
    }

    const handleSubmitDialogOpen = () => {
        setSubmitDialogOpen(true);
    }
    const handleSubmitDialogClose = () => {
        setSubmitDialogOpen(false);
    }

    const moveNextSector = () => {
        if (!validateAllWritten()) {
            setAlertOpen(true)
            return
        }

        saveSector4Data()
        handleSubmitDialogOpen();
    }

    const submitSurvey = () => {
        navigate('/submit');
    }

    return (
        <Background>
            <TitleBlock>
                4. ???????????? ??????
            </TitleBlock>


            <QuestionBlock title={<div>4-1 ??????????????? ????????? ????????? ????????? ????????????????</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS4b1}>
                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='???'/>
                            <FormControlLabel value='2' control={<Radio/>} label='?????????'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                (s4b1 === '1') &&
                <>
                    <strong><em>??? 4-1.???????????? 1?????? ???????????? ?????? ??????????????????.</em></strong>
                    <QuestionBlock title={<div>4-2. ??????????????? ?????? ????????? ????????? ??????????????????????</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS4b2}>
                                <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='?????? ??? ????????? ?????????'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='??????????????? ?????????'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='1,2??? ??????'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    {
                        (s4b2 === '1' || s4b2 === '3') &&
                        <>
                            <strong><em>??? 4-2.???????????? 1, 3?????? ???????????? ?????? ??????????????????.</em></strong>
                            <QuestionBlock title={<div>4-2-1. ????????? ????????? ????????? ????????? ?????? ????????? ?????? ???????????? ??????????????????????</div>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS4b2b1}>
                                        <Grid gridColumnProperty={"repeat(4,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label='????????????(3???) ??? ??????????????????'/>
                                            <FormControlLabel value='2' control={<Radio/>} label='?????? ??? ???????????? ??????'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='????????? ??? ????????????'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='????????????'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>


                            <strong><em>??? 4-2.???????????? 1, 3?????? ???????????? ?????? ??????????????????.</em></strong>
                            <QuestionBlock title={<div>4-2-2. ??????????????? ?????? ????????? ????????? ????????? ???????????? ?????? ????????? ????????????????</div>}>
                                <FormControl fullWidth>
                                    <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                        <FormControlLabel
                                            control={<Checkbox name='1' checked={s4b2b2Data[1]}
                                                               onChange={handleS4b2b2}/>}
                                            label='1. ?????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='2' checked={s4b2b2Data[2]}
                                                               onChange={handleS4b2b2}/>}
                                            label='2. ????????? ?????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='3' checked={s4b2b2Data[3]}
                                                               onChange={handleS4b2b2}/>}
                                            label='3. ????????? ?????????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='4' checked={s4b2b2Data[4]}
                                                               onChange={handleS4b2b2}/>}
                                            label='4. ??????????????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='5' checked={s4b2b2Data[5]}
                                                               onChange={handleS4b2b2}/>}
                                            label='5. ???????????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='6' checked={s4b2b2Data[6]}
                                                               onChange={handleS4b2b2}/>}
                                            label='6, ????????? ?????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='7' checked={s4b2b2Data[7]}
                                                               onChange={handleS4b2b2}/>}
                                            label='7. ??????????????? ?????? ?????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='8' checked={s4b2b2Data[8]}
                                                               onChange={handleS4b2b2}/>}
                                            label='8. ???????????? ??????'/>

                                        <CenterBox size={20} weight={500} padding={20}>
                                            1?????? :&nbsp;&nbsp;(&nbsp;<strong>{s4b2b2_1}</strong>&nbsp;)
                                        </CenterBox>
                                        <CenterBox size={20} weight={500} padding={20}>
                                            2?????? :&nbsp;&nbsp;(&nbsp;<strong>{s4b2b2_2}</strong>&nbsp;)
                                        </CenterBox>
                                    </Grid>
                                </FormControl>
                            </QuestionBlock>


                            <strong><em>??? 4-2.???????????? 1, 3?????? ???????????? ?????? ??????????????????.</em></strong>
                            <QuestionBlock title={<div>4-2-3. ??????????????? ?????? ??? ?????? ??? ??????????????? ??????????????? ?????? ?????? ??? ??????????????? ????????? ???????????????????</div>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS4b2b3}>
                                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label='?????? ??????(30% ??????)'/>
                                            <FormControlLabel value='2' control={<Radio/>} label='?????? ?????????(10~30%)'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='????????????(10% ??????)'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='?????? ?????????(10~30%)'/>
                                            <FormControlLabel value='5' control={<Radio/>} label='?????? ??????(30% ??????)'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>
                        </>
                    }
                </>
            }


            <QuestionBlock title={<div>4-3. ?????? ????????? ????????? ????????????????????? ???????????? ??????????????? ?????? ????????? ????????????????????? ???????????? ??? ??? ????????? ?????? ?????? ?????? ????????? ????????? ?????? ????????? ???????????? ???????????? ????????? ????????? ????????????.</div>}>
                <FormControl fullWidth>
                    <TextField value={s4b3} onChange={(e) => setS4b3(e.target.value)} multiline minRows={6}/>
                </FormControl>
            </QuestionBlock>


            <SectorFooter farmer={farmer} sector={4} last={true} movePreviousSector={movePreviousSector} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
            <Dialog open={submitDialogOpen} onClose={handleSubmitDialogClose}>
                <DialogTitle>
                    ??????????????? ?????????????????????????
                </DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmitDialogClose}>
                        ?????????
                    </Button>
                    <Button onClick={submitSurvey} autoFocus>
                        ???
                    </Button>
                </DialogActions>
            </Dialog>
        </Background>
    )
}

export default Sector4;