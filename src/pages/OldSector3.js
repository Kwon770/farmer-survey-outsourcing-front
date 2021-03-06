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

const OldSector3 = () => {
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

    const resetS3b3s = () => {
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
    const resetS3b4s = () => {
        setS3b4_1('');
        setS3b4_2('');
        setS3b4_3('');
        setS3b4_4('');
        setS3b4_5('');
        setS3b4Data([['', '', '']]);

        setS3b6('');
    }
    const resetS3b5s = () => {
        setS3b5('');
    }
    const handleS3b2 = ({target: {value}}) => {
        setS3b2(value);
        if (value !== '1') {
            resetS3b4s();
            resetS3b5s();
        } else if (value !== '2') {
            resetS3b3s();
        } else if (value !== '3') {
            resetS3b3s();
            resetS3b4s();
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
        // 2??? ?????? ????????? ??????
        let checking = false;
        let checkable = s3b3b2_1 === '' || s3b3b2_2 === '';
        s3b3b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2??? ?????? ????????? ??????
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
        // 3??? ?????? ????????? ??????
        let checking = false;
        let checkable = s3b7b2_1 === '' || s3b7b2_2 === '' || s3b7b2_3 === '';
        s3b7b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 3??? ?????? ????????? ??????
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
                3. ?????? ??????
            </TitleBlock>

            <QuestionBlock
                title={<div>3-1. ????????? ??????(2022???) ????????????(?????? ?????? ?????? ??????)??? ?????? ???????????????. ?????? ????????? ???????????? ??? ?????? ???????????? ????????????.</div>}>
                <Grid gridColumnProperty={"10fr 10fr 10fr 1fr"} rowGap={10} columnGap={10}>
                    <ColorCenterBlock>??????</ColorCenterBlock>
                    <ColorCenterBlock>?????? ?????? ??????<br/>(??????, ??????)</ColorCenterBlock>
                    <ColorCenterBlock>????????? ??????</ColorCenterBlock>
                    <div/>

                    {
                        s3b1Data.map((element, idx) => (
                            <>
                                <FormControl fullWidth size={'small'}>
                                    <Select displayEmpty value={element[0]} onChange={(e) => handleS3b1(e, idx, 0)}>
                                        <MenuItem disabled value={''}><i>?????????????????????????????????????????</i></MenuItem>
                                        <MenuItem value={'1'}>???</MenuItem>
                                        <MenuItem value={'2'}>???</MenuItem>
                                        <MenuItem value={'3'}>?????????</MenuItem>
                                        <MenuItem value={'4'}>????????????</MenuItem>
                                        <MenuItem value={'5'}>??????</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField placeholder='?????? ?????? ??????' type='number' value={element[1]}
                                               onChange={(e) => handleS3b1(e, idx, 1)} size={'small'}/>
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField placeholder='????????? ??????' type='number' value={element[2]}
                                               onChange={(e) => handleS3b1(e, idx, 2)} size={'small'}/>
                                </FormControl>

                                {
                                    idx === 0 ? <div/> : <Button variant='text' color='error'
                                                                 onClick={() => handleS3b1RemovingColumn(idx)}>??????</Button>
                                }
                            </>
                        ))
                    }

                    <div/>
                    <Button variant='text' onClick={handleS3b1AddingColumn}>????????????</Button>
                    <div/>
                </Grid>
            </QuestionBlock>


            <QuestionBlock title={<div>3-2. ??????????????? ?????? ????????????(?????? ?????? ?????? ??????)??? ?????? ?????? ???????????? ????????? ????????????????</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS3b2}>
                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='?????? (3-3 ??????)'/>
                            <FormControlLabel value='2' control={<Radio/>} label='?????? (3-4 ??????)'/>
                            <FormControlLabel value='3' control={<Radio/>} label='?????? ?????? (3-5 ??????)'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                s3b2 === '1' &&
                <>
                    <strong><em>??? 3-2.???????????? 1?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock
                        title={<div>3-3-1. ????????? ?????? ????????? ?????? ??????????????? ??????????????? ??? ?????? <strong>5??????(`27?????????)</strong> ????????????(?????? ?????? ??????
                            ??????)??? ?????? ?????? ???????????? ??????????????????? ?????? ????????? ???????????? ????????? ????????????????????????.</div>}
                    >
                        <Grid gridColumnProperty={"10fr 10fr 10fr 1fr"} rowGap={10} columnGap={10}>
                            <ColorCenterBlock>??????</ColorCenterBlock>
                            <ColorCenterBlock>?????? ?????? ??????<br/>(??????, ??????)</ColorCenterBlock>
                            <ColorCenterBlock>????????? ??????</ColorCenterBlock>
                            <div/>

                            {
                                s3b3b1Data.map((element, idx) => (
                                    <>
                                        <FormControl fullWidth size={'small'}>
                                            <Select displayEmpty value={element[0]}
                                                    onChange={(e) => handleS3b3b1(e, idx, 0)}>
                                                <MenuItem disabled value={''}><i>?????????????????????????????????????????</i></MenuItem>
                                                <MenuItem value={'1'}>???</MenuItem>
                                                <MenuItem value={'2'}>???</MenuItem>
                                                <MenuItem value={'3'}>?????????</MenuItem>
                                                <MenuItem value={'4'}>????????????</MenuItem>
                                                <MenuItem value={'5'}>??????</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <TextField placeholder='?????? ?????? ??????' type='number' value={element[1]}
                                                       onChange={(e) => handleS3b3b1(e, idx, 1)} size={'small'}/>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <TextField placeholder='????????? ??????' type='number' value={element[2]}
                                                       onChange={(e) => handleS3b3b1(e, idx, 2)} size={'small'}/>
                                        </FormControl>
                                        {
                                            idx === 0 ? <div/> : <Button variant='text' color='error'
                                                                         onClick={() => handleS3b3b1RemovingColumn(idx)}>??????</Button>
                                        }
                                    </>
                                ))
                            }

                            <div/>
                            <Button variant='text' onClick={handleS3b3b1AddingColumn}>????????????</Button>
                            <div/>
                        </Grid>
                    </QuestionBlock>


                    <QuestionBlock title={<div>3-3-2. ??????????????? ????????????(?????? ?????? ?????? ??????)??? ?????????????????? ????????? ????????????????</div>}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={"repeat(2,1fr)"}>

                                <CenterBox size={20} weight={500} padding={20}>1?????? :&nbsp;&nbsp;
                                    <strong>{s3b3b2_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2?????? :&nbsp;&nbsp;
                                    <strong>{s3b3b2_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s3b3b2Data[1]} onChange={handleS3b3b2}/>}
                                    label='1. ??????????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s3b3b2Data[2]} onChange={handleS3b3b2}/>}
                                    label='2. ??? ????????? ??????????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s3b3b2Data[3]} onChange={handleS3b3b2}/>}
                                    label='3. ?????? ????????? ??????????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s3b3b2Data[4]} onChange={handleS3b3b2}/>}
                                    label='4. ?????????????????? ????????? ???????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s3b3b2Data[5]} onChange={handleS3b3b2}/>}
                                    label='5. ?????????-?????? ???????????? ????????? ?????????'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s3b3b2Data[6]} onChange={handleS3b3b2}/>}
                                    label='6. ?????????-?????? ????????? ?????? ?????? ????????????'/>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='7' checked={s3b3b2Data[7]} onChange={handleS3b3b2}/>}
                                        label='7. ??????'/>
                                    <TextField value={s3b3b2_Etc7} onChange={(e) => setS3b3b2_Etc7(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s3b3b2Data[8]} onChange={handleS3b3b2}/>}
                                        label='8. ??????'/>
                                    <TextField value={s3b3b2_Etc8} onChange={(e) => setS3b3b2_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>


                    <QuestionBlock title={<div>3-3-3. ???????????? ??????????????? ????????? 2?????? ??? ??????, 3-3-1??? ????????? ?????? ?????? ?????? ????????? ?????????????</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b3b3}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='?????? ?????? ????????? ????????????.'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='?????? ???????????? ????????? 75% ?????????.'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='?????? ???????????? ????????? 50% ?????????.'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='?????? ???????????? ????????? 25% ?????????.'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='?????? ????????? ????????????.'/>
                                    <FormControlLabel value='6' control={<Radio/>} label='?????? ???????????? ????????? ??? ????????????.'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                s3b2 === '2' &&
                <>
                    <strong><em>??? 3-2.???????????? 2?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock
                        title={<div>3-4. ????????? ?????? ????????? ?????? ??????????????? ??????????????? ??? ?????? <strong>5??????(`27?????????)</strong> ????????????(?????? ?????? ?????????
                            ???)??? ?????? ?????? ???????????? ??????????????????? ?????? ????????? ???????????? ????????? ????????????????????????.</div>}
                    >
                        <Grid gridColumnProperty={"10fr 10fr 10fr 1fr"} rowGap={10} columnGap={10}>
                            <ColorCenterBlock>??????</ColorCenterBlock>
                            <ColorCenterBlock>?????? ?????? ??????<br/>(??????, ??????)</ColorCenterBlock>
                            <ColorCenterBlock>????????? ??????</ColorCenterBlock>
                            <div/>

                            {
                                s3b4Data.map((element, idx) => (
                                    <>
                                        <FormControl fullWidth size={'small'}>
                                            <Select displayEmpty value={element[0]}
                                                    onChange={(e) => handleS3b4(e, idx, 0)}>
                                                <MenuItem disabled value={''}><i>?????????????????????????????????????????</i></MenuItem>
                                                <MenuItem value={'1'}>???</MenuItem>
                                                <MenuItem value={'2'}>???</MenuItem>
                                                <MenuItem value={'3'}>?????????</MenuItem>
                                                <MenuItem value={'4'}>????????????</MenuItem>
                                                <MenuItem value={'5'}>??????</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <TextField placeholder='?????? ?????? ??????' type='number' value={element[1]}
                                                       onChange={(e) => handleS3b4(e, idx, 1)} size={"small"}/>
                                        </FormControl>
                                        <TextField placeholder='????????? ??????' type='number' value={element[2]}
                                                   onChange={(e) => handleS3b4(e, idx, 2)} size={"small"}/>
                                        {
                                            idx === 0 ? <div/> : <Button variant='text' color='error'
                                                                         onClick={() => handleS3b4RemovingColumn(idx)}>??????</Button>
                                        }
                                    </>
                                ))
                            }

                            <div/>
                            <Button variant='text' onClick={handleS3b4AddingColumn}>????????????</Button>
                            <div/>
                        </Grid>
                    </QuestionBlock>
                </>
            }


            {
                (s3b2 === '2' || s3b2 === '3') &&
                <>
                    <strong><em>??? 3-2.???????????? 2,3?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock title={<div>3-5. ???????????? ????????????(?????? ?????? ????????????)??? ????????? ??????????????? ????????? ????????????????</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b5}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='???????????? ????????????'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='?????? ????????? ???????????? ?????????'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='????????? ????????? ????????????(???????????? ??????)'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='?????? ????????? ???????????????'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='?????? ?????? ????????? ?????????'/>
                                    <FormControlLabel value='6' control={<Radio/>} label='?????? ?????? ?????? ????????? ?????????'/>
                                    <FormControlLabel value='7' control={<Radio/>} label='????????? ???????????????'/>
                                    <Stack direction='row'>
                                        <FormControlLabel value='8' control={<Radio/>} label='??????'/>
                                        <TextField value={s3b5_Etc8} onChange={(e) => setS3b5_Etc8(e.target.value)}
                                                   size={"small"}/>
                                    </Stack>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <QuestionBlock title={<div>3-6 ??????????????? ????????? ????????? ????????? ????????????????</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS3b6}>
                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='???'/>
                            <FormControlLabel value='2' control={<Radio/>} label='?????????'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                s3b6 === '1' &&
                <>
                    <strong><em>??? 3-6.???????????? 1?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock title={<div>3-6-1 ??????????????? ?????? ????????? ????????? ??????????????????????</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b6b1}>
                                <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='1. ??????????????? ?????????'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='2. ?????? ??? ????????? ?????????'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='3. 1,2??? ??????'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    {
                        (s3b6b1 === '2' || s3b6b1 === '3') &&
                        <>
                            <strong><em>??? 3-6-1.???????????? 2,3?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                            <QuestionBlock title={<div>3-7-1. ????????? ????????? ????????? ????????? ?????? ????????? ?????? ???????????? ??????????????????????</div>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS3b7b1}>
                                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>}
                                                              label={<CenterBox>????????????(3???) ???<br/>??????????????????</CenterBox>}/>
                                            <FormControlLabel value='2' control={<Radio/>} label='?????? ??? ???????????? ??????'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='????????? ??? ????????????'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='????????????'/>
                                            <Stack direction='row'>
                                                <FormControlLabel value='5' control={<Radio/>} label='??????'/>
                                                <TextField value={s3b7b1_Etc5}
                                                           onChange={(e) => setS3b7b1_Etc5(e.target.value)}
                                                           style={{flex: 1}} size={'small'}/>
                                            </Stack>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>


                            <strong><em>??? 3-6-1.???????????? 2,3?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                            <QuestionBlock title={<div>3-7-2. ??????????????? ?????? ????????? ????????? ????????? ???????????? ?????? ????????? ????????????????</div>}>
                                <FormControl fullWidth>
                                    <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                        <CenterBox size={20} weight={500} padding={20}>1?????? :&nbsp;&nbsp;
                                            <strong>{s3b7b2_1}</strong></CenterBox>
                                        <CenterBox size={20} weight={500} padding={20}>2?????? :&nbsp;&nbsp;
                                            <strong>{s3b7b2_2}</strong></CenterBox>
                                        <CenterBox size={20} weight={500} padding={20}>3?????? :&nbsp;&nbsp;
                                            <strong>{s3b7b2_3}</strong></CenterBox>
                                        <div/>

                                        <FormControlLabel
                                            control={<Checkbox name='1' checked={s3b7b2Data[1]}
                                                               onChange={handleS3b7b2}/>}
                                            label='1. ?????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='2' checked={s3b7b2Data[2]}
                                                               onChange={handleS3b7b2}/>}
                                            label='2. ????????? ?????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='3' checked={s3b7b2Data[3]}
                                                               onChange={handleS3b7b2}/>}
                                            label='3. ????????? ?????????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='4' checked={s3b7b2Data[4]}
                                                               onChange={handleS3b7b2}/>}
                                            label='4. ??????????????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='5' checked={s3b7b2Data[5]}
                                                               onChange={handleS3b7b2}/>}
                                            label='5. ???????????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='6' checked={s3b7b2Data[6]}
                                                               onChange={handleS3b7b2}/>}
                                            label='6, ????????? ?????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='7' checked={s3b7b2Data[7]}
                                                               onChange={handleS3b7b2}/>}
                                            label='7. ??????????????? ?????? ?????? ??????'/>
                                        <FormControlLabel
                                            control={<Checkbox name='8' checked={s3b7b2Data[8]}
                                                               onChange={handleS3b7b2}/>}
                                            label='8. ???????????? ??????'/>
                                        <Stack direction='row' justifyContent={"space-between"} paddingRight={5}>
                                            <FormControlLabel
                                                control={<Checkbox name='9' checked={s3b7b2Data[9]}
                                                                   onChange={handleS3b7b2}/>}
                                                label='9. ??????'/>
                                            <TextField value={s3b7b2_Etc9}
                                                       onChange={(e) => setS3b7b2_Etc9(e.target.value)} size={'small'}/>
                                        </Stack>
                                        <Stack direction='row' justifyContent={"space-between"} paddingRight={5}>
                                            <FormControlLabel
                                                control={<Checkbox name='10' checked={s3b7b2Data[10]}
                                                                   onChange={handleS3b7b2}/>}
                                                label='10. ??????'/>
                                            <TextField value={s3b7b2_Etc10}
                                                       onChange={(e) => setS3b7b2_Etc10(e.target.value)}
                                                       size={'small'}/>
                                        </Stack>
                                        <Stack direction='row' justifyContent={"space-between"} paddingRight={5}>
                                            <FormControlLabel
                                                control={<Checkbox name='11' checked={s3b7b2Data[11]}
                                                                   onChange={handleS3b7b2}/>}
                                                label='11. ??????'/>
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


            <QuestionBlock title={<div>3-8. ??????????????? ?????? ??? ?????? ??? ??????????????? ??????????????? ??????????????? ????????? ???????????????????</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS3b8}>
                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='??? ??????'/>
                            <FormControlLabel value='2' control={<Radio/>} label='????????????'/>
                            <FormControlLabel value='3' control={<Radio/>} label='??? ??????'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                s3b8 === '1' &&
                <>
                    <strong><em>??? 3-8.???????????? 1?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock title={<div>3-8-1. ??????????????? ?????? ??? ?????? ??? ??????????????? ??????????????? ??????????????? ????????? ????????? ??? ????????????????</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b8b1}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='10% ??????'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='10 ~ 19%'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='20 ~ 29%'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='30 ~ 49%'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='50% ??????'/>
                                    <Stack direction='row'>
                                        <FormControlLabel value='6' control={<Radio/>} label='??????'/>
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
                    <strong><em>??? 3-8.???????????? 3?????? ???????????? ?????? ???????????? ??????????????????.</em></strong>
                    <QuestionBlock title={<div>3-8-2. ??????????????? ?????? ??? ?????? ??? ??????????????? ??????????????? ??????????????? ????????? ????????? ??? ????????????????</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b8b2}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='10% ??????'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='10 ~ 19%'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='20 ~ 29%'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='30 ~ 49%'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='50% ??????'/>
                                    <Stack direction='row'>
                                        <FormControlLabel value='6' control={<Radio/>} label='??????'/>
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

export default OldSector3;