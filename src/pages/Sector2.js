import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Stack,
    TextField,
    Select,
    MenuItem, Button, InputAdornment
} from "@mui/material";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import Grid from "../components/Grid";
import QuestionBlock from "../components/QuestionBlock";
import ColorCenterBlock from "../components/ColorCenterBlock";
import CenterBox from "../components/CenterBox";
import SectorFooter from "../components/SectorFooter";

const Sector2 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem('sector1') === null) {
    //         movePreviousSector();
    //     }
    // }, [])


    const [s2b1_1, setS2b1_1] = useState('');
    const [s2b1_2, setS2b1_2] = useState('');
    const [s2b1_3, setS2b1_3] = useState('');
    const [s2b1_4, setS2b1_4] = useState('');
    const [s2b1_5, setS2b1_5] = useState('');
    const [s2b1Data, setS2b1Data] = useState([['', '', '']]);

    const [s2b2, setS2b2] = useState('');

    const [s2b3b1_1, setS2b3b1_1] = useState('');
    const [s2b3b1_2, setS2b3b1_2] = useState('');
    const [s2b3b1_3, setS2b3b1_3] = useState('');
    const [s2b3b1_4, setS2b3b1_4] = useState('');
    const [s2b3b1_5, setS2b3b1_5] = useState('');
    const [s2b3b1Data, setS2b3b1Data] = useState([['', '', '']]);

    const [s2b3b2_1, setS2b3b2_1] = useState('');
    const [s2b3b2_2, setS2b3b2_2] = useState('');
    const [s2b3b2Data, setS2b3b2Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false // 6
    ]);

    const [s2b3b3, setS2b3b3] = useState('');

    const [s2b4, setS2b4] = useState('');

    const [s2b4b1_1, setS2b4b1_1] = useState('');
    const [s2b4b1_2, setS2b4b1_2] = useState('');
    const [s2b4b1_Etc7, setS2b4b1_Etc7] = useState('');
    const [s2b4b1_Etc8, setS2b4b1_Etc8] = useState('');
    const [s2b4b1Data, setS2b4b1Data] = useState([
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

    const [s2b4b2_1, setS2b4b2_1] = useState('');
    const [s2b4b2_2, setS2b4b2_2] = useState('');
    const [s2b4b2_Etc7, setS2b4b2_Etc7] = useState('');
    const [s2b4b2_Etc8, setS2b4b2_Etc8] = useState('');
    const [s2b4b2Data, setS2b4b2Data] = useState([
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

        s2b1Data.forEach((element) => {
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

        if (bat_total === 0 || bat_rent === 0) setS2b1_2('');
        else setS2b1_2(bat_total + ',' + bat_rent);
        if (non_total === 0 || non_rent === 0) setS2b1_1('');
        else setS2b1_1(non_total + ',' + non_rent);
        if (gwa_total === 0 || gwa_rent === 0) setS2b1_3('');
        else setS2b1_3(gwa_total + ',' + gwa_rent);
        if (si_total === 0 || si_rent === 0) setS2b1_4('');
        else setS2b1_4(si_total + ',' + si_rent);
        if (chuk_total === 0 || chuk_rent === 0) setS2b1_5('');
        else setS2b1_5(chuk_total + ',' + chuk_rent);
    }, [s2b1Data])
    const handleS2b1 = (e, idx, type) => {
        setS2b1Data(s2b1Data.map((element, i) => {
            if (i === idx) {
                element[type] = e.target.value;
            }
            return element;
        }));
    }
    const handleS2b1AddingColumn = () => {
        setS2b1Data([...s2b1Data, ['', '', '']]);
    }
    const handleS2b1RemovingColumn = (idx) => {
        setS2b1Data(s2b1Data.filter((_, i) => i !== idx));
    }


    const resetAllS2b2_1s = () => {
        setS2b3b1_1('');
        setS2b3b1_2('');
        setS2b3b1_3('');
        setS2b3b1_4('');
        setS2b3b1_5('');
        setS2b3b1Data([['', '', '']]);

        setS2b3b2_1('');
        setS2b3b2_2('');
        setS2b3b2Data(s2b3b2Data.map(() => false));

        setS2b3b3('');

    }
    const resetAllS2b2_23s = () => {
        setS2b3b3('');
    }
    const handleS2b2 = ({target: {value}}) => {
        setS2b2(value);
        if (value !== '1') {
            resetAllS2b2_23s();
        } else {
            resetAllS2b2_1s();
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

        s2b3b1Data.forEach((element) => {
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

        if (bat_total === 0 || bat_rent === 0) setS2b3b1_1('');
        else setS2b3b1_1(bat_total + ',' + bat_rent);
        if (non_total === 0 || non_rent === 0) setS2b3b1_2('');
        else setS2b3b1_2(non_total + ',' + non_rent);
        if (gwa_total === 0 || gwa_rent === 0) setS2b3b1_3('');
        else setS2b3b1_3(gwa_total + ',' + gwa_rent);
        if (si_total === 0 || si_rent === 0) setS2b3b1_4('');
        else setS2b3b1_4(si_total + ',' + si_rent);
        if (chuk_total === 0 || chuk_rent === 0) setS2b3b1_5('');
        else setS2b3b1_5(chuk_total + ',' + chuk_rent);
    }, [s2b3b1Data])
    const handleS2b3b1 = (e, idx, type) => {
        setS2b3b1Data(s2b3b1Data.map((element, i) => {
            if (i === idx) {
                element[type] = e.target.value;
            }
            return element;
        }))
    }
    const handleS2b3b1AddingColumn = () => {
        setS2b3b1Data([...s2b3b1Data, ['', '', '']]);
    }
    const handleS2b3b1RemovingColumn = (idx) => {
        setS2b3b1Data(s2b3b1Data.filter((_, i) => i !== idx));
    }

    const handleS2b3b2 = (e) => {
        // 2개 선택 유효성 확인
        let checking = false;
        let checkable = s2b3b2_1 === '' || s2b3b2_2 === '';
        s2b3b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS2b3b2Data(s2b3b2Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s2b3b2_1 === '') setS2b3b2_1(e.target.name);
            else setS2b3b2_2(e.target.name);
        } else {
            if (s2b3b2_1 === e.target.name) setS2b3b2_1('');
            else setS2b3b2_2('');
        }
    }


    const handleS2b3b3 = (e) => {
        setS2b3b3(e.target.value);
    }


    const handleS2b4 = (e) => {
        setS2b4(e.target.value);
    }

    const handleS2b4b1 = (e) => {
        // 2개 선택 유효성 확인
        let checking = false;
        let checkable = s2b4b1_1 === '' || s2b4b1_2 === '';
        s2b4b1Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS2b4b1Data(s2b4b1Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s2b4b1_1 === '') setS2b4b1_1(e.target.name);
            else setS2b4b1_2(e.target.name);
        } else {
            if (s2b4b1_1 === e.target.name) setS2b4b1_1('');
            else setS2b4b1_2('');
        }
    }

    const handleS2b4b2 = (e) => {
        // 2개 선택 유효성 확인
        let checking = false;
        let checkable = s2b4b2_1 === '' || s2b4b2_2 === '';
        s2b4b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS2b4b2Data(s2b4b2Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s2b4b2_1 === '') setS2b4b2_1(e.target.name);
            else setS2b4b2_2(e.target.name);
        } else {
            if (s2b4b2_1 === e.target.name) setS2b4b2_1('');
            else setS2b4b2_2('');
        }
    }


    const validateAllWritten = () => {
        if (
            (s2b1_1 === '' && s2b1_2 === '' && s2b1_3 === '' && s2b1_4 === '' && s2b1_5 === '') ||
            s2b2 === '' ||
            s2b4 === ''
        ) {
            return false;
        }

        if (s2b2 === '1') {
            if (
                (s2b3b1_1 === '' && s2b3b1_2 === '' && s2b3b1_3 === '' && s2b3b1_4 === '' && s2b3b1_5 === '') ||
                s2b3b2_1 === '' || s2b3b2_2 === ''
            ) {
                return false;
            }
        }

        if (s2b2 === '2' || s2b2 === '3')
            if (s2b3b3 === '') {
                return false;
            }


        if (s2b4 === '1')
            if (s2b4b1_1 === '' || s2b4b1_2 === '')
                return false;

        if (s2b4 === '2')
            if (s2b4b2_1 === '' || s2b4b2_2 === '')
                return false;

        return true;
    }

    const saveSector2Data = () => {
        const sector3DataObject = {
            's2b1_1': s2b1_1,
            's2b1_2': s2b1_2,
            's2b1_3': s2b1_3,
            's2b1_4': s2b1_4,
            's2b1_5': s2b1_5,
            's2b2': s2b2,
            's2b3b1_1': s2b3b1_1,
            's2b3b1_2': s2b3b1_2,
            's2b3b1_3': s2b3b1_3,
            's2b3b1_4': s2b3b1_4,
            's2b3b1_5': s2b3b1_5,
            's2b3b2_1': s2b3b2_1,
            's2b3b2_2': s2b3b2_2,
            's2b3b3': s2b3b3,
            's2b4': s2b4,
            's2b4b1_1': s2b4b1_1,
            's2b4b1_2': s2b4b1_2,
            's2b4b2_1': s2b4b2_1,
            's2b4b2_2': s2b4b2_2
        }

        localStorage.setItem('sector3', JSON.stringify(sector3DataObject))

    }

    const movePreviousSector = () => {
        navigate('/1');
    }

    const moveNextSector = () => {
        if (!validateAllWritten()) {
            setAlertOpen(true)
            return
        }

        saveSector2Data()
        navigate('/3')
    }


    return (
        <Background>
            <TitleBlock>
                2. 청년농업인 농지 이용형태 및 수요
            </TitleBlock>

            <QuestionBlock
                title={<div>2-1. 귀하의 올해(2022년) 영농규모(농지 또는 축사 면적)를 묻는 문항입니다. 다음 표에서 해당하는 부 분에 응답하여 주십시오.</div>}>
                <Grid gridColumnProperty={"10fr 10fr 10fr 1fr"} rowGap={10} columnGap={10}>
                    <ColorCenterBlock>구분</ColorCenterBlock>
                    <ColorCenterBlock>전체 영농 면적<br/>(경작, 사육)</ColorCenterBlock>
                    <ColorCenterBlock>임대한 농지<br/>(자경지 제외)</ColorCenterBlock>
                    <div/>

                    {
                        s2b1Data.map((element, idx) => (
                            <>
                                <FormControl fullWidth size={'small'}>
                                    <Select displayEmpty value={element[0]} onChange={(e) => handleS2b1(e, idx, 0)}>
                                        <MenuItem disabled value={''}><i>논·밭·과수원·시설원예·축산</i></MenuItem>
                                        <MenuItem value={'1'}>논</MenuItem>
                                        <MenuItem value={'2'}>밭</MenuItem>
                                        <MenuItem value={'3'}>과수원</MenuItem>
                                        <MenuItem value={'4'}>시설원예</MenuItem>
                                        <MenuItem value={'5'}>축산</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField placeholder='전체 영농 면적' type='number' size={'small'}
                                               InputProps={{
                                                   endAdornment: <InputAdornment position="end">평</InputAdornment>
                                               }}
                                               value={element[1]} onChange={(e) => handleS2b1(e, idx, 1)}/>
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField placeholder='임대한 농지' type='number' size={'small'}
                                               InputProps={{
                                                   endAdornment: <InputAdornment position="end">평</InputAdornment>
                                               }}
                                               value={element[2]} onChange={(e) => handleS2b1(e, idx, 2)}/>
                                </FormControl>

                                {
                                    idx === 0 ? <div/> : <Button variant='text' color='error'
                                                                 onClick={() => handleS2b1RemovingColumn(idx)}>삭제</Button>
                                }
                            </>
                        ))
                    }

                    <div/>
                    <Button variant='text' onClick={handleS2b1AddingColumn}>추가하기</Button>
                    <div/>
                </Grid>
            </QuestionBlock>


            <QuestionBlock title={<div>2-2. 귀하께서는 현재 영농규모(농지 또는 축사 면적)를 확대 또는 축소하실 계획이 있으십니까?</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS2b2}>
                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='확대'/>
                            <FormControlLabel value='2' control={<Radio/>} label='축소'/>
                            <FormControlLabel value='3' control={<Radio/>} label='계획 없음'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                s2b2 === '1' &&
                <>
                    <strong><em>※ 2-2.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock
                        title={<div>2-3-1. 귀하의 자금 여력과 현재 농지가격을 고려하였을 때 향후 <strong>5년간(`27년까지)</strong> 영농규모(농지 또는 축사
                            면적)를 어느 정도 확대하실 계획이십니까? 다음 표에서 해당하는 부분에 응답하여주십시오.</div>}
                    >
                        <Grid gridColumnProperty={"10fr 10fr 10fr 1fr"} rowGap={10} columnGap={10}>
                            <ColorCenterBlock>구분</ColorCenterBlock>
                            <ColorCenterBlock>확대하고자 하는 영농 면적<br/>(경작, 사육)</ColorCenterBlock>
                            <ColorCenterBlock>확대하고자 하는 임차 농지<br/>(자경지 제외)</ColorCenterBlock>
                            <div/>

                            {
                                s2b3b1Data.map((element, idx) => (
                                    <>
                                        <FormControl fullWidth size={'small'}>
                                            <Select displayEmpty value={element[0]}
                                                    onChange={(e) => handleS2b3b1(e, idx, 0)}>
                                                <MenuItem disabled value={''}><i>논·밭·과수원·시설원예·축산</i></MenuItem>
                                                <MenuItem value={'1'}>논</MenuItem>
                                                <MenuItem value={'2'}>밭</MenuItem>
                                                <MenuItem value={'3'}>과수원</MenuItem>
                                                <MenuItem value={'4'}>시설원예</MenuItem>
                                                <MenuItem value={'5'}>축산</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <TextField placeholder='확대 영농 면적' type='number' size={'small'}
                                                       InputProps={{
                                                           endAdornment: <InputAdornment
                                                               position="end">평</InputAdornment>
                                                       }}
                                                       value={element[1]} onChange={(e) => handleS2b3b1(e, idx, 1)}/>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <TextField placeholder='확대 임차 농지' type='number' size={'small'}
                                                       InputProps={{
                                                           endAdornment: <InputAdornment
                                                               position="end">%</InputAdornment>
                                                       }}
                                                       value={element[2]} onChange={(e) => handleS2b3b1(e, idx, 2)}/>
                                        </FormControl>
                                        {
                                            idx === 0 ? <div/> : <Button variant='text' color='error'
                                                                         onClick={() => handleS2b3b1RemovingColumn(idx)}>삭제</Button>
                                        }
                                    </>
                                ))
                            }

                            <div/>
                            <Button variant='text' onClick={handleS2b3b1AddingColumn}>추가하기</Button>
                            <div/>
                        </Grid>
                    </QuestionBlock>


                    <QuestionBlock title={<div>2-3-2. 귀하께서는 영농규모(농지 또는 축사 면적)를 확대하시려는 이유는 무엇입니까?</div>}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={"repeat(2,1fr)"}>

                                <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;
                                    <strong>{s2b3b2_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;
                                    <strong>{s2b3b2_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s2b3b2Data[1]} onChange={handleS2b3b2}/>}
                                    label='1. 영농소득을 늘리기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s2b3b2Data[2]} onChange={handleS2b3b2}/>}
                                    label='2. 주 작목의 생산규모를 늘리기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s2b3b2Data[3]} onChange={handleS2b3b2}/>}
                                    label='3. 생산 품목을 다양화하기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s2b3b2Data[4]} onChange={handleS2b3b2}/>}
                                    label='4. 자산가치로써 농지를 확보하기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s2b3b2Data[5]} onChange={handleS2b3b2}/>}
                                    label='5. 농기계-설비 이용률을 높이기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s2b3b2Data[6]} onChange={handleS2b3b2}/>}
                                    label='6. 농기계-설비 확충을 위한 적정 면적확보'/>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                (s2b2 === '2' || s2b2 === '3') &&
                <>
                    <strong><em>※ 2-2.문항에서 2,3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-3-3. 귀하께서 영농규모(농지 또는 축사면적)를 늘리지 않으시려는 이유는 무엇입니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS2b3b3}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='생산비가 부담되서'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='생산 품목을 전환하기 위해서'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='인력의 확보가 어려워서(노동력이 부족)'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='자금 확보다 여의찮아서'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='단일 품목 생산을 위해서'/>
                                    <FormControlLabel value='6' control={<Radio/>} label='겸업 또는 부업 활동을 위해서'/>
                                    <FormControlLabel value='7' control={<Radio/>} label='농사를 그만두려고'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <QuestionBlock title={<div>
                2-4. 만약 귀하께서 확대하고자 하는 영농규모를 취득(매매 또는 임차)하기가 여의치 않을 경우, 유휴농지라도 어느 정도 정비가 이루어진다면 활용할 의향이 있습니까?<br/>
                <br/>
                <strong><em>* 유휴농지</em></strong>는 <strong><em>2년 이상 경작을 하지 않아 경지로서의 형태를 상실하였고, 현시점에서는 향후 경 지로 이용할 가능성이
                낮다고 판단되는 땅</em></strong>으로 농지의 물리적인 영농조건이 열악하거나 농산물 시장의 가격조건이 불리한 경우 발생하는 토지입니다.
            </div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS2b4}>
                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='예'/>
                            <FormControlLabel value='2' control={<Radio/>} label='아니요'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                (s2b4 === '1') &&
                <>
                    <strong><em>※ 2-4 문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-4-1. 귀하께서 유휴농지를 활용할 의향이 있다면, 그 이유는 무엇입니까?</div>}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={"repeat(2,1fr)"}>

                                <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;
                                    <strong>{s2b4b1_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;
                                    <strong>{s2b4b1_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s2b4b1Data[1]} onChange={handleS2b4b1}/>}
                                    label='1. 영농소득을 늘리기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s2b4b1Data[2]} onChange={handleS2b4b1}/>}
                                    label='2. 주 작목의 생산규모를 늘리기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s2b4b1Data[3]} onChange={handleS2b4b1}/>}
                                    label='3. 생산 품목을 다양화하기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s2b4b1Data[4]} onChange={handleS2b4b1}/>}
                                    label='4. 자산가치로써 농지를 확보하기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s2b4b1Data[5]} onChange={handleS2b4b1}/>}
                                    label='5. 농기계-설비 이용률을 높이기 위해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s2b4b1Data[6]} onChange={handleS2b4b1}/>}
                                    label='6. 농기계-설비 확충을 위한 적정 면적확보'/>

                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='7' checked={s2b4b1Data[7]} onChange={handleS2b4b1}/>}
                                        label='7. 기타'/>
                                    <TextField value={s2b4b1_Etc7} onChange={(e) => setS2b4b1_Etc7(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s2b4b1Data[8]} onChange={handleS2b4b1}/>}
                                        label='8. 기타'/>
                                    <TextField value={s2b4b1_Etc8} onChange={(e) => setS2b4b1_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                (s2b4 === '2') &&
                <>
                    <strong><em>※ 2-4 문항에서 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-4-2. 귀하는 유휴농지를 활용할 의향이 없다면, 그 이유는 무엇입니까?</div>}>
                        <FormControl fullWidth>
                            <Grid gridColumnProperty={"repeat(2,1fr)"}>

                                <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;
                                    <strong>{s2b4b2_1}</strong></CenterBox>
                                <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;
                                    <strong>{s2b4b2_2}</strong></CenterBox>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s2b4b2Data[1]} onChange={handleS2b4b2}/>}
                                    label='1. 농지 정비에 많은 비용이 소요되므로'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s2b4b2Data[2]} onChange={handleS2b4b2}/>}
                                    label='2. 거주지와의 거리가 멀어서'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s2b4b2Data[3]} onChange={handleS2b4b2}/>}
                                    label='3. 농기계·설비 진입이 어려워서'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s2b4b2Data[4]} onChange={handleS2b4b2}/>}
                                    label='4. 토양이 비옥하지 않아서'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s2b4b2Data[5]} onChange={handleS2b4b2}/>}
                                    label='5. 용·베스 여건이 불량해서'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s2b4b2Data[6]} onChange={handleS2b4b2}/>}
                                    label='6. 야생동물이 자주 출몰해서'/>

                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='7' checked={s2b4b2Data[7]} onChange={handleS2b4b2}/>}
                                        label='7. 기타'/>
                                    <TextField value={s2b4b2_Etc7} onChange={(e) => setS2b4b2_Etc7(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='8' checked={s2b4b2Data[8]} onChange={handleS2b4b2}/>}
                                        label='8. 기타'/>
                                    <TextField value={s2b4b2_Etc8} onChange={(e) => setS2b4b2_Etc8(e.target.value)}
                                               size={"small"}/>
                                </Stack>
                            </Grid>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <SectorFooter sector={2} movePreviousSector={movePreviousSector} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

export default Sector2;