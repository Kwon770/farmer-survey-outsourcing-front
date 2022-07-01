import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Button,
    FormControl,
    FormControlLabel,
    Select,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
    Checkbox,
    Stack
} from "@mui/material";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import Grid from "../components/Grid";
import QuestionBlock from "../components/QuestionBlock";
import ColorCenterBlock from "../components/ColorCenterBlock";
import CenterBox from "../components/CenterBox";
import SectorFooter from "../components/SectorFooter";

const Sector3 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    const [s3b1_1, setS3b1_1] = useState('');
    const [s3b1_2, setS3b1_2] = useState('');
    const [s3b1_3, setS3b1_3] = useState('');
    const [s3b1_4, setS3b1_4] = useState('');
    const [s3b1_5, setS3b1_5] = useState('');
    const [s3b1Data, setS3b1Data] = useState([['', '', '']]);

    const [s3b2, setS3b2] = useState('');

    const [s3b3b1_1, setS3b3b1_1] = useState('');
    const [s3b3b1_2, setS3b3b1_2] = useState('');
    const [s3b3b1_3, setS3b3b1_3] = useState('');
    const [s3b3b1_4, setS3b3b1_4] = useState('');
    const [s3b3b1_5, setS3b3b1_5] = useState('');
    const [s3b3b1Data, setS3b3b1Data] = useState([['', '', '']]);

    const [s3b3b2_1, setS3b3b2_1] = useState('');
    const [s3b3b2_2, setS3b3b2_2] = useState('');
    const [s3b3b2_Etc7, setS3b3b2_Etc7] = useState('')
    const [s3b3b2_Etc8, setS3b3b2_Etc8] = useState('')
    const [s3b3b2Data, setS3b3b2Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false,
        false, // 7
        false, // 8
    ]);

    const [s3b3b3, setS3b3b3] = useState('');

    const [s3b4_1, setS3b4_1] = useState('');
    const [s3b4_2, setS3b4_2] = useState('');
    const [s3b4_3, setS3b4_3] = useState('');
    const [s3b4_4, setS3b4_4] = useState('');
    const [s3b4_5, setS3b4_5] = useState('');
    const [s3b4Data, setS3b4Data] = useState([['', '', '']]);

    const [s3b5, setS3b5] = useState('');
    const [s3b5_Etc8, setS3b5_Etc8] = useState('');

    const [s3b6, setS3b6] = useState('');
    const [s3b6b1, setS3b6b1] = useState('');

    const [s3b7b1, setS3b7b1] = useState('');
    const [s3b7b1_Etc5, setS3b7b1_Etc5] = useState('');

    const [s3b7b2_1, setS3b7b2_1] = useState('');
    const [s3b7b2_2, setS3b7b2_2] = useState('');
    const [s3b7b2_3, setS3b7b2_3] = useState('');
    const [s3b7b2_Etc9, setS3b7b2_Etc9] = useState('');
    const [s3b7b2_Etc10, setS3b7b2_Etc10] = useState('');
    const [s3b7b2_Etc11, setS3b7b2_Etc11] = useState('');
    const [s3b7b2Data, setS3b7b2Data] = useState([
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
        false,
        false, // 11
    ])

    const [s3b8, setS3b8] = useState('');
    const [s3b8b1, setS3b8b1] = useState('');
    const [s3b8b1_Etc6, setS3b8b1_Etc6] = useState('');
    const [s3b8b2, setS3b8b2] = useState('');
    const [s3b8b2_Etc6, setS3b8b2_Etc6] = useState('');


    // useEffect(() => {
    //     if (localStorage.getItem('sector2') === null) {
    //         movePreviousSector();
    //     }
    // }, [])


    useEffect(() => {
        let non_total = 0;
        let non_rent = 0;
        let bat_total = 0;
        let bat_rent = 0;
        let gwa_total = 0;
        let gwa_rent = 0;
        let si_total = 0;
        let si_rent = 0;
        let chuk_total = 0;
        let chuk_rent = 0;

        s3b1Data.forEach((element) => {
            switch (element[0]) {
                case '1':
                    non_total += Number(element[1])
                    non_rent += Number(element[2]);
                    break;
                case '2':
                    bat_total += Number(element[1])
                    bat_rent += Number(element[2]);
                    break;
                case '3':
                    gwa_total += Number(element[1])
                    gwa_rent += Number(element[2]);
                    break;
                case '4':
                    si_total += Number(element[1])
                    si_rent += Number(element[2]);
                    break;
                case '5':
                    chuk_total += Number(element[1])
                    chuk_rent += Number(element[2]);
                    break;
            }
        })

        if (bat_total === 0 || bat_rent === 0) setS3b1_2('');
        else setS3b1_2(bat_total + ',' + bat_rent);
        if (non_total === 0 || non_rent === 0) setS3b1_1('');
        else setS3b1_1(non_total + ',' + non_rent);
        if (gwa_total === 0 || gwa_rent === 0) setS3b1_3('');
        else setS3b1_3(gwa_total + ',' + gwa_rent);
        if (si_total === 0 || si_rent === 0) setS3b1_4('');
        else setS3b1_4(si_total + ',' + si_rent);
        if (chuk_total === 0 || chuk_rent === 0) setS3b1_5('');
        else setS3b1_5(chuk_total + ',' + chuk_rent);
    }, [s3b1Data])
    const handleS3b1 = (e, idx, type) => {
        setS3b1Data(s3b1Data.map((element, i) => {
            if (i === idx) {
                element[type] = e.target.value;
            }
            return element;
        }));
    }
    const handleS3b1AddingColumn = () => {
        setS3b1Data([...s3b1Data, ['', '', '']]);
    }
    const handleS3b1RemovingColumn = (idx) => {
        setS3b1Data(s3b1Data.filter((_, i) => i !== idx));
    }

    const resetAllS3b3s = () => {
        setS3b3b1_1('');
        setS3b3b1_2('');
        setS3b3b1_3('');
        setS3b3b1_4('');
        setS3b3b1_5('');
        setS3b3b1Data([['', '', '']]);

        setS3b3b2_1('');
        setS3b3b2_2('');
        setS3b3b2Data(s3b3b2Data.map(() => false));

        setS3b3b3('');

    }
    const resetAllS3b4s = () => {
        setS3b4_1('');
        setS3b4_2('');
        setS3b4_3('');
        setS3b4_4('');
        setS3b4_5('');
        setS3b4Data([['', '', '']]);

        setS3b6('');
    }
    const resetAllS3b5s = () => {
        setS3b5('');
    }
    const handleS3b2 = ({target: {value}}) => {
        setS3b2(value);
        if (value !== '1') {
            resetAllS3b4s();
            resetAllS3b5s();
        } else if (value !== '2') {
            resetAllS3b3s();
        } else if (value !== '3') {
            resetAllS3b3s();
            resetAllS3b4s();
        }
    }

    useEffect(() => {
        let non_total = 0;
        let non_rent = 0;
        let bat_total = 0;
        let bat_rent = 0;
        let gwa_total = 0;
        let gwa_rent = 0;
        let si_total = 0;
        let si_rent = 0;
        let chuk_total = 0;
        let chuk_rent = 0;

        s3b3b1Data.forEach((element) => {
            switch (element[0]) {
                case '1':
                    non_total += Number(element[1])
                    non_rent += Number(element[2]);
                    break;
                case '2':
                    bat_total += Number(element[1])
                    bat_rent += Number(element[2]);
                    break;
                case '3':
                    gwa_total += Number(element[1])
                    gwa_rent += Number(element[2]);
                    break;
                case '4':
                    si_total += Number(element[1])
                    si_rent += Number(element[2]);
                    break;
                case '5':
                    chuk_total += Number(element[1])
                    chuk_rent += Number(element[2]);
                    break;
            }
        })

        if (bat_total === 0 || bat_rent === 0) setS3b3b1_1('');
        else setS3b3b1_1(bat_total + ',' + bat_rent);
        if (non_total === 0 || non_rent === 0) setS3b3b1_2('');
        else setS3b3b1_2(non_total + ',' + non_rent);
        if (gwa_total === 0 || gwa_rent === 0) setS3b3b1_3('');
        else setS3b3b1_3(gwa_total + ',' + gwa_rent);
        if (si_total === 0 || si_rent === 0) setS3b3b1_4('');
        else setS3b3b1_4(si_total + ',' + si_rent);
        if (chuk_total === 0 || chuk_rent === 0) setS3b3b1_5('');
        else setS3b3b1_5(chuk_total + ',' + chuk_rent);
    }, [s3b3b1Data])
    const handleS3b3b1 = (e, idx, type) => {
        setS3b3b1Data(s3b3b1Data.map((element, i) => {
            if (i === idx) {
                element[type] = e.target.value;
            }
            return element;
        }))
    }
    const handleS3b3b1AddingColumn = () => {
        setS3b3b1Data([...s3b3b1Data, ['', '', '']]);
    }
    const handleS3b3b1RemovingColumn = (idx) => {
        setS3b3b1Data(s3b3b1Data.filter((_, i) => i !== idx));
    }

    const handleS3b3b2 = (e) => {
        // 2개 선택 유효성 확인
        let checking = false;
        let checkable = s3b3b2_1 === '' || s3b3b2_2 === '';
        s3b3b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS3b3b2Data(s3b3b2Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s3b3b2_1 === '') setS3b3b2_1(e.target.name);
            else setS3b3b2_2(e.target.name);
        } else {
            if (s3b3b2_1 === e.target.name) setS3b3b2_1('');
            else setS3b3b2_2('');
        }
    }
    const handleS3b3b3 = (e) => {
        setS3b3b3(e.target.value);
    }

    useEffect(() => {
        let non_total = 0;
        let non_rent = 0;
        let bat_total = 0;
        let bat_rent = 0;
        let gwa_total = 0;
        let gwa_rent = 0;
        let si_total = 0;
        let si_rent = 0;
        let chuk_total = 0;
        let chuk_rent = 0;

        s3b4Data.forEach((element) => {
            switch (element[0]) {
                case '1':
                    non_total += Number(element[1])
                    non_rent += Number(element[2]);
                    break;
                case '2':
                    bat_total += Number(element[1])
                    bat_rent += Number(element[2]);
                    break;
                case '3':
                    gwa_total += Number(element[1])
                    gwa_rent += Number(element[2]);
                    break;
                case '4':
                    si_total += Number(element[1])
                    si_rent += Number(element[2]);
                    break;
                case '5':
                    chuk_total += Number(element[1])
                    chuk_rent += Number(element[2]);
                    break;
            }
        })

        if (bat_total === 0 || bat_rent === 0) setS3b4_1('');
        else setS3b4_1(bat_total + ',' + bat_rent);
        if (non_total === 0 || non_rent === 0) setS3b4_2('');
        else setS3b4_2(non_total + ',' + non_rent);
        if (gwa_total === 0 || gwa_rent === 0) setS3b4_3('');
        else setS3b4_3(gwa_total + ',' + gwa_rent);
        if (si_total === 0 || si_rent === 0) setS3b4_4('');
        else setS3b4_4(si_total + ',' + si_rent);
        if (chuk_total === 0 || chuk_rent === 0) setS3b4_5('');
        else setS3b4_5(chuk_total + ',' + chuk_rent);
    }, [s3b4Data])
    const handleS3b4 = (e, idx, type) => {
        setS3b4Data(s3b4Data.map((element, i) => {
            if (i === idx) {
                element[type] = e.target.value;
            }
            return element;
        }))
    }
    const handleS3b4AddingColumn = () => {
        setS3b4Data([...s3b4Data, ['', '', '']]);
    }
    const handleS3b4RemovingColumn = (idx) => {
        setS3b4Data(s3b4Data.filter((_, i) => i !== idx));
    }

    const handleS3b5 = (e) => {
        setS3b5(e.target.value);
    }

    const handleS3b6 = ({target: {value}}) => {
        setS3b6(value);

        if (value !== '1') {
            setS3b6b1('');

            setS3b7b1('');

            resetS3b7b2();
        }
    }

    const handleS3b6b1 = ({target: {value}}) => {
        setS3b6b1(value);
        if (value !== '2' && value !== '3') {
            setS3b7b1('');

            resetS3b7b2();
        }
    }

    const handleS3b7b1 = (e) => {
        setS3b7b1(e.target.value);
    }

    const resetS3b7b2 = () => {
        setS3b7b2_1('');
        setS3b7b2_2('');
        setS3b7b2_3('');
        setS3b7b2Data(s3b7b2Data.map(() => false));
    }
    const handleS3b7b2 = (e) => {
        // 3개 선택 유효성 확인
        let checking = false;
        let checkable = s3b7b2_1 === '' || s3b7b2_2 === '' || s3b7b2_3 === '';
        s3b7b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 3개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS3b7b2Data(s3b7b2Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s3b7b2_1 === '') {
                setS3b7b2_1(e.target.name);
            } else if (s3b7b2_2 === '') {
                setS3b7b2_2(e.target.name);
            } else {
                setS3b7b2_3(e.target.name);
            }
        } else {
            if (s3b7b2_1 === e.target.name) setS3b7b2_1('');
            else if (s3b7b2_2 === e.target.name) setS3b7b2_2('');
            else setS3b7b2_3('');
        }
    }

    const handleS3b8 = ({target: {value}}) => {
        setS3b8(value);

        if (value !== '1') {
            setS3b8b1('');

        } else if (value !== '3') {
            setS3b8b2('');
        }
    }

    const handleS3b8b1 = (e) => {
        setS3b8b1(e.target.value);
    }

    const handleS3b8b2 = (e) => {
        setS3b8b2(e.target.value);
    }


    const validateAllWritten = () => {
        if (
            (s3b1_1 === '' && s3b1_2 === '' && s3b1_3 === '' && s3b1_4 === '' && s3b1_5 === '') ||
            s3b2 === '' ||
            s3b6 === '' ||
            s3b8 === ''
        ) {
            return false;
        }

        if (s3b2 === '1') {
            if (
                (s3b3b1_1 === '' && s3b3b1_2 === '' && s3b3b1_3 === '' && s3b3b1_4 === '' && s3b3b1_5 === '') ||
                s3b3b2_1 === '' || s3b3b2_2 === '' ||
                s3b3b3 === ''
            ) {
                return false;
            }

            if (s3b3b2_1 === '7' || s3b3b2_2 === '7')
                if (s3b3b2_Etc7 === '')
                    return false;

            if (s3b3b2_1 === '8' || s3b3b2_2 === '8')
                if (s3b3b2_Etc8 === '')
                    return false;
        }

        if (s3b2 === '2')
            if ((s3b4_1 === '' && s3b4_2 === '' && s3b4_3 === '' && s3b4_4 === '' && s3b4_5 === '') ||
                s3b5 === '') {
                return false;
            }

        if (s3b2 === '3') {
            if (s3b5 === '')
                return false;

            if (s3b5 === '8')
                if (s3b5_Etc8 === '')
                    return false;
        }

        if (s3b6 === '1')
            if (s3b6b1 === '')
                return false;

        if (s3b6b1 === '2' || s3b6b1 === '3') {
            if (s3b7b1 === '' ||
                s3b7b2_1 === '' || s3b7b2_2 === '' || s3b7b2_3 === '') {
                return false;
            }

            if (s3b7b1 === '5')
                if (s3b7b1_Etc5 === '')
                    return false;

            if (s3b7b2_1 === '9' || s3b7b2_2 === '9' || s3b7b2_3 === '9')
                if (s3b7b2_Etc9 === '')
                    return false;

            if (s3b7b2_1 === '10' || s3b7b2_2 === '10' || s3b7b2_3 === '10')
                if (s3b7b2_Etc10 === '')
                    return false;

            if (s3b7b2_1 === '11' || s3b7b2_2 === '11' || s3b7b2_3 === '11')
                if (s3b7b2_Etc11 === '')
                    return false;
        }

        if (s3b8 === '1') {
            if (s3b8b1 === '')
                return false;

            if (s3b8b1 === '6')
                if (s3b8b1_Etc6 === '')
                    return false;
        }

        if (s3b8 === '3') {
            if (s3b8b2 === '')
                return false;

            if (s3b8b2 === '6')
                if (s3b8b1_Etc6 === '')
                    return false;
        }

        return true;
    }

    const saveSector3Data = () => {
        const sector3DataObject = {
            's3b1_1': s3b1_1,
            's3b1_2': s3b1_2,
            's3b1_3': s3b1_3,
            's3b1_4': s3b1_4,
            's3b1_5': s3b1_5,
            's3b2': s3b2,
            's3b3b1_1': s3b3b1_1,
            's3b3b1_2': s3b3b1_2,
            's3b3b1_3': s3b3b1_3,
            's3b3b1_4': s3b3b1_4,
            's3b3b1_5': s3b3b1_5,
            's3b3b2_1': s3b3b2_1 === '7' ? '7,' + s3b3b2_Etc7 : (s3b3b2_1 === '8' ? '7,' + s3b3b2_Etc8 : s3b3b2_1),
            's3b3b2_2': s3b3b2_2 === '7' ? '7,' + s3b3b2_Etc7 : (s3b3b2_2 === '8' ? '7,' + s3b3b2_Etc8 : s3b3b2_2),
            's3b3b3': s3b3b3,
            's3b4_1': s3b4_1,
            's3b4_2': s3b4_2,
            's3b4_3': s3b4_3,
            's3b4_4': s3b4_4,
            's3b4_5': s3b4_5,
            's3b5': s3b5 === '8' ? '8,' + s3b5_Etc8 : s3b5,
            's3b6': s3b6,
            's3b6b1': s3b6b1,
            's3b7b1': s3b7b1 === '5' ? '5,' + s3b7b1_Etc5 : s3b7b1,
            's3b7b2_1': s3b7b2_1 === '9' ? '9,' + s3b7b2_Etc9 : (s3b7b2_1 === '10' ? '9,' + s3b7b2_Etc10 : (s3b7b2_1 === '11' ? '9,' + s3b7b2_Etc11 : s3b7b2_1)),
            's3b7b2_2': s3b7b2_2 === '9' ? '9,' + s3b7b2_Etc9 : (s3b7b2_2 === '10' ? '9,' + s3b7b2_Etc10 : (s3b7b2_2 === '11' ? '9,' + s3b7b2_Etc11 : s3b7b2_2)),
            's3b7b2_3': s3b7b2_3 === '9' ? '9,' + s3b7b2_Etc9 : (s3b7b2_3 === '10' ? '9,' + s3b7b2_Etc10 : (s3b7b2_3 === '11' ? '9,' + s3b7b2_Etc11 : s3b7b2_3)),
            's3b8': s3b8,
            's3b8b1': s3b8b1 === '6' ? '6,' + s3b8b1_Etc6 : s3b8b1,
            's3b8b2': s3b8b2 === '6' ? '6,' + s3b8b2_Etc6 : s3b8b2
        }

        localStorage.setItem('sector3', JSON.stringify(sector3DataObject))

    }

    const movePreviousSector = () => {
        navigate('/2');
    }

    const moveNextSector = () => {
        if (!validateAllWritten()) {
            setAlertOpen(true)
            return
        }

        saveSector3Data()
        navigate('/4')
    }

    return (
        <Background>
            <TitleBlock>
                3. 농지 수요
            </TitleBlock>

            <QuestionBlock
                title={<div>3-1. 귀하의 올해(2022년) 영농규모(농지 또는 축사 면적)를 묻는 문항입니다. 다음 표에서 해당하는 부 분에 응답하여 주십시오.</div>}>
                <Grid gridColumnProperty={"10fr 10fr 10fr 1fr"} rowGap={10} columnGap={10}>
                    <ColorCenterBlock>구분</ColorCenterBlock>
                    <ColorCenterBlock>전체 영농 면적<br/>(경작, 사육)</ColorCenterBlock>
                    <ColorCenterBlock>임대한 농지</ColorCenterBlock>
                    <div/>

                    {
                        s3b1Data.map((element, idx) => (
                            <>
                                <FormControl fullWidth size={'small'}>
                                    <Select displayEmpty value={element[0]} onChange={(e) => handleS3b1(e, idx, 0)}>
                                        <MenuItem disabled value={''}><i>논·밭·과수원·시설원예·축산</i></MenuItem>
                                        <MenuItem value={'1'}>논</MenuItem>
                                        <MenuItem value={'2'}>밭</MenuItem>
                                        <MenuItem value={'3'}>과수원</MenuItem>
                                        <MenuItem value={'4'}>시설원예</MenuItem>
                                        <MenuItem value={'5'}>축산</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField placeholder='전체 영농 면적' type='number' value={element[1]}
                                               onChange={(e) => handleS3b1(e, idx, 1)} size={'small'}/>
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField placeholder='임대한 농지' type='number' value={element[2]}
                                               onChange={(e) => handleS3b1(e, idx, 2)} size={'small'}/>
                                </FormControl>

                                {
                                    idx === 0 ? <div/> : <Button variant='text' color='error'
                                                                 onClick={() => handleS3b1RemovingColumn(idx)}>삭제</Button>
                                }
                            </>
                        ))
                    }

                    <div/>
                    <Button variant='text' onClick={handleS3b1AddingColumn}>추가하기</Button>
                    <div/>
                </Grid>
            </QuestionBlock>


            <QuestionBlock title={<div>3-2. 귀하께서는 현재 영농규모(농지 또는 축사 면적)를 확대 또는 축소하실 계획이 있으십니까?</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS3b2}>
                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='확대 (3-3 응답)'/>
                            <FormControlLabel value='2' control={<Radio/>} label='축소 (3-4 응답)'/>
                            <FormControlLabel value='3' control={<Radio/>} label='계획 없음 (3-5 응답)'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                s3b2 === '1' &&
                <>
                    <strong><em>※ 3-2.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock
                        title={<div>3-3-1. 귀하의 자금 여력과 현재 농지가격을 고려하였을 때 향후 <strong>5년간(`27년까지)</strong> 영농규모(농지 또는 축사
                            면적)를 어느 정도 확대하실 계획이십니까? 다음 표에서 해당하는 부분에 응답하여주십시오.</div>}
                    >
                        <Grid gridColumnProperty={"10fr 10fr 10fr 1fr"} rowGap={10} columnGap={10}>
                            <ColorCenterBlock>구분</ColorCenterBlock>
                            <ColorCenterBlock>전체 영농 면적<br/>(경작, 사육)</ColorCenterBlock>
                            <ColorCenterBlock>임대할 농지</ColorCenterBlock>
                            <div/>

                            {
                                s3b3b1Data.map((element, idx) => (
                                    <>
                                        <FormControl fullWidth size={'small'}>
                                            <Select displayEmpty value={element[0]}
                                                    onChange={(e) => handleS3b3b1(e, idx, 0)}>
                                                <MenuItem disabled value={''}><i>논·밭·과수원·시설원예·축산</i></MenuItem>
                                                <MenuItem value={'1'}>논</MenuItem>
                                                <MenuItem value={'2'}>밭</MenuItem>
                                                <MenuItem value={'3'}>과수원</MenuItem>
                                                <MenuItem value={'4'}>시설원예</MenuItem>
                                                <MenuItem value={'5'}>축산</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <TextField placeholder='전체 영농 면적' type='number' value={element[1]}
                                                       onChange={(e) => handleS3b3b1(e, idx, 1)} size={'small'}/>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <TextField placeholder='임대한 농지' type='number' value={element[2]}
                                                       onChange={(e) => handleS3b3b1(e, idx, 2)} size={'small'}/>
                                        </FormControl>
                                        {
                                            idx === 0 ? <div/> : <Button variant='text' color='error'
                                                                         onClick={() => handleS3b3b1RemovingColumn(idx)}>삭제</Button>
                                        }
                                    </>
                                ))
                            }

                            <div/>
                            <Button variant='text' onClick={handleS3b3b1AddingColumn}>추가하기</Button>
                            <div/>
                        </Grid>
                    </QuestionBlock>


                    <QuestionBlock title={<div>3-3-2. 귀하께서는 영농규모(농지 또는 축사 면적)를 확대하시려는 이유는 무엇입니까?</div>}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={"repeat(2,1fr)"}>

                                <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;
                                    <strong>{s3b3b2_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;
                                    <strong>{s3b3b2_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s3b3b2Data[1]} onChange={handleS3b3b2}/>}
                                    label='1. 영농소득을 늘리기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s3b3b2Data[2]} onChange={handleS3b3b2}/>}
                                    label='2. 주 작목의 생산규모를 늘리기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s3b3b2Data[3]} onChange={handleS3b3b2}/>}
                                    label='3. 생산 품목을 다양화하기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s3b3b2Data[4]} onChange={handleS3b3b2}/>}
                                    label='4. 자산가치로써 농지를 확보하기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s3b3b2Data[5]} onChange={handleS3b3b2}/>}
                                    label='5. 농기계-설비 이용률을 높이기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s3b3b2Data[6]} onChange={handleS3b3b2}/>}
                                    label='6. 농기계-설비 확충을 위한 적정 면적확보'/>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='7' checked={s3b3b2Data[7]} onChange={handleS3b3b2}/>}
                                        label='7. 기타'/>
                                    <TextField value={s3b3b2_Etc7} onChange={(e) => setS3b3b2_Etc7(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s3b3b2Data[8]} onChange={handleS3b3b2}/>}
                                        label='8. 기타'/>
                                    <TextField value={s3b3b2_Etc8} onChange={(e) => setS3b3b2_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>


                    <QuestionBlock title={<div>3-3-3. 귀하께서 농지가격이 현재의 2배가 될 경우, 3-3-1의 응답에 대략 어느 정도 변화가 있습니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b3b3}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='면적 확대 계획을 철회한다.'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='당초 계획했던 면적을 75% 줄인다.'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='당초 계획했던 면적을 50% 줄인다.'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='당초 계획했던 면적을 25% 줄인다.'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='기존 계획과 변함없다.'/>
                                    <FormControlLabel value='6' control={<Radio/>} label='기존 계획보다 면적을 더 확보한다.'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                s3b2 === '2' &&
                <>
                    <strong><em>※ 3-2.문항에서 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock
                        title={<div>3-4. 귀하의 자금 여력과 현재 농지가격을 고려하였을 때 향후 <strong>5년간(`27년까지)</strong> 영농규모(농지 또는 축사면
                            적)를 어느 정도 축소하실 계획이십니까? 다음 표에서 해당하는 부분에 응답하여주십시오.</div>}
                    >
                        <Grid gridColumnProperty={"10fr 10fr 10fr 1fr"} rowGap={10} columnGap={10}>
                            <ColorCenterBlock>구분</ColorCenterBlock>
                            <ColorCenterBlock>전체 영농 면적<br/>(경작, 사육)</ColorCenterBlock>
                            <ColorCenterBlock>임대할 농지</ColorCenterBlock>
                            <div/>

                            {
                                s3b4Data.map((element, idx) => (
                                    <>
                                        <FormControl fullWidth size={'small'}>
                                            <Select displayEmpty value={element[0]}
                                                    onChange={(e) => handleS3b4(e, idx, 0)}>
                                                <MenuItem disabled value={''}><i>논·밭·과수원·시설원예·축산</i></MenuItem>
                                                <MenuItem value={'1'}>논</MenuItem>
                                                <MenuItem value={'2'}>밭</MenuItem>
                                                <MenuItem value={'3'}>과수원</MenuItem>
                                                <MenuItem value={'4'}>시설원예</MenuItem>
                                                <MenuItem value={'5'}>축산</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <TextField placeholder='전체 영농 면적' type='number' value={element[1]}
                                                       onChange={(e) => handleS3b4(e, idx, 1)} size={"small"}/>
                                        </FormControl>
                                        <TextField placeholder='임대한 농지' type='number' value={element[2]}
                                                   onChange={(e) => handleS3b4(e, idx, 2)} size={"small"}/>
                                        {
                                            idx === 0 ? <div/> : <Button variant='text' color='error'
                                                                         onClick={() => handleS3b4RemovingColumn(idx)}>삭제</Button>
                                        }
                                    </>
                                ))
                            }

                            <div/>
                            <Button variant='text' onClick={handleS3b4AddingColumn}>추가하기</Button>
                            <div/>
                        </Grid>
                    </QuestionBlock>
                </>
            }


            {
                (s3b2 === '2' || s3b2 === '3') &&
                <>
                    <strong><em>※ 3-2.문항에서 2,3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>3-5. 귀하께서 영농규모(농지 또는 축사면적)를 늘리지 않으시려는 이유는 무엇입니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b5}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='생산비가 부담되서'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='생산 품목을 전환하기 위해서'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='인력의 확보가 어려워서(노동력이 부족)'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='자금 확보다 여의찮아서'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='단일 품목 생산을 위해서'/>
                                    <FormControlLabel value='6' control={<Radio/>} label='겸업 또는 부업 활동을 위해서'/>
                                    <FormControlLabel value='7' control={<Radio/>} label='농사를 그만두려고'/>
                                    <Stack direction='row'>
                                        <FormControlLabel value='8' control={<Radio/>} label='기타'/>
                                        <TextField value={s3b5_Etc8} onChange={(e) => setS3b5_Etc8(e.target.value)}
                                                   size={"small"}/>
                                    </Stack>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <QuestionBlock title={<div>3-6 귀하께서는 농지를 취득한 경험이 있으십니까?</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS3b6}>
                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='예'/>
                            <FormControlLabel value='2' control={<Radio/>} label='아니요'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                s3b6 === '1' &&
                <>
                    <strong><em>※ 3-6.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>3-6-1 귀하께서는 어떤 경로로 농지를 취득하셨습니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b6b1}>
                                <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='1. 농지은행을 통해서'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='2. 개인 간 매매를 통해서'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='3. 1,2번 둘다'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    {
                        (s3b6b1 === '2' || s3b6b1 === '3') &&
                        <>
                            <strong><em>※ 3-6-1.문항에서 2,3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                            <QuestionBlock title={<div>3-7-1. 개인간 매매로 농지를 취득한 경우 자금을 어떤 방식으로 조달하셨습니까?</div>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS3b7b1}>
                                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>}
                                                              label={<CenterBox>창업자급(3억) 등<br/>정부융자지원</CenterBox>}/>
                                            <FormControlLabel value='2' control={<Radio/>} label='은행 등 금융기관 대출'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='부모님 등 직계가족'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='자기자금'/>
                                            <Stack direction='row'>
                                                <FormControlLabel value='5' control={<Radio/>} label='기타'/>
                                                <TextField value={s3b7b1_Etc5}
                                                           onChange={(e) => setS3b7b1_Etc5(e.target.value)}
                                                           style={{flex: 1}} size={'small'}/>
                                            </Stack>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>


                            <strong><em>※ 3-6-1.문항에서 2,3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                            <QuestionBlock title={<div>3-7-2. 농지은행이 아닌 개인간 매매로 농지를 취득하신 주요 요인은 무엇입니까?</div>}>
                                <FormControl fullWidth>
                                    <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                        <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;
                                            <strong>{s3b7b2_1}</strong></CenterBox>
                                        <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;
                                            <strong>{s3b7b2_2}</strong></CenterBox>
                                        <CenterBox size={20} weight={500} padding={20}>3순위 :&nbsp;&nbsp;
                                            <strong>{s3b7b2_3}</strong></CenterBox>
                                        <div/>

                                        <FormControlLabel
                                            control={<Checkbox name='1' checked={s3b7b2Data[1]}
                                                               onChange={handleS3b7b2}/>}
                                            label='1. 담보 확보'/>
                                        <FormControlLabel
                                            control={<Checkbox name='2' checked={s3b7b2Data[2]}
                                                               onChange={handleS3b7b2}/>}
                                            label='2. 자부담 여력 없음'/>
                                        <FormControlLabel
                                            control={<Checkbox name='3' checked={s3b7b2Data[3]}
                                                               onChange={handleS3b7b2}/>}
                                            label='3. 금리가 비싸다'/>
                                        <FormControlLabel
                                            control={<Checkbox name='4' checked={s3b7b2Data[4]}
                                                               onChange={handleS3b7b2}/>}
                                            label='4. 상환기값이 짧다'/>
                                        <FormControlLabel
                                            control={<Checkbox name='5' checked={s3b7b2Data[5]}
                                                               onChange={handleS3b7b2}/>}
                                            label='5. 융자액이 적다'/>
                                        <FormControlLabel
                                            control={<Checkbox name='6' checked={s3b7b2Data[6]}
                                                               onChange={handleS3b7b2}/>}
                                            label='6, 복잡한 서류 절차'/>
                                        <FormControlLabel
                                            control={<Checkbox name='7' checked={s3b7b2Data[7]}
                                                               onChange={handleS3b7b2}/>}
                                            label='7. 정책자금의 중복 지원 불가'/>
                                        <FormControlLabel
                                            control={<Checkbox name='8' checked={s3b7b2Data[8]}
                                                               onChange={handleS3b7b2}/>}
                                            label='8. 자기자본 풍부'/>
                                        <Stack direction='row' justifyContent={"space-between"} paddingRight={5}>
                                            <FormControlLabel
                                                control={<Checkbox name='9' checked={s3b7b2Data[9]}
                                                                   onChange={handleS3b7b2}/>}
                                                label='9. 기타'/>
                                            <TextField value={s3b7b2_Etc9}
                                                       onChange={(e) => setS3b7b2_Etc9(e.target.value)} size={'small'}/>
                                        </Stack>
                                        <Stack direction='row' justifyContent={"space-between"} paddingRight={5}>
                                            <FormControlLabel
                                                control={<Checkbox name='10' checked={s3b7b2Data[10]}
                                                                   onChange={handleS3b7b2}/>}
                                                label='10. 기타'/>
                                            <TextField value={s3b7b2_Etc10}
                                                       onChange={(e) => setS3b7b2_Etc10(e.target.value)}
                                                       size={'small'}/>
                                        </Stack>
                                        <Stack direction='row' justifyContent={"space-between"} paddingRight={5}>
                                            <FormControlLabel
                                                control={<Checkbox name='11' checked={s3b7b2Data[11]}
                                                                   onChange={handleS3b7b2}/>}
                                                label='11. 기타'/>
                                            <TextField value={s3b7b2_Etc11}
                                                       onChange={(e) => setS3b7b2_Etc11(e.target.value)}
                                                       size={'small'}/>
                                        </Stack>
                                    </Grid>
                                </FormControl>
                            </QuestionBlock>
                        </>
                    }
                </>
            }


            <QuestionBlock title={<div>3-8. 귀하께서는 개인 간 매매 시 농지가격은 농지은행의 실거래가와 비교해 어떠했습니까?</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS3b8}>
                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='더 낮다'/>
                            <FormControlLabel value='2' control={<Radio/>} label='비슷하다'/>
                            <FormControlLabel value='3' control={<Radio/>} label='더 높다'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                s3b8 === '1' &&
                <>
                    <strong><em>※ 3-8.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>3-8-1. 귀하께서는 개인 간 매매 시 농지가격은 농지은행의 실거래가와 비교해 얼마나 더 낮았습니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b8b1}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='10% 이내'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='10 ~ 19%'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='20 ~ 29%'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='30 ~ 49%'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='50% 이상'/>
                                    <Stack direction='row'>
                                        <FormControlLabel value='6' control={<Radio/>} label='기타'/>
                                        <TextField value={s3b8b1_Etc6} onChange={(e) => setS3b8b1_Etc6(e.target.value)}
                                                   size={'small'}/>
                                    </Stack>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                s3b8 === '3' &&
                <>
                    <strong><em>※ 3-8.문항에서 3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>3-8-2. 귀하께서는 개인 간 매매 시 농지가격은 농지은행의 실거래가와 비교해 얼마나 더 높았습니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b8b2}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='10% 이내'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='10 ~ 19%'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='20 ~ 29%'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='30 ~ 49%'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='50% 이상'/>
                                    <Stack direction='row'>
                                        <FormControlLabel value='6' control={<Radio/>} label='기타'/>
                                        <TextField value={s3b8b2_Etc6} onChange={(e) => setS3b8b2_Etc6(e.target.value)}
                                                   size={"small"}/>
                                    </Stack>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }

            <SectorFooter sector={3} movePreviousSector={movePreviousSector} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

export default Sector3;