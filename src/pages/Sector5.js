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

const Sector5 = () => {
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
        // 2개 선택 유효성 확인
        let checking = false;
        let checkable = s5b3b2_1 === '' || s5b3b2_2 === '';
        s5b3b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
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
        // 2개 선택 유효성 확인
        let checking = false;
        let checkable = s5b6_1 === '' || s5b6_2 === '';
        s5b6Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
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
        // 2개 선택 유효성 확인
        let checking = false;
        let checkable = s5b9_1 === '' || s5b9_2 === '';
        s5b9Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
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
                5. 저활용 농지(유휴농지, 국·공유지 및 매입비축농지) 수요
            </TitleBlock>

            <TextBlock start>
                <strong><em>유휴농지</em></strong>는 <strong><em>2년 이상 경작을 하지 않아 경지로서의 형태를 상실하였고, 앞으로도 경지로 이용할 가능성이 없다고 판단되는
                땅</em></strong>으로 농지의 물리적인 영농조건이 열악하거나 농산물시장의 가격조 건이 불리한 경우 발생하는 토지입니다.<br/>
                <strong><em>국·공유지</em></strong>는 <strong><em>국가 또는 지방자치단체가 소유하고 관리</em></strong>하는 토지입니다.
            </TextBlock>


            <QuestionBlock
                title={'5-1. 위의 설명과 같이 유휴농지가 다음과 같이 3단계로 구분할 경우, 귀하의 유휴농지 활용 (매매 또는 임대차) 의향을 묻는 문항입니다. 귀하께서는 어느 단계 수준까지 ‘매매’,‘임대차’ 또는 ‘아니오’라고 답변하 시겠습니까?( ※ 단계별 해당하는 답변에 체크해주세요. )'}>
                <div>&nbsp;</div>
                <FormControl fullWidth>
                    <Grid gridColumnProperty={'1fr 3.8fr 3.8fr 3.8fr 2.5fr'} rowGap={18} columnGap={6}>
                        <ColorCenterBlock padding={0.5}>1단계</ColorCenterBlock>
                        <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                            <ColorCenterBlock size={15} padding={3} color>인력으로 풀베기 등을 <br/>실시하여 증시 경작
                                가능</ColorCenterBlock>
                            <GridImg src={'images/1-1.png'}/>
                        </Grid>
                        <Stack>
                            <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                <ColorCenterBlock size={15} padding={3} color>농업용 기계 풀베기 등을 <br/>실시하여 즉시 경작
                                    가능</ColorCenterBlock>
                                <GridImg src={'images/1-2.png'}/>
                            </Grid>
                        </Stack>
                        <Stack>
                            <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                <ColorCenterBlock size={15} padding={3} color>집단적으로 정리된 <br/>농지 사이에
                                    존재하는 <br/>유휴농지</ColorCenterBlock>
                                <GridImg src={'images/1-3.png'}/>
                            </Grid>
                        </Stack>
                        <CenterBox>
                            <RadioGroup onChange={handleS5b1_1}>
                                <FormControlLabel value='1' control={<Radio/>} label='매매'/>
                                <FormControlLabel value='2' control={<Radio/>} label='임대차'/>
                                <FormControlLabel value='3' control={<Radio/>} label='아니오'/>
                            </RadioGroup>
                        </CenterBox>


                        {
                            (s5b1_1 === '1' || s5b1_1 === '2') &&
                            <>
                                <ColorCenterBlock padding={0.5}>2단계</ColorCenterBlock>
                                <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                    <ColorCenterBlock size={15} padding={3} color>구획이 협소하므로, <br/>구획 정리 등이
                                        필요</ColorCenterBlock>
                                    <GridImg src={'images/2-1.png'}/>
                                </Grid>
                                <Stack>
                                    <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                        <ColorCenterBlock size={15} padding={3} color>배수 조건이 나쁘므로, <br/>배수 등의 정비가
                                            필요</ColorCenterBlock>
                                        <GridImg src={'images/2-2.png'}/>
                                    </Grid>
                                </Stack>
                                <Stack>
                                    <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                        <ColorCenterBlock size={15} padding={3} color>집단적으로 정리된 농지 <br/>사이에 존재하는 <br/>유휴농지</ColorCenterBlock>
                                        <GridImg src={'images/2-3.png'}/>
                                    </Grid>
                                </Stack>
                                <CenterBox>
                                    <RadioGroup onChange={handleS5b1_2}>
                                        <FormControlLabel value='1' control={<Radio/>} label='매매'/>
                                        <FormControlLabel value='2' control={<Radio/>} label='임대차'/>
                                        <FormControlLabel value='3' control={<Radio/>} label='아니오'/>
                                    </RadioGroup>
                                </CenterBox>
                            </>
                        }


                        {
                            (s5b1_2 === '1' || s5b1_2 === '2') &&
                            <>
                                <ColorCenterBlock padding={0.5}>3단계</ColorCenterBlock>
                                <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                    <ColorCenterBlock size={15} padding={3} color>황무지화, 표토유실
                                        및 <br/>암석노출</ColorCenterBlock>
                                    <GridImg src={'images/3-1.png'}/>
                                </Grid>
                                <Stack>
                                    <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                        <ColorCenterBlock size={15} padding={3} color>경작을 재게하기 <br/>위해서는 개간에 <br/>필적하는
                                            정비 필요</ColorCenterBlock>
                                        <GridImg src={'images/3-2.png'}/>
                                    </Grid>
                                </Stack>
                                <Stack>
                                    <Grid gridRowProperty={'1fr 1.5fr'} rowGap={10}>
                                        <ColorCenterBlock size={15} padding={3} color>주위의 여건상 <br/>복원하여도 산림화 <br/>가능성이 큼</ColorCenterBlock>
                                        <GridImg src={'images/3-3.png'}/>
                                    </Grid>
                                </Stack>
                                <CenterBox>
                                    <RadioGroup onChange={handleS5b1_3}>
                                        <FormControlLabel value='1' control={<Radio/>} label='매매'/>
                                        <FormControlLabel value='2' control={<Radio/>} label='임대차'/>
                                        <FormControlLabel value='3' control={<Radio/>} label='아니오'/>
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
                    <strong><em>※ 5-1.문항에서 ‘매매’를 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock
                        title={'5-2-1. 귀하께서는 5-1.에서의 단계별 유휴농지가 일반농지에 비해 농지가격이 몇 % 정도 저렴(할인율) 해야 가격 경쟁력을 가진다고 생각하십니까?'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'} rowGap={10} columnGap={10}>
                                <ColorCenterBlock>구분</ColorCenterBlock>
                                <ColorCenterBlock>할인율</ColorCenterBlock>

                                {
                                    (s5b1_1 === '1') &&
                                    <>
                                        <CenterBox>1단계</CenterBox>
                                        <TextField placeholder='백분율' type='number' value={s5b2b1_1}
                                                   onChange={handleS5b2b1_1} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }

                                {
                                    (s5b1_2 === '1') &&
                                    <>
                                        <CenterBox>2단계</CenterBox>
                                        <TextField placeholder='백분율' type='number' min='0' value={s5b2b1_2}
                                                   onChange={handleS5b2b1_2} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }

                                {
                                    (s5b1_3 === '1') &&
                                    <>
                                        <CenterBox>3단계</CenterBox>
                                        <TextField placeholder='백분율' type='number' min='0' value={s5b2b1_3}
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
                    <strong><em>※ 5-1.문항에서 ‘임대차’를 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock
                        title={'5-2-2. 귀하께서는 5-1.에서의 단계별 유휴농지가 일반농지에 비해 임대차 가격이 몇 % 정도 저렴(할인 율)해야 가격 경쟁력을 가진다고 생각하십니까?'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'} rowGap={10} columnGap={10}>
                                <ColorCenterBlock>구분</ColorCenterBlock>
                                <ColorCenterBlock>할인율</ColorCenterBlock>

                                {
                                    (s5b1_1 === '2') &&
                                    <>
                                        <CenterBox>1단계</CenterBox>
                                        <TextField placeholder='백분율' type='number' value={s5b2b2_1}
                                                   onChange={handleS5b2b2_1} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }

                                {
                                    (s5b1_2 === '2') &&
                                    <>
                                        <CenterBox>2단계</CenterBox>
                                        <TextField placeholder='백분율' type='number' min='0' value={s5b2b2_2}
                                                   onChange={handleS5b2b2_2} size={'small'}
                                                   InputProps={{
                                                       endAdornment: <InputAdornment position="end">%</InputAdornment>
                                                   }}/>
                                    </>
                                }

                                {
                                    (s5b1_3 === '2') &&
                                    <>
                                        <CenterBox>3단계</CenterBox>
                                        <TextField placeholder='백분율' type='number' min='0' value={s5b2b2_3}
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
                    <strong><em>※ 5-1.문항에서 ‘아니오’를 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock
                        title={'5-3-1. 귀하께서는 5-1.에서의 단계별 유휴농지가 일반농지에 비해 농지가격이 몇 % 정도 저렴(할인율) 해야 활용할 의사가 있으십니까?'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'} rowGap={10} columnGap={10}>
                                <ColorCenterBlock>구분</ColorCenterBlock>
                                <ColorCenterBlock>할인율</ColorCenterBlock>

                                {
                                    (s5b1_1 === '3') &&
                                    <>
                                        <CenterBox>1단계</CenterBox>
                                        <TextField placeholder='백분율' type='number' value={s5b3b1_1}
                                                   onChange={handleS5b3b1_1} size={'small'}
                                                   endAdornment={<InputAdornment position="end">%</InputAdornment>}/>
                                    </>
                                }

                                {
                                    (s5b1_2 === '3') &&
                                    <>
                                        <CenterBox>2단계</CenterBox>
                                        <TextField placeholder='백분율' type='number' min='0' value={s5b3b1_2}
                                                   onChange={handleS5b3b1_2} size={'small'}
                                                   endAdornment={<InputAdornment position="end">%</InputAdornment>}/>
                                    </>
                                }

                                {
                                    (s5b1_3 === '3') &&
                                    <>
                                        <CenterBox>3단계</CenterBox>
                                        <TextField placeholder='백분율' type='number' min='0' value={s5b3b1_3}
                                                   onChange={handleS5b3b1_3} size={'small'}
                                                   endAdornment={<InputAdornment position="end">%</InputAdornment>}/>
                                    </>
                                }
                            </Grid>
                        </FormControl>
                    </QuestionBlock>

                    <QuestionBlock title={'5-3-2. 귀하는 유휴농지의 매매 또는 임대차를 고려하지 않으시는 이유를 순서대로 2가지 고른다면 무엇입니까?'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'}>

                                <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;
                                    <strong>{s5b3b2_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;
                                    <strong>{s5b3b2_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s5b3b2Data[1]} onChange={handleS5b3b2}/>}
                                    label='1. 농지 정비에 많은 비용이 소요되므로'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s5b3b2Data[2]} onChange={handleS5b3b2}/>}
                                    label='2. 거주지와의 거리가 멀어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s5b3b2Data[3]} onChange={handleS5b3b2}/>}
                                    label='3. 농기계·설비 진입이 어려워서'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s5b3b2Data[4]} onChange={handleS5b3b2}/>}
                                    label='4. 토양이 비옥하지 않아서'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s5b3b2Data[5]} onChange={handleS5b3b2}/>}
                                    label='5. 용·배수 여건이 불량해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s5b3b2Data[6]} onChange={handleS5b3b2}/>}
                                    label='6. 야생동물이 자주 출몰해서'/>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='7' checked={s5b3b2Data[7]} onChange={handleS5b3b2}/>}
                                        label='7. 기타'/>
                                    <TextField value={s5b3b2_Etc7} onChange={(e) => setS5b3b2_Etc7(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s5b3b2Data[8]} onChange={handleS5b3b2}/>}
                                        label='8. 기타'/>
                                    <TextField value={s5b3b2_Etc8} onChange={(e) => setS5b3b2_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <QuestionBlock title={'5-4. 귀하께서는 영농활동 시 국·공유지를 활용하시겠습니까?'}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS5b4}>
                        <Grid gridColumnProperty={'repeat(2, 1fr)'}>
                            <FormControlLabel value='1' control={<Radio/>} label='예'/>
                            <FormControlLabel value='2' control={<Radio/>} label='아니오'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                (s5b4 === '1') &&
                <>
                    <strong><em>※ 5-4.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={'5-5. 귀하께서는 국·공유지가 일반 농지에 비해 몇 % 정도 저렴(할인율)해야 가격 경쟁력을 가진다고 생각하십니까?\n'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'1fr'} rowGap={10}>
                                <ColorCenterBlock>할인율</ColorCenterBlock>
                                <TextField placeholder='백분율' type='number' min='0' value={s5b5}
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
                    <strong><em>※ 5-4.문항에서 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={'5-6. 귀하께서는 국·공유지 활용을 고려하지 않으시는 이유를 순서대로 2가지 고른다면 무엇입니까?'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'}>

                                <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;
                                    <strong>{s5b6_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;
                                    <strong>{s5b6_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s5b6Data[1]} onChange={handleS5b6}/>}
                                    label='1. 농지 정비에 많은 비용이 소요되므로'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s5b6Data[2]} onChange={handleS5b6}/>}
                                    label='2. 거주지와의 거리가 멀어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s5b6Data[3]} onChange={handleS5b6}/>}
                                    label='3. 원하는 면적의 매물이 없어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s5b6Data[4]} onChange={handleS5b6}/>}
                                    label='4. 자연재해에 취약해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s5b6Data[5]} onChange={handleS5b6}/>}
                                    label='5. 토양이 비옥하지 않아서'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s5b6Data[6]} onChange={handleS5b6}/>}
                                    label='6. 원하는 지역의 매물이 없어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='7' checked={s5b6Data[7]} onChange={handleS5b6}/>}
                                    label='7. 복잡한 서류 및 행정절차 때문에'/>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s5b6Data[8]} onChange={handleS5b6}/>}
                                        label='8. 기타'/>
                                    <TextField value={s5b6_Etc8} onChange={(e) => setS5b6_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='9' checked={s5b6Data[9]} onChange={handleS5b6}/>}
                                        label='9. 기타'/>
                                    <TextField value={s5b6_Etc9} onChange={(e) => setS5b6_Etc9(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <QuestionBlock title={'5-7. 귀하께서는 영농활동 시 매입비축농지를 활용하시겠습니까?'}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS5b7}>
                        <Grid gridColumnProperty={'repeat(2, 1fr)'}>
                            <FormControlLabel value='1' control={<Radio/>} label='예'/>
                            <FormControlLabel value='2' control={<Radio/>} label='아니오'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                (s5b7 === '1') &&
                <>
                    <strong><em>※ 5-7.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={'5-8. 귀하께서는 매입비축농지가 일반농지에 비해 몇 % 정도 저렴(할인율)해야 가격 경쟁력을 가진다고 생각하십니까?'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'1fr'} rowGap={10}>
                                <ColorCenterBlock>할인율</ColorCenterBlock>
                                <TextField placeholder='백분율' type='number' min='0' value={s5b8}
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
                    <strong><em>※ 5-7.문항에서 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={'5-9. 귀하께서는 매입비축농지 활용을 고려하지 않으시는 이유를 순서대로 2가지 고른다면 무엇입니까?'}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={'repeat(2, 1fr)'}>

                                <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;
                                    <strong>{s5b9_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;
                                    <strong>{s5b9_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s5b9Data[1]} onChange={handleS5b9}/>}
                                    label='1. 농지 정비에 많은 비용이 소요되므로'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s5b9Data[2]} onChange={handleS5b9}/>}
                                    label='2. 거주지와의 거리가 멀어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s5b9Data[3]} onChange={handleS5b9}/>}
                                    label='3. 원하는 면적의 매물이 없어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s5b9Data[4]} onChange={handleS5b9}/>}
                                    label='4. 원하는 지역의 매물이 없어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s5b9Data[5]} onChange={handleS5b9}/>}
                                    label='5. 임대시 연령제한이 있어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s5b9Data[6]} onChange={handleS5b9}/>}
                                    label='6. 임대기간이 제한이 있어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='7' checked={s5b9Data[7]} onChange={handleS5b9}/>}
                                    label='7. 재배작목의 제한이 있어서'/>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s5b9Data[8]} onChange={handleS5b9}/>}
                                        label='8. 기타'/>
                                    <TextField value={s5b9_Etc8} onChange={(e) => setS5b9_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='9' checked={s5b9Data[9]} onChange={handleS5b9}/>}
                                        label='9. 기타'/>
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
                    설문조사를 제출하시겠습니까?
                </DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmitDialogClose}>
                        아니오
                    </Button>
                    <Button onClick={submitSurvey} autoFocus>
                        네
                    </Button>
                </DialogActions>
            </Dialog>
        </Background>
    )
}

export default Sector5;