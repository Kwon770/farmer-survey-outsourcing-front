import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Button,
    Checkbox, Dialog, DialogActions, DialogTitle,
    FormControl,
    FormControlLabel,
    InputAdornment,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import TextBlock from "../components/TextBlock";
import SectorFooter from "../components/SectorFooter";
import QuestionBlock from "../components/QuestionBlock";
import ColorCenterBlock from "../components/ColorCenterBlock";
import CenterBox from "../components/CenterBox";
import Grid from "../components/Grid";
import GridImg from "../components/GridImg";

const OldSector5 = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    const [s5b1_1, setS5b1_1] = useState('');
    const [s5b1_2, setS5b1_2] = useState('');
    const [s5b1_3, setS5b1_3] = useState('');

    const [s5b2b1_1, setS5b2b1_1] = useState('');
    const [s5b2b1_2, setS5b2b1_2] = useState('');
    const [s5b2b1_3, setS5b2b1_3] = useState('');

    const [s5b2b2_1, setS5b2b2_1] = useState('');
    const [s5b2b2_2, setS5b2b2_2] = useState('');
    const [s5b2b2_3, setS5b2b2_3] = useState('');

    const [s5b3b1_1, setS5b3b1_1] = useState('');
    const [s5b3b1_2, setS5b3b1_2] = useState('');
    const [s5b3b1_3, setS5b3b1_3] = useState('');

    const [s5b3b2_1, setS5b3b2_1] = useState('');
    const [s5b3b2_2, setS5b3b2_2] = useState('');
    const [s5b3b2_Etc7, setS5b3b2_Etc7] = useState('');
    const [s5b3b2_Etc8, setS5b3b2_Etc8] = useState('');
    const [s5b3b2Data, setS5b3b2Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false,
        false,
        false, // 8
    ])

    const [s5b4, setS5b4] = useState('');
    const [s5b5, setS5b5] = useState('');
    const [s5b6_1, setS5b6_1] = useState('');
    const [s5b6_2, setS5b6_2] = useState('');
    const [s5b6_Etc8, setS5b6_Etc8] = useState('');
    const [s5b6_Etc9, setS5b6_Etc9] = useState('');
    const [s5b6Data, setS5b6Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false, // 9
    ]);

    const [s5b7, setS5b7] = useState('');
    const [s5b8, setS5b8] = useState('');
    const [s5b9_1, setS5b9_1] = useState('');
    const [s5b9_2, setS5b9_2] = useState('');
    const [s5b9_Etc8, setS5b9_Etc8] = useState('');
    const [s5b9_Etc9, setS5b9_Etc9] = useState('');
    const [s5b9Data, setS5b9Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false, // 9
    ]);


    // useEffect(() => {
    //     if (localStorage.getItem('sector4') === null) {
    //         movePreviousSector();
    //     }
    // }, [])


    const handleS5b1_1 = ({target: {value}}) => {
        setS5b1_1(value);

        if (value === '1') {
            setS5b2b2_1('');
            setS5b3b1_1('');

            resetS5b3b2();

        } else if (value === '2') {
            setS5b2b1_1('');
            setS5b3b1_1('');

            resetS5b3b2();

        } else if (value === '3') {
            setS5b2b1_1('');
            setS5b2b2_1('');

            setS5b1_2('')
            setS5b1_3('')
        }
    }
    const handleS5b1_2 = ({target: {value}}) => {
        setS5b1_2(value);

        if (value === '1') {
            setS5b2b2_2('');
            setS5b3b1_2('');

            resetS5b3b2();

        } else if (value === '2') {
            setS5b2b1_2('');
            setS5b3b1_2('');

            resetS5b3b2();

        } else if (value === '3') {
            setS5b2b1_2('');
            setS5b2b2_2('');

            setS5b1_3('')
        }
    }
    const handleS5b1_3 = ({target: {value}}) => {
        setS5b1_3(value);

        if (value === '1') {
            setS5b2b2_3('');
            setS5b3b1_3('');

            resetS5b3b2();

        } else if (value === '2') {
            setS5b2b1_3('');
            setS5b3b1_3('');

            resetS5b3b2();

        } else if (value === '3') {
            setS5b2b1_3('');
            setS5b2b2_3('');
        }
    }

    const handleS5b2b1_1 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b2b1_1(value);
    }
    const handleS5b2b1_2 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b2b1_2(value);
    }
    const handleS5b2b1_3 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b2b1_3(value);
    }

    const handleS5b2b2_1 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b2b2_1(value);
    }
    const handleS5b2b2_2 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b2b2_2(value);
    }
    const handleS5b2b2_3 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b2b2_3(value);
    }

    const handleS5b3b1_1 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b3b1_1(value);
    }
    const handleS5b3b1_2 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b3b1_2(value);
    }
    const handleS5b3b1_3 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b3b1_3(value);
    }

    const resetS5b3b2 = () => {
        setS5b3b2_1('');
        setS5b3b2_2('');
        setS5b3b2_Etc7('');
        setS5b3b2_Etc8('');

        setS5b3b2Data(s5b3b2Data.map(() => false));
    }

    const handleS5b3b2 = (e) => {
        // 2??? ?????? ????????? ??????
        let checking = false;
        let checkable = s5b3b2_1 === '' || s5b3b2_2 === '';
        s5b3b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2??? ?????? ????????? ??????
        if (checking && !checkable) {
            return
        }
        //

        setS5b3b2Data(s5b3b2Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s5b3b2_1 === '') setS5b3b2_1(e.target.name);
            else setS5b3b2_2(e.target.name);
        } else {
            if (s5b3b2_1 === e.target.name) setS5b3b2_1('');
            else setS5b3b2_2('');
        }
    }

    const handleS5b4 = (e) => {
        setS5b4(e.target.value);

        if (e.target.value === '1') {
            resetS5b6();
        } else if (e.target.value === '1') {
            resetS5b5();
        }
    }

    const resetS5b5 = () => {
        setS5b5('');
    }
    const handleS5b5 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b5(value);
    }

    const resetS5b6 = () => {
        setS5b6_1('');
        setS5b6_2('');
        setS5b6_Etc8('');
        setS5b6_Etc9('');
        setS5b6Data(s5b6Data.map(() => false));
    }
    const handleS5b6 = (e) => {
        // 2??? ?????? ????????? ??????
        let checking = false;
        let checkable = s5b6_1 === '' || s5b6_2 === '';
        s5b6Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2??? ?????? ????????? ??????
        if (checking && !checkable) {
            return
        }
        //

        setS5b6Data(s5b6Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s5b6_1 === '') setS5b6_1(e.target.name);
            else setS5b6_2(e.target.name);
        } else {
            if (s5b6_1 === e.target.name) setS5b6_1('');
            else setS5b6_2('');
        }
    }

    const handleS5b7 = (e) => {
        setS5b7(e.target.value);

        if (e.target.value === '1') {
            resetS5b9();
        } else if (e.target.value === '2') {
            resetS5b8();
        }
    }

    const resetS5b8 = () => {
        setS5b8('');
    }
    const handleS5b8 = ({target: {value}}) => {
        if (value.length > 3) {
            return;
        }

        setS5b8(value);
    }

    const resetS5b9 = () => {
        setS5b9_1('');
        setS5b9_2('');
        setS5b9_Etc8('');
        setS5b9_Etc9('');
        setS5b9Data(s5b9Data.map(() => false));
    }
    const handleS5b9 = (e) => {
        // 2??? ?????? ????????? ??????
        let checking = false;
        let checkable = s5b9_1 === '' || s5b9_2 === '';
        s5b9Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2??? ?????? ????????? ??????
        if (checking && !checkable) {
            return
        }
        //

        setS5b9Data(s5b9Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s5b9_1 === '') setS5b9_1(e.target.name);
            else setS5b9_2(e.target.name);
        } else {
            if (s5b9_1 === e.target.name) setS5b9_1('');
            else setS5b9_2('');
        }
    }

    const validateAllWritten = () => {
        if (
            s5b1_1 === '' ||
            s5b4 === '' ||
            s5b7 === ''
        ) {
            return false;
        }


        if (s5b1_1 === '1' || s5b1_1 === '2')
            if (s5b1_2 === '')
                return false;

        if (s5b1_2 === '1' || s5b1_2 === '2')
            if (s5b1_3 === '')
                return false;


        if (s5b1_1 === '1')
            if (s5b2b1_1 === '')
                return false;
        if (s5b1_2 === '1')
            if (s5b2b1_2 === '')
                return false;
        if (s5b1_3 === '1')
            if (s5b2b1_3 === '')
                return false;

        if (s5b1_1 === '2')
            if (s5b2b2_1 === '')
                return false;
        if (s5b1_2 === '2')
            if (s5b2b2_2 === '')
                return false;
        if (s5b1_3 === '2')
            if (s5b2b2_3 === '')
                return false;

        if (s5b1_1 === '3')
            if (s5b3b1_1 === '')
                return false;
        if (s5b1_2 === '3')
            if (s5b3b1_2 === '')
                return false;
        if (s5b1_3 === '3')
            if (s5b3b1_3 === '')
                return false;

        if (s5b1_1 === '3' || s5b1_2 === '3' || s5b1_3 === '3')
            if (s5b3b2_1 === '' || s5b3b2_2 === '')
                return false;


        if (s5b3b2_1 === '7' || s5b3b2_2 === '7')
            if (s5b3b2_Etc7 === '')
                return false;

        if (s5b3b2_1 === '8' || s5b3b2_2 === '8')
            if (s5b3b2_Etc8 === '')
                return false;


        if (s5b4 === '1')
            if (s5b5 === '')
                return false;

        if (s5b4 === '2')
            if (s5b6_1 === '' || s5b6_2 === '')
                return false;


        if (s5b6_1 === '8' || s5b6_2 === '8')
            if (s5b6_Etc8 === '')
                return false;

        if (s5b6_1 === '9' || s5b6_2 === '9')
            if (s5b6_Etc9 === '')
                return false;


        if (s5b7 === '1')
            if (s5b8 === '')
                return false;

        if (s5b7 === '2')
            if (s5b9_1 === '' || s5b9_2 === '')
                return false;


        if (s5b9_1 === '8' || s5b9_2 === '8')
            if (s5b9_Etc8 === '')
                return false;

        if (s5b9_1 === '9' || s5b9_2 === '9')
            if (s5b9_Etc9 === '')
                return false;

        return true;
    }

    const saveSector5Data = () => {
        const sector1DataObject = {
            's5b1_1': s5b1_1,
            's5b1_2': s5b1_2,
            's5b1_3': s5b1_3,
            's5b2b1': s5b2b1_1 !== '' ? s5b2b1_1 : (s5b2b2_1 !== '' ? s5b2b2_1 : (s5b3b1_1 !== '' ? s5b3b1_1 : '')),
            's5b2b2': s5b2b1_2 !== '' ? s5b2b1_2 : (s5b2b2_2 !== '' ? s5b2b2_2 : (s5b3b1_2 !== '' ? s5b3b1_2 : '')),
            's5b2b3': s5b2b1_3 !== '' ? s5b2b1_3 : (s5b2b2_3 !== '' ? s5b2b2_3 : (s5b3b1_3 !== '' ? s5b3b1_3 : '')),
            's5b3b2_1': s5b3b2_1 === '7' ? '7,' + s5b3b2_Etc7 : (s5b3b2_1 === '8' ? '8,' + s5b3b2_Etc8 : s5b3b2_1),
            's5b3b2_2': s5b3b2_2 === '7' ? '7,' + s5b3b2_Etc7 : (s5b3b2_2 === '8' ? '8,' + s5b3b2_Etc8 : s5b3b2_2),
            's5b4': s5b4,
            's5b5': s5b5,
            's5b6_1': s5b6_1 === '8' ? '8,' + s5b6_Etc8 : (s5b6_1 === '9' ? '9,' + s5b6_Etc9 : s5b6_1),
            's5b6_2': s5b6_2 === '8' ? '8,' + s5b6_Etc8 : (s5b6_2 === '9' ? '9,' + s5b6_Etc9 : s5b6_2),
            's5b7': s5b7,
            's5b8': s5b8,
            's5b9_1': s5b9_1 === '8' ? '8,' + s5b9_Etc8 : (s5b7 === '9' ? '9,' + s5b6_Etc9 : s5b7),
            's5b9_2': s5b9_2 === '8' ? '8,' + s5b9_Etc8 : (s5b8 === '9' ? '9,' + s5b6_Etc9 : s5b8)

        }

        localStorage.setItem('sector5', JSON.stringify(sector1DataObject))
    }

    const movePreviousSector = () => {
        navigate('/4');
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

        saveSector5Data()
        handleSubmitDialogOpen();
    }

    const submitSurvey = () => {
        navigate('/00');
        // navigate('/submit');
    }

    return (
        <Background>
            <TitleBlock>
                5. ????????? ??????(????????????, ?????????????? ??? ??????????????????) ??????
            </TitleBlock>

            <TextBlock start>
                <strong><em>????????????</em></strong>??? <strong><em>2??? ?????? ????????? ?????? ?????? ??????????????? ????????? ???????????????, ???????????? ????????? ????????? ???????????? ????????? ????????????
                ???</em></strong>?????? ????????? ???????????? ??????????????? ??????????????? ?????????????????? ????????? ?????? ????????? ?????? ???????????? ???????????????.<br/>
                <strong><em>??????????????</em></strong>??? <strong><em>?????? ?????? ????????????????????? ???????????? ??????</em></strong>?????? ???????????????.
            </TextBlock>


            <QuestionBlock
                title={'5-1. ?????? ????????? ?????? ??????????????? ????????? ?????? 3????????? ????????? ??????, ????????? ???????????? ?????? (?????? ?????? ?????????) ????????? ?????? ???????????????. ??????????????? ?????? ?????? ???????????? ????????????,??????????????? ?????? ????????????????????? ????????? ????????????????( ??? ????????? ???????????? ????????? ??????????????????. )'}>
                <div>&nbsp;</div>
                <FormControl fullWidth>
                    <Grid gridColumnProperty={'1fr 3.8fr 3.8fr 3.8fr 2.5fr'} rowGap={18} columnGap={6}>
                        <ColorCenterBlock padding={0.5}>1??????</ColorCenterBlock>
                        <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                            <ColorCenterBlock size={15} padding={3} color>???????????? ????????? ?????? <br/>???????????? ?????? ??????
                                ??????</ColorCenterBlock>
                            <GridImg src={'images/1-1.png'}/>
                        </Grid>
                        <Stack>
                            <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                <ColorCenterBlock size={15} padding={3} color>????????? ?????? ????????? ?????? <br/>???????????? ?????? ??????
                                    ??????</ColorCenterBlock>
                                <GridImg src={'images/1-2.png'}/>
                            </Grid>
                        </Stack>
                        <Stack>
                            <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                <ColorCenterBlock size={15} padding={3} color>??????????????? ????????? <br/>?????? ?????????
                                    ???????????? <br/>????????????</ColorCenterBlock>
                                <GridImg src={'images/1-3.png'}/>
                            </Grid>
                        </Stack>
                        <CenterBox>
                            <RadioGroup onChange={handleS5b1_1}>
                                <FormControlLabel value='1' control={<Radio/>} label='??????'/>
                                <FormControlLabel value='2' control={<Radio/>} label='?????????'/>
                                <FormControlLabel value='3' control={<Radio/>} label='?????????'/>
                            </RadioGroup>
                        </CenterBox>


                        {
                            (s5b1_1 === '1' || s5b1_1 === '2') &&
                            <>
                                <ColorCenterBlock padding={0.5}>2??????</ColorCenterBlock>
                                <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                    <ColorCenterBlock size={15} padding={3} color>????????? ???????????????, <br/>?????? ?????? ??????
                                        ??????</ColorCenterBlock>
                                    <GridImg src={'images/2-1.png'}/>
                                </Grid>
                                <Stack>
                                    <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                        <ColorCenterBlock size={15} padding={3} color>?????? ????????? ????????????, <br/>?????? ?????? ?????????
                                            ??????</ColorCenterBlock>
                                        <GridImg src={'images/2-2.png'}/>
                                    </Grid>
                                </Stack>
                                <Stack>
                                    <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                        <ColorCenterBlock size={15} padding={3} color>??????????????? ????????? ?????? <br/>????????? ???????????? <br/>????????????</ColorCenterBlock>
                                        <GridImg src={'images/2-3.png'}/>
                                    </Grid>
                                </Stack>
                                <CenterBox>
                                    <RadioGroup onChange={handleS5b1_2}>
                                        <FormControlLabel value='1' control={<Radio/>} label='??????'/>
                                        <FormControlLabel value='2' control={<Radio/>} label='?????????'/>
                                        <FormControlLabel value='3' control={<Radio/>} label='?????????'/>
                                    </RadioGroup>
                                </CenterBox>
                            </>
                        }


                        {
                            (s5b1_2 === '1' || s5b1_2 === '2') &&
                            <>
                                <ColorCenterBlock padding={0.5}>3??????</ColorCenterBlock>
                                <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                    <ColorCenterBlock size={15} padding={3} color>????????????, ????????????
                                        ??? <br/>????????????</ColorCenterBlock>
                                    <GridImg src={'images/3-1.png'}/>
                                </Grid>
                                <Stack>
                                    <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                        <ColorCenterBlock size={15} padding={3} color>????????? ???????????? <br/>???????????? ????????? <br/>????????????
                                            ?????? ??????</ColorCenterBlock>
                                        <GridImg src={'images/3-2.png'}/>
                                    </Grid>
                                </Stack>
                                <Stack>
                                    <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                        <ColorCenterBlock size={15} padding={3} color>????????? ????????? <br/>??????????????? ????????? <br/>???????????? ???</ColorCenterBlock>
                                        <GridImg src={'images/3-3.png'}/>
                                    </Grid>
                                </Stack>
                                <CenterBox>
                                    <RadioGroup onChange={handleS5b1_3}>
                                        <FormControlLabel value='1' control={<Radio/>} label='??????'/>
                                        <FormControlLabel value='2' control={<Radio/>} label='?????????'/>
                                        <FormControlLabel value='3' control={<Radio/>} label='?????????'/>
                                    </RadioGroup>
                                </CenterBox>
                            </>
                        }
                    </Grid>
                </FormControl>
            </QuestionBlock>


            {
                (s5b1_1 === '1' || s5b1_2 === '1' || s5b1_3 === '1') &&
                <>
                    <strong><em>??? 5-1.???????????? ??????????????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock
                        title={'5-2-1. ??????????????? 5-1.????????? ????????? ??????????????? ??????????????? ?????? ??????????????? ??? % ?????? ??????(?????????) ?????? ?????? ???????????? ???????????? ???????????????????'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'} rowGap={10} columnGap={10}>
                                <ColorCenterBlock>??????</ColorCenterBlock>
                                <ColorCenterBlock>?????????</ColorCenterBlock>

                                {
                                    (s5b1_1 === '1') &&
                                    <>
                                        <CenterBox>1??????</CenterBox>
                                        <TextField placeholder='?????????' type='number' value={s5b2b1_1}
                                                   onChange={handleS5b2b1_1} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }

                                {
                                    (s5b1_2 === '1') &&
                                    <>
                                        <CenterBox>2??????</CenterBox>
                                        <TextField placeholder='?????????' type='number' min='0' value={s5b2b1_2}
                                                   onChange={handleS5b2b1_2} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }

                                {
                                    (s5b1_3 === '1') &&
                                    <>
                                        <CenterBox>3??????</CenterBox>
                                        <TextField placeholder='?????????' type='number' min='0' value={s5b2b1_3}
                                                   onChange={handleS5b2b1_3} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                (s5b1_1 === '2' || s5b1_2 === '2' || s5b1_3 === '2') &&
                <>
                    <strong><em>??? 5-1.???????????? ?????????????????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock
                        title={'5-2-2. ??????????????? 5-1.????????? ????????? ??????????????? ??????????????? ?????? ????????? ????????? ??? % ?????? ??????(?????? ???)?????? ?????? ???????????? ???????????? ???????????????????'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'} rowGap={10} columnGap={10}>
                                <ColorCenterBlock>??????</ColorCenterBlock>
                                <ColorCenterBlock>?????????</ColorCenterBlock>

                                {
                                    (s5b1_1 === '2') &&
                                    <>
                                        <CenterBox>1??????</CenterBox>
                                        <TextField placeholder='?????????' type='number' value={s5b2b2_1}
                                                   onChange={handleS5b2b2_1} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }

                                {
                                    (s5b1_2 === '2') &&
                                    <>
                                        <CenterBox>2??????</CenterBox>
                                        <TextField placeholder='?????????' type='number' min='0' value={s5b2b2_2}
                                                   onChange={handleS5b2b2_2} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }

                                {
                                    (s5b1_3 === '2') &&
                                    <>
                                        <CenterBox>3??????</CenterBox>
                                        <TextField placeholder='?????????' type='number' min='0' value={s5b2b2_3}
                                                   onChange={handleS5b2b2_3} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                (s5b1_1 === '3' || s5b1_2 === '3' || s5b1_3 === '3') &&
                <>
                    <strong><em>??? 5-1.???????????? ?????????????????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock
                        title={'5-3-1. ??????????????? 5-1.????????? ????????? ??????????????? ??????????????? ?????? ??????????????? ??? % ?????? ??????(?????????) ?????? ????????? ????????? ????????????????'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'} rowGap={10} columnGap={10}>
                                <ColorCenterBlock>??????</ColorCenterBlock>
                                <ColorCenterBlock>?????????</ColorCenterBlock>

                                {
                                    (s5b1_1 === '3') &&
                                    <>
                                        <CenterBox>1??????</CenterBox>
                                        <TextField placeholder='?????????' type='number' value={s5b3b1_1}
                                                   onChange={handleS5b3b1_1} size={'small'}
                                                   endAdornment={<InputAdornment position="end">%</InputAdornment>}/>
                                    </>
                                }

                                {
                                    (s5b1_2 === '3') &&
                                    <>
                                        <CenterBox>2??????</CenterBox>
                                        <TextField placeholder='?????????' type='number' min='0' value={s5b3b1_2}
                                                   onChange={handleS5b3b1_2} size={'small'}
                                                   endAdornment={<InputAdornment position="end">%</InputAdornment>}/>
                                    </>
                                }

                                {
                                    (s5b1_3 === '3') &&
                                    <>
                                        <CenterBox>3??????</CenterBox>
                                        <TextField placeholder='?????????' type='number' min='0' value={s5b3b1_3}
                                                   onChange={handleS5b3b1_3} size={'small'}
                                                   endAdornment={<InputAdornment position="end">%</InputAdornment>}/>
                                    </>
                                }
                            </Grid>
                        </FormControl>
                    </QuestionBlock>

                    <QuestionBlock title={'5-3-2. ????????? ??????????????? ?????? ?????? ???????????? ???????????? ???????????? ????????? ???????????? 2?????? ???????????? ????????????????'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'}>

                                <CenterBox size={20} weight={500} padding={20}>1?????? :&nbsp;&nbsp;
                                    <strong>{s5b3b2_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2?????? :&nbsp;&nbsp;
                                    <strong>{s5b3b2_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s5b3b2Data[1]} onChange={handleS5b3b2}/>}
                                    label='1. ?????? ????????? ?????? ????????? ???????????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s5b3b2Data[2]} onChange={handleS5b3b2}/>}
                                    label='2. ??????????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s5b3b2Data[3]} onChange={handleS5b3b2}/>}
                                    label='3. ????????????????? ????????? ????????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s5b3b2Data[4]} onChange={handleS5b3b2}/>}
                                    label='4. ????????? ???????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s5b3b2Data[5]} onChange={handleS5b3b2}/>}
                                    label='5. ??????????? ????????? ????????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s5b3b2Data[6]} onChange={handleS5b3b2}/>}
                                    label='6. ??????????????? ?????? ????????????'/>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='7' checked={s5b3b2Data[7]} onChange={handleS5b3b2}/>}
                                        label='7. ??????'/>
                                    <TextField value={s5b3b2_Etc7} onChange={(e) => setS5b3b2_Etc7(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s5b3b2Data[8]} onChange={handleS5b3b2}/>}
                                        label='8. ??????'/>
                                    <TextField value={s5b3b2_Etc8} onChange={(e) => setS5b3b2_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <QuestionBlock title={'5-4. ??????????????? ???????????? ??? ????????????????? ?????????????????????????'}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS5b4}>
                        <Grid gridColumnProperty={'repeat(2, 1fr)'}>
                            <FormControlLabel value='1' control={<Radio/>} label='???'/>
                            <FormControlLabel value='2' control={<Radio/>} label='?????????'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                (s5b4 === '1') &&
                <>
                    <strong><em>??? 5-4.???????????? 1?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock title={'5-5. ??????????????? ????????????????? ?????? ????????? ?????? ??? % ?????? ??????(?????????)?????? ?????? ???????????? ???????????? ???????????????????\n'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'1fr'} rowGap={10}>
                                <ColorCenterBlock>?????????</ColorCenterBlock>
                                <TextField placeholder='?????????' type='number' min='0' value={s5b5}
                                           onChange={handleS5b5} size={'small'}
                                    // inputProps={{style: { textAlign: 'center' }}}
                                           InputProps={{
                                               endAdornment: <InputAdornment position="end">%</InputAdornment>
                                           }}/>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                (s5b4 === '2') &&
                <>
                    <strong><em>??? 5-4.???????????? 2?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock title={'5-6. ??????????????? ?????????????? ????????? ???????????? ???????????? ????????? ???????????? 2?????? ???????????? ????????????????'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'}>

                                <CenterBox size={20} weight={500} padding={20}>1?????? :&nbsp;&nbsp;
                                    <strong>{s5b6_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2?????? :&nbsp;&nbsp;
                                    <strong>{s5b6_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s5b6Data[1]} onChange={handleS5b6}/>}
                                    label='1. ?????? ????????? ?????? ????????? ???????????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s5b6Data[2]} onChange={handleS5b6}/>}
                                    label='2. ??????????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s5b6Data[3]} onChange={handleS5b6}/>}
                                    label='3. ????????? ????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s5b6Data[4]} onChange={handleS5b6}/>}
                                    label='4. ??????????????? ????????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s5b6Data[5]} onChange={handleS5b6}/>}
                                    label='5. ????????? ???????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s5b6Data[6]} onChange={handleS5b6}/>}
                                    label='6. ????????? ????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='7' checked={s5b6Data[7]} onChange={handleS5b6}/>}
                                    label='7. ????????? ?????? ??? ???????????? ?????????'/>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s5b6Data[8]} onChange={handleS5b6}/>}
                                        label='8. ??????'/>
                                    <TextField value={s5b6_Etc8} onChange={(e) => setS5b6_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='9' checked={s5b6Data[9]} onChange={handleS5b6}/>}
                                        label='9. ??????'/>
                                    <TextField value={s5b6_Etc9} onChange={(e) => setS5b6_Etc9(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <QuestionBlock title={'5-7. ??????????????? ???????????? ??? ????????????????????? ?????????????????????????'}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS5b7}>
                        <Grid gridColumnProperty={'repeat(2, 1fr)'}>
                            <FormControlLabel value='1' control={<Radio/>} label='???'/>
                            <FormControlLabel value='2' control={<Radio/>} label='?????????'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                (s5b7 === '1') &&
                <>
                    <strong><em>??? 5-7.???????????? 1?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock title={'5-8. ??????????????? ????????????????????? ??????????????? ?????? ??? % ?????? ??????(?????????)?????? ?????? ???????????? ???????????? ???????????????????'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'1fr'} rowGap={10}>
                                <ColorCenterBlock>?????????</ColorCenterBlock>
                                <TextField placeholder='?????????' type='number' min='0' value={s5b8}
                                           onChange={handleS5b8} size={'small'}
                                           InputProps={{
                                               endAdornment: <InputAdornment position="end">%</InputAdornment>
                                           }}/>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                (s5b7 === '2') &&
                <>
                    <strong><em>??? 5-7.???????????? 2?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock title={'5-9. ??????????????? ?????????????????? ????????? ???????????? ???????????? ????????? ???????????? 2?????? ???????????? ????????????????'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'}>

                                <CenterBox size={20} weight={500} padding={20}>1?????? :&nbsp;&nbsp;
                                    <strong>{s5b9_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2?????? :&nbsp;&nbsp;
                                    <strong>{s5b9_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s5b9Data[1]} onChange={handleS5b9}/>}
                                    label='1. ?????? ????????? ?????? ????????? ???????????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s5b9Data[2]} onChange={handleS5b9}/>}
                                    label='2. ??????????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s5b9Data[3]} onChange={handleS5b9}/>}
                                    label='3. ????????? ????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s5b9Data[4]} onChange={handleS5b9}/>}
                                    label='4. ????????? ????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s5b9Data[5]} onChange={handleS5b9}/>}
                                    label='5. ????????? ??????????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s5b9Data[6]} onChange={handleS5b9}/>}
                                    label='6. ??????????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='7' checked={s5b9Data[7]} onChange={handleS5b9}/>}
                                    label='7. ??????????????? ????????? ?????????'/>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s5b9Data[8]} onChange={handleS5b9}/>}
                                        label='8. ??????'/>
                                    <TextField value={s5b9_Etc8} onChange={(e) => setS5b9_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='9' checked={s5b9Data[9]} onChange={handleS5b9}/>}
                                        label='9. ??????'/>
                                    <TextField value={s5b9_Etc9} onChange={(e) => setS5b9_Etc9(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }

            <SectorFooter sector={5} movePreviousSector={movePreviousSector} moveNextSector={moveNextSector}
                          alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
            <Dialog open={submitDialogOpen} onClose={handleSubmitDialogClose} fullScreen={fullScreen}>
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

export default OldSector5;