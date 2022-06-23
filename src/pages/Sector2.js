import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Background from "../components/Background";
import {useNavigate} from "react-router-dom";
import TitleBlock from "../components/TitleBlock";
import QuestionBlock from "../components/QuestionBlock";
import SectorFooter from "../components/SectorFooter";
import {Button, FormControlLabel, Select, MenuItem, Radio, TextField, Checkbox, Stack} from "@mui/material";
import SmallQuestionBlock from "../components/SmallQuestionBlock";
import CenterBox from "../components/CenterBox";

const Sector2 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);
    const [s2b1_1, setS2b1_1] = useState('');
    const [s2b1_2, setS2b1_2] = useState('');
    const [s2b1_3, setS2b1_3] = useState('');
    const [s2b1_4, setS2b1_4] = useState('');
    const [s2b1_5, setS2b1_5] = useState('');
    const [s2b1Data, setS2b1Data] = useState([]);

    const [s2b2, setS2b2] = useState('');

    const [s2b3b1_1, setS2b3b1_1] = useState('');
    const [s2b3b1_2, setS2b3b1_2] = useState('');
    const [s2b3b1_3, setS2b3b1_3] = useState('');
    const [s2b3b1_4, setS2b3b1_4] = useState('');
    const [s2b3b1_5, setS2b3b1_5] = useState('');
    const [s2b3b1Data, setS2b3b1Data] = useState([]);

    const [s2b3b2_1, setS2b3b2_1] = useState('');
    const [s2b3b2_2, setS2b3b2_2] = useState('');
    const [s2b3b2_Etc7, setS2b3b2_Etc7] = useState('')
    const [s2b3b2_Etc8, setS2b3b2_Etc8] = useState('')
    const [s2b3b2Data, setS2b3b2Data] = useState([
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

    const [s2b3b3, setS2b3b3] = useState('');

    const [s2b4_1, setS2b4_1] = useState('');
    const [s2b4_2, setS2b4_2] = useState('');
    const [s2b4_3, setS2b4_3] = useState('');
    const [s2b4_4, setS2b4_4] = useState('');
    const [s2b4_5, setS2b4_5] = useState('');
    const [s2b4Data, setS2b4Data] = useState([]);

    const [s2b5, setS2b5] = useState('');
    const [s2b5_Etc, setS2b5_Etc] = useState('');

    const [s2b6, setS2b6] = useState('');
    const [s2b6b1, setS2b6b1] = useState('');

    const [s2b7b1, setS2b7b1] = useState('');
    const [s2b7b1_Etc, setS2b7b1_Etc] = useState('');

    const [s2b7b2_1, setS2b7b2_1] = useState('');
    const [s2b7b2_2, setS2b7b2_2] = useState('');
    const [s2b7b2_3, setS2b7b2_3] = useState('');
    const [s2b7b2_Etc9, setS2b7b2_Etc9] = useState('');
    const [s2b7b2_Etc10, setS2b7b2_Etc10] = useState('');
    const [s2b7b2_Etc11, setS2b7b2_Etc11] = useState('');
    const [s2b7b2Data, setS2b7b2Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false, // 11
    ])

    const [s2b8, setS2b8] = useState('');
    const [s2b8b1, setS2b8b1] = useState('');
    const [s2b8b1_Etc, setS2b8b1_Etc] = useState('');
    const [s2b8b2, setS2b8b2] = useState('');
    const [s2b8b2_Etc, setS2b8b2_Etc] = useState('');

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
                    non_total += parseInt(element[1])
                    non_rent += parseInt(element[2]);
                    break;
                case '2':
                    bat_total += parseInt(element[1])
                    bat_rent += parseInt(element[2]);
                    break;
                case '3':
                    gwa_total += parseInt(element[1])
                    gwa_rent += parseInt(element[2]);
                    break;
                case '4':
                    si_total += parseInt(element[1])
                    si_rent += parseInt(element[2]);
                    break;
                case '5':
                    chuk_total += parseInt(element[1])
                    chuk_rent += parseInt(element[2]);
                    break;
            }
        })

        setS2b1_1(non_total + ',' + non_rent)
        setS2b1_2(bat_total + ',' + bat_rent)
        setS2b1_3(gwa_total + ',' + gwa_rent)
        setS2b1_4(si_total + ',' + si_rent)
        setS2b1_5(chuk_total + ',' + chuk_rent)
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

    const handleS2b2 = (e) => {
        setS2b2(e.target.value);
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
                    non_total += parseInt(element[1])
                    non_rent += parseInt(element[2]);
                    break;
                case '2':
                    bat_total += parseInt(element[1])
                    bat_rent += parseInt(element[2]);
                    break;
                case '3':
                    gwa_total += parseInt(element[1])
                    gwa_rent += parseInt(element[2]);
                    break;
                case '4':
                    si_total += parseInt(element[1])
                    si_rent += parseInt(element[2]);
                    break;
                case '5':
                    chuk_total += parseInt(element[1])
                    chuk_rent += parseInt(element[2]);
                    break;
            }
        })

        setS2b3b1_1(non_total + ',' + non_rent)
        setS2b3b1_2(bat_total + ',' + bat_rent)
        setS2b3b1_3(gwa_total + ',' + gwa_rent)
        setS2b3b1_4(si_total + ',' + si_rent)
        setS2b3b1_5(chuk_total + ',' + chuk_rent)
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
            if (!b && idx === parseInt(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS2b3b2Data(s2b3b2Data.map((b, idx) => {
            if (idx === parseInt(e.target.name)) {
                if (checking) {
                    if (s2b3b2_1 === '') setS2b3b2_1(e.target.name);
                    else setS2b3b2_2(e.target.name);
                } else {
                    if (s2b3b2_1 === e.target.name) setS2b3b2_1('');
                    else setS2b3b2_2('');
                }

                return !b
            } else {
                return b
            }
        }))
    }
    const handleS2b3b3 = (e) => {
        setS2b3b3(e.target.value);
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

        s2b4Data.forEach((element) => {
            switch (element[0]) {
                case '1':
                    non_total += parseInt(element[1])
                    non_rent += parseInt(element[2]);
                    break;
                case '2':
                    bat_total += parseInt(element[1])
                    bat_rent += parseInt(element[2]);
                    break;
                case '3':
                    gwa_total += parseInt(element[1])
                    gwa_rent += parseInt(element[2]);
                    break;
                case '4':
                    si_total += parseInt(element[1])
                    si_rent += parseInt(element[2]);
                    break;
                case '5':
                    chuk_total += parseInt(element[1])
                    chuk_rent += parseInt(element[2]);
                    break;
            }
        })

        setS2b4_1(non_total + ',' + non_rent)
        setS2b4_2(bat_total + ',' + bat_rent)
        setS2b4_3(gwa_total + ',' + gwa_rent)
        setS2b4_4(si_total + ',' + si_rent)
        setS2b4_5(chuk_total + ',' + chuk_rent)
    }, [s2b4Data])
    const handleS2b4 = (e, idx, type) => {
        setS2b4Data(s2b4Data.map((element, i) => {
            if (i === idx) {
                element[type] = e.target.value;
            }
            return element;
        }))
    }
    const handleS2b4AddingColumn = () => {
        setS2b4Data([...s2b4Data, ['', '', '']]);
    }
    const handleS2b4RemovingColumn = (idx) => {
        setS2b4Data(s2b4Data.filter((_, i) => i !== idx));
    }

    const handleS2b5 = (e) => {
        setS2b5(e.target.value);
    }

    const handleS2b6 = (e) => {
        setS2b6(e.target.value);
    }
    const handleS2b6b1 = (e) => {
        setS2b6b1(e.target.value);
    }

    const handleS2b7b1 = (e) => {
        setS2b7b1(e.target.value);
    }
    const handleS2b7b2 = (e) => {
        // 3개 선택 유효성 확인
        let checking = false;
        let checkable = s2b7b2_1 === '' || s2b7b2_2 === '' || s2b7b2_3 === '';
        s2b7b2Data.forEach((b, idx) => {
            if (!b && idx === parseInt(e.target.name)) checking = true;
        })
        // 3개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        if (checking) {
            if (s2b7b2_1 === '') {
                setS2b7b2_1(e.target.name);
            } else if (s2b7b2_2 === '') {
                setS2b7b2_2(e.target.name);
            } else {
                setS2b7b2_3(e.target.name);
            }
        } else {
            if (s2b7b2_1 === e.target.name) setS2b7b2_1('');
            else if (s2b7b2_2 === e.target.name) setS2b7b2_2('');
            else setS2b7b2_3('');
        }

        setS2b7b2Data(s2b7b2Data.map((b, idx) => {
            if (idx === parseInt(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))
    }

    const handleS2b8 = (e) => {
        setS2b8(e.target.value);
    }
    const handleS2b8b1 = (e) => {
        setS2b8b1(e.target.value);
    }
    const handleS2b8b2 = (e) => {
        setS2b8b2(e.target.value);
    }


    const validateAllWritten = () => {
        // if (
        //     (s2b1_1 === '' && s2b1_2 === '' && s2b1_3 === '' && s2b1_4 === '' && s2b1_5 === '' ) ||
        //     s2b2 === ''
        // ) {
        //     return false;
        // }
        //
        // if (s2b2 === '1')
        //     if (/**/
        //         s2b3b2 === '' || s2b3b2_2 === '' || s2b3b3 === '')
        //         return false;
        //
        // return true;
    }

    const saveSector2Data = () => {
        const sector2DataObject = {
            //
            //
        }

        localStorage.setItem('sector2', JSON.stringify(sector2DataObject))

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
                2. 농지 수요
            </TitleBlock>

            <QuestionBlock
                title={<div>2-1. 귀하의 올해(2022년) 영농규모(농지 또는 축사 면적)를 묻는 문항입니다. 다음 표에서 해당하는 부 분에 응답하여 주십시오.</div>}
                gridColumnProperty={"10fr 10fr 10fr 1fr"}
                rowGap={10}
                columnGap={10}
                onChange={handleS2b1}
            >
                <ColorCenterBlock>구분</ColorCenterBlock>
                <ColorCenterBlock>전체 영농 면적<br/>(경작, 사육)</ColorCenterBlock>
                <ColorCenterBlock>임대한 농지</ColorCenterBlock>
                <div/>

                {
                    s2b1Data.map((element, idx) => (
                        <>
                            <Select value={element[0]} onChange={(e) => handleS2b3b1(e, idx, 0)}>
                                <MenuItem value={'1'}>논</MenuItem>
                                <MenuItem value={'2'}>밭</MenuItem>
                                <MenuItem value={'3'}>과수원</MenuItem>
                                <MenuItem value={'4'}>시설원예</MenuItem>
                                <MenuItem value={'5'}>축산</MenuItem>
                            </Select>
                            <TextField type='number' value={element[1]} onChange={(e) => handleS2b1(e, idx, 1)}/>
                            <TextField type='number' value={element[2]} onChange={(e) => handleS2b1(e, idx, 2)}/>
                            <Button variant='text' color='error'
                                    onClick={() => handleS2b1RemovingColumn(idx)}>삭제</Button>
                        </>
                    ))
                }

                <div/>
                <Button variant='text' onClick={handleS2b1AddingColumn}>추가하기</Button>
                <div/>
            </QuestionBlock>

            <QuestionBlock title={<div>2-2. 귀하께서는 현재 영농규모(농지 또는 축사 면적)를 확대 또는 축소하실 계획이 있으십니까?</div>}
                           gridColumnProperty={"repeat(3,1fr)"}
                           onChange={handleS2b2}
            >
                <FormControlLabel value='1' control={<Radio/>} label='확대 (2-3 응답)'/>
                <FormControlLabel value='2' control={<Radio/>} label='축소 (2-4 응답)'/>
                <FormControlLabel value='3' control={<Radio/>} label='계획 없음 (2-5 응답)'/>
            </QuestionBlock>

            {
                s2b2 === '1' &&
                <>
                    <strong><em>※ 2-2.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock
                        title={<div>2-3-1. 귀하의 자금 여력과 현재 농지가격을 고려하였을 때 향후 <strong>5년간(`27년까지)</strong> 영농규모(농지 또는 축사
                            면적)를 어느 정도 확대하실 계획이십니까? 다음 표에서 해당하는 부분에 응답하여주십시오.</div>}
                        gridColumnProperty={"10fr 10fr 10fr 1fr"}
                        rowGap={10}
                        columnGap={10}
                        onChange={handleS2b3b1}
                    >
                        <ColorCenterBlock>구분</ColorCenterBlock>
                        <ColorCenterBlock>전체 영농 면적<br/>(경작, 사육)</ColorCenterBlock>
                        <ColorCenterBlock>임대한 농지</ColorCenterBlock>
                        <div/>

                        {
                            s2b3b1Data.map((element, idx) => (
                                <>
                                    <Select value={element[0]} onChange={(e) => handleS2b3b1(e, idx, 0)}>
                                        <MenuItem value={'1'}>논</MenuItem>
                                        <MenuItem value={'2'}>밭</MenuItem>
                                        <MenuItem value={'3'}>과수원</MenuItem>
                                        <MenuItem value={'4'}>시설원예</MenuItem>
                                        <MenuItem value={'5'}>축산</MenuItem>
                                    </Select>
                                    <TextField type='number' value={element[1]}
                                               onChange={(e) => handleS2b3b1(e, idx, 1)}/>
                                    <TextField type='number' value={element[2]}
                                               onChange={(e) => handleS2b3b1(e, idx, 2)}/>
                                    <Button variant='text' color='error'
                                            onClick={() => handleS2b3b1RemovingColumn(idx)}>삭제</Button>
                                </>
                            ))
                        }

                        <div/>
                        <Button variant='text' onClick={handleS2b3b1AddingColumn}>추가하기</Button>
                        <div/>
                    </QuestionBlock>

                    <QuestionBlock title={<div>2-3-2. 귀하께서는 영농규모(농지 또는 축사 면적)를 확대하시려는 이유는 무엇입니까?</div>}
                                   gridColumnProperty={"repeat(2,1fr)"}
                                   onChange={handleS2b3b2}
                    >
                        <CenterBox padding={20}>1순위 : <strong>{s2b3b2_1}</strong></CenterBox>
                        <CenterBox padding={20}>2순위 : <strong>{s2b3b2_2}</strong></CenterBox>

                        <FormControlLabel control={<Checkbox name='1' checked={s2b3b2Data[1]} onChange={handleS2b3b2}/>}
                                          label='1. 영농소득을 늘리기 위해서'/>
                        <FormControlLabel control={<Checkbox name='2' checked={s2b3b2Data[2]} onChange={handleS2b3b2}/>}
                                          label='2. 주 작목의 생산규모를 늘리기 위해서'/>
                        <FormControlLabel control={<Checkbox name='3' checked={s2b3b2Data[3]} onChange={handleS2b3b2}/>}
                                          label='3. 생산 품목을 다양화하기 위해서'/>
                        <FormControlLabel control={<Checkbox name='4' checked={s2b3b2Data[4]} onChange={handleS2b3b2}/>}
                                          label='4. 자산가치로써 농지를 확보하기 위해서'/>
                        <FormControlLabel control={<Checkbox name='5' checked={s2b3b2Data[5]} onChange={handleS2b3b2}/>}
                                          label='5. 농기계-설비 이용률을 높이기 위해서'/>
                        <FormControlLabel control={<Checkbox name='6' checked={s2b3b2Data[6]} onChange={handleS2b3b2}/>}
                                          label='6. 농기계-설비 확충을 위한 적정 면적확보'/>
                        <Stack direction='row'>
                            <FormControlLabel
                                control={<Checkbox name='7' checked={s2b3b2Data[7]} onChange={handleS2b3b2}/>}
                                label='7. 기타'/>
                            <TextField value={s2b3b2_Etc7} onChange={(e) => setS2b3b2_Etc7(e.target.value)}/>
                        </Stack>
                        <Stack direction='row'>
                            <FormControlLabel
                                control={<Checkbox name='8' checked={s2b3b2Data[8]} onChange={handleS2b3b2}/>}
                                label='8. 기타'/>
                            <TextField value={s2b3b2_Etc8} onChange={(e) => setS2b3b2_Etc8(e.target.value)}/>
                        </Stack>
                    </QuestionBlock>

                    <QuestionBlock title={<div>2-3-3. 귀하께서 농지가격이 현재의 2배가 될 경우, 2-3-1의 응답에 대략 어느 정도 변화가 있습니까?</div>}
                                   gridColumnProperty={"repeat(2,1fr)"}
                                   onChange={handleS2b3b3}
                    >
                        <FormControlLabel value='1' control={<Radio/>} label='면적 확대 계획을 철회한다.'/>
                        <FormControlLabel value='2' control={<Radio/>} label='당초 계획했던 면적을 75% 줄인다.'/>
                        <FormControlLabel value='3' control={<Radio/>} label='당초 계획했던 면적을 50% 줄인다.'/>
                        <FormControlLabel value='4' control={<Radio/>} label='당초 계획했던 면적을 25% 줄인다.'/>
                        <FormControlLabel value='5' control={<Radio/>} label='기존 계획과 변함없다.'/>
                        <FormControlLabel value='6' control={<Radio/>} label='기존 계획보다 면적을 더 확보한다.'/>
                    </QuestionBlock>
                </>
            }

            {
                s2b2 === '2' &&
                <>
                    <strong><em>※ 2-2.문항에서 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock
                        title={<div>2-4. 귀하의 자금 여력과 현재 농지가격을 고려하였을 때 향후 <strong>5년간(`27년까지)</strong> 영농규모(농지 또는 축사면
                            적)를 어느 정도 축소하실 계획이십니까? 다음 표에서 해당하는 부분에 응답하여주십시오.</div>}
                        gridColumnProperty={"10fr 10fr 10fr 1fr"}
                        rowGap={10}
                        columnGap={10}
                        onChange={handleS2b4}
                    >
                        <ColorCenterBlock>구분</ColorCenterBlock>
                        <ColorCenterBlock>전체 영농 면적<br/>(경작, 사육)</ColorCenterBlock>
                        <ColorCenterBlock>임대한 농지</ColorCenterBlock>
                        <div/>

                        {
                            s2b4Data.map((element, idx) => (
                                <>
                                    <Select value={element[0]} onChange={(e) => handleS2b4(e, idx, 0)}>
                                        <MenuItem value={'1'}>논</MenuItem>
                                        <MenuItem value={'2'}>밭</MenuItem>
                                        <MenuItem value={'3'}>과수원</MenuItem>
                                        <MenuItem value={'4'}>시설원예</MenuItem>
                                        <MenuItem value={'5'}>축산</MenuItem>
                                    </Select>
                                    <TextField type='number' value={element[1]}
                                               onChange={(e) => handleS2b4(e, idx, 1)}/>
                                    <TextField type='number' value={element[2]}
                                               onChange={(e) => handleS2b4(e, idx, 2)}/>
                                    <Button variant='text' color='error'
                                            onClick={() => handleS2b4RemovingColumn(idx)}>삭제</Button>
                                </>
                            ))
                        }

                        <div/>
                        <Button variant='text' onClick={handleS2b4AddingColumn}>추가하기</Button>
                        <div/>
                    </QuestionBlock>
                </>
            }

            {
                (s2b2 === '2' || s2b2 === '3') &&
                <>
                    <strong><em>※ 2-2.문항에서 2,3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-5. 귀하께서 영농규모(농지 또는 축사면적)를 늘리지 않으시려는 이유는 무엇입니까?</div>}
                                   gridColumnProperty={"repeat(2,1fr)"}
                                   onChange={handleS2b5}
                    >
                        <FormControlLabel value='1' control={<Radio/>} label='생산비가 부담되서'/>
                        <FormControlLabel value='2' control={<Radio/>} label='생산 품목을 전환하기 위해서'/>
                        <FormControlLabel value='3' control={<Radio/>} label='인력의 확보가 어려워서(노동력이 부족)'/>
                        <FormControlLabel value='4' control={<Radio/>} label='자금 확보다 여의찮아서'/>
                        <FormControlLabel value='5' control={<Radio/>} label='단일 품목 생산을 위해서'/>
                        <FormControlLabel value='6' control={<Radio/>} label='겸업 또는 부업 활동을 위해서'/>
                        <FormControlLabel value='7' control={<Radio/>} label='농사를 그만두려고'/>
                        <Stack direction='row'>
                            <FormControlLabel value='8' control={<Radio/>} label='기타'/>
                            <TextField value={s2b5_Etc} onChange={(e) => setS2b5_Etc(e.target.value)}/>
                        </Stack>
                    </QuestionBlock>
                </>
            }

            <QuestionBlock title={<div>2-6 귀하께서는 농지를 취득한 경험이 있으십니까?</div>}
                           gridColumnProperty={"repeat(2,1fr)"}
                           onChange={handleS2b6}
            >
                <FormControlLabel value='1' control={<Radio/>} label='예'/>
                <FormControlLabel value='2' control={<Radio/>} label='아니요'/>
            </QuestionBlock>

            {
                s2b6 === '1' &&
                <>
                    <strong><em>※ 2-6.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-6-1 귀하께서는 어떤 경로로 농지를 취득하셨습니까?</div>}
                                   gridColumnProperty={"repeat(3,1fr)"}
                                   onChange={handleS2b6b1}
                    >
                        <FormControlLabel value='1' control={<Radio/>} label='1. 농지은행을 통해서'/>
                        <FormControlLabel value='2' control={<Radio/>} label='2. 개인 간 매매를 통해서'/>
                        <FormControlLabel value='3' control={<Radio/>} label='3. 1,2번 둘다'/>
                    </QuestionBlock>

                    {
                        (s2b6b1 === '2' || s2b6b1 === '3') &&
                        <>
                            <strong><em>※ 2-6-1.문항에서 2,3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                            <QuestionBlock title={<div>2-7-1. 개인간 매매로 농지를 취득한 경우 자금을 어떤 방식으로 조달하셨습니까?</div>}
                                           gridColumnProperty={"repeat(3,1fr)"}
                                           onChange={handleS2b7b1}
                            >
                                <FormControlLabel value='1' control={<Radio/>} label='창업자금(3억) 등 정부융자지원'/>
                                <FormControlLabel value='2' control={<Radio/>} label='은행 등 금융기관 대출'/>
                                <FormControlLabel value='3' control={<Radio/>} label='부모님 등 직계가족'/>
                                <FormControlLabel value='4' control={<Radio/>} label='자기자금'/>
                                <Stack direction='row'>
                                    <FormControlLabel value='5' control={<Radio/>} label='기타'/>
                                    <TextField value={s2b7b1_Etc} onChange={(e) => setS2b7b1_Etc(e.target.value)}/>
                                </Stack>
                            </QuestionBlock>

                            <strong><em>※ 2-6-1.문항에서 2,3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                            <QuestionBlock title={<div>2-7-2. 농지은행이 아닌 개인간 매매로 농지를 취득하신 주요 요인은 무엇입니까?</div>}
                                           gridColumnProperty={"repeat(2,1fr)"}
                                // onChange={handleS2b7b2}
                            >
                                <CenterBox padding={20}>1순위 : <strong>{s2b7b2_1}</strong></CenterBox>
                                <CenterBox padding={20}>2순위 : <strong>{s2b7b2_2}</strong></CenterBox>
                                <CenterBox padding={20}>3순위 : <strong>{s2b7b2_3}</strong></CenterBox>
                                <div/>

                                <FormControlLabel
                                    control={<Checkbox name='1' checked={s2b7b2Data[1]} onChange={handleS2b7b2}/>}
                                    label='1. 담보 확보'/>
                                <FormControlLabel
                                    control={<Checkbox name='2' checked={s2b7b2Data[2]} onChange={handleS2b7b2}/>}
                                    label='2. 자부담 여력 없음'/>
                                <FormControlLabel
                                    control={<Checkbox name='3' checked={s2b7b2Data[3]} onChange={handleS2b7b2}/>}
                                    label='3. 금리가 비싸다'/>
                                <FormControlLabel
                                    control={<Checkbox name='4' checked={s2b7b2Data[4]} onChange={handleS2b7b2}/>}
                                    label='4. 상환기값이 짧다'/>
                                <FormControlLabel
                                    control={<Checkbox name='5' checked={s2b7b2Data[5]} onChange={handleS2b7b2}/>}
                                    label='5. 융자액이 적다'/>
                                <FormControlLabel
                                    control={<Checkbox name='6' checked={s2b7b2Data[6]} onChange={handleS2b7b2}/>}
                                    label='6, 복잡한 서류 절차'/>
                                <FormControlLabel
                                    control={<Checkbox name='7' checked={s2b7b2Data[7]} onChange={handleS2b7b2}/>}
                                    label='7. 정책자금의 중복 지원 불가'/>
                                <FormControlLabel
                                    control={<Checkbox name='8' checked={s2b7b2Data[8]} onChange={handleS2b7b2}/>}
                                    label='8. 자기자본 풍부'/>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='9' checked={s2b3b2Data[9]} onChange={handleS2b7b2}/>}
                                        label='9. 기타'/>
                                    <TextField value={s2b7b2_Etc9} onChange={(e) => setS2b7b2_Etc9(e.target.value)}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='10' checked={s2b3b2Data[10]} onChange={handleS2b7b2}/>}
                                        label='10. 기타'/>
                                    <TextField value={s2b7b2_Etc10} onChange={(e) => setS2b7b2_Etc10(e.target.value)}/>
                                </Stack>
                                <Stack direction='row'>
                                    <FormControlLabel
                                        control={<Checkbox name='11' checked={s2b3b2Data[11]} onChange={handleS2b7b2}/>}
                                        label='11. 기타'/>
                                    <TextField value={s2b7b2_Etc11} onChange={(e) => setS2b7b2_Etc11(e.target.value)}/>
                                </Stack>
                            </QuestionBlock>
                        </>
                    }
                </>
            }

            <QuestionBlock title={<div>2-8. 귀하께서는 개인 간 매매 시 농지가격은 농지은행의 실거래가와 비교해 어떠했습니까?</div>}
                           gridColumnProperty={"repeat(3,1fr)"}
                           onChange={handleS2b8}
            >
                <FormControlLabel value='1' control={<Radio/>} label='더 낮다'/>
                <FormControlLabel value='2' control={<Radio/>} label='비슷하다'/>
                <FormControlLabel value='3' control={<Radio/>} label='더 높다'/>
            </QuestionBlock>

            {
                s2b8 === '1' &&
                <>
                    <strong><em>※ 2-8.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-8-1. 귀하께서는 개인 간 매매 시 농지가격은 농지은행의 실거래가와 비교해 얼마나 더 낮았습니까?</div>}
                                   gridColumnProperty={"repeat(2,1fr)"}
                                   onChange={handleS2b8b1}
                    >
                        <FormControlLabel value='1' control={<Radio/>} label='10% 이내'/>
                        <FormControlLabel value='2' control={<Radio/>} label='10 ~ 19%'/>
                        <FormControlLabel value='3' control={<Radio/>} label='20 ~ 29%'/>
                        <FormControlLabel value='4' control={<Radio/>} label='30 ~ 49%'/>
                        <FormControlLabel value='5' control={<Radio/>} label='50% 이상'/>
                        <Stack direction='row'>
                            <FormControlLabel value='6' control={<Radio/>} label='기타'/>
                            <TextField value={s2b8b1_Etc} onChange={(e) => setS2b8b1_Etc(e.target.value)}/>
                        </Stack>
                    </QuestionBlock>
                </>
            }

            {
                s2b8 === '3' &&
                <>
                    <strong><em>※ 2-8.문항에서 3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-8-2. 귀하께서는 개인 간 매매 시 농지가격은 농지은행의 실거래가와 비교해 얼마나 더 높았습니까?</div>}
                                   gridColumnProperty={"repeat(2,1fr)"}
                                   onChange={handleS2b8b2}
                    >
                        <FormControlLabel value='1' control={<Radio/>} label='10% 이내'/>
                        <FormControlLabel value='2' control={<Radio/>} label='10 ~ 19%'/>
                        <FormControlLabel value='3' control={<Radio/>} label='20 ~ 29%'/>
                        <FormControlLabel value='4' control={<Radio/>} label='30 ~ 49%'/>
                        <FormControlLabel value='5' control={<Radio/>} label='50% 이상'/>
                        <Stack direction='row'>
                            <FormControlLabel value='6' control={<Radio/>} label='기타'/>
                            <TextField value={s2b8b2_Etc} onChange={(e) => setS2b8b2_Etc(e.target.value)}/>
                        </Stack>
                    </QuestionBlock>
                </>
            }

            <SectorFooter sector={2} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

const ColorCenterBlock = styled.div`
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.innerHighlightColor};

`

export default Sector2;