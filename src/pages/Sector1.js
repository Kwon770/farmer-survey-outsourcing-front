import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background";
import {
    Checkbox,
    FormControlLabel,
    MenuItem,
    Radio,
    Select, Stack, TextField, FormControl, RadioGroup
} from "@mui/material";
import SmallQuestionBlock from "../components/SmallQuestionBlock";
import CenterBox from "../components/CenterBox";
import TextBlock from "../components/TextBlock";
import TitleBlock from "../components/TitleBlock";
import SectorFooter from "../components/SectorFooter";
import {getAllDosis, getSigungus, getUpmeongdong} from "../api/KoreanLocation";
import Grid from "../components/Grid";

const Sector1 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);
    const [s1b1, setS1b1] = useState('');
    const [s1b2, setS1b2] = useState('');

    const [s1b3_1, setS1b3_1] = useState('');
    const [s1b3_2, setS1b3_2] = useState('');
    const [s1b3_3, setS1b3_3] = useState('');
    const [dosis, setDosis] = useState([]);
    const [sigungus, setSigungus] = useState([]);
    const [upmeongdongs, setUpmeongdongs] = useState([]);

    const [s1b4, setS1b4] = useState('');

    const [s1b5, setS1b5] = useState('');
    const [s1b5_Etc1, setS1b5_Etc1] = useState('');

    const [s1b6, setS1b6] = useState('');
    const [s1b6Data, setS1b6Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false  // 6
    ]);

    const [s1b7, setS1b7] = useState('');
    const [s1b7Data, setS1b7Data] = useState([
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
        false, // 10
    ]);

    const [s1b8, setS1b8] = useState('');
    const [s1b9, setS1b9] = useState('');
    const [s1b10, setS1b10] = useState('');

    const [s1b11_1, setS1b11_1] = useState('');
    const [s1b11_2, setS1b11_2] = useState('');
    const [s1b11_3, setS1b11_3] = useState('');


    const handleS1b1 = (e) => {
        setS1b1(e.target.value);
    }
    const handleS1b2 = (e) => {
        setS1b2(e.target.value);
    }

    const getDosis = async () => {
        setDosis(await getAllDosis());
    }
    useEffect(() => {
        getDosis();
    }, []);
    const handleS1b3_1 = async (e) => {
        setS1b3_1(e.target.value);
        const dosiCode = dosis[e.target.value].code;
        setSigungus(await getSigungus(dosiCode));
    }
    const handleS1b3_2 = async (e) => {
        setS1b3_2(e.target.value);
        const sigunguCode = sigungus[e.target.value].code;
        setUpmeongdongs(await getUpmeongdong(sigunguCode));
    }
    const handleS1b3_3 = async (e) => {
        setS1b3_3(e.target.value);
    }


    const handleS1b4 = (e) => {
        setS1b4(e.target.value);
    }
    const handleS1b5 = (e) => {
        setS1b5(e.target.value);
    }

    useEffect(() => {
        setS1b6(s1b6Data.map((b, idx) => {
            if (b) return idx
        }).filter(a => a).toString());
    }, [s1b6Data]);
    const handleS1b6 = (e) => {
        setS1b6Data(s1b6Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))
    }

    useEffect(() => {
        setS1b7(s1b7Data.map((b, idx) => {
            if (b) return idx
        }).filter(a => a).toString());
    }, [s1b7Data]);
    const handleS1b7 = (e) => {
        // 최대 3개 선택 유효성 확인
        let checking = false;
        let checkedCount = 0;
        let checkable = false;
        s1b7Data.forEach((b, idx) => {
            if (b) checkedCount++
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        if (checkedCount < 3) checkable = true;
        // 최대 3개시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS1b7Data(s1b7Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))
    }

    const handleS1b8 = (e) => {
        setS1b8(e.target.value);
    }
    const handleS1b9 = (e) => {
        setS1b9(e.target.value);
    }
    const handleS1b10 = (e) => {
        setS1b10(e.target.value);
    }

    const handleS1b11_1 = (e) => {
        setS1b11_1(e.target.value);
    }
    const handleS1b11_2 = (e) => {
        setS1b11_2(e.target.value);
    }
    const handleS1b11_3 = (e) => {
        setS1b11_3(e.target.value);
    }

    const validateAllWritten = () => {
        if (
            s1b1 === '' ||
            s1b2 === '' ||
            s1b3_1 === '' || s1b3_2 === '' || s1b3_3 === '' ||
            s1b4 === '' ||
            s1b5 === '' ||
            s1b6 === '' ||
            s1b7 === '' ||
            s1b8 === '' ||
            s1b9 === '' ||
            s1b10 === '' ||
            s1b11_1 === '' ||
            s1b11_2 === '' ||
            s1b11_3 === ''
        ) {
            return false
        }

        if (s1b5 === '1')
            if (s1b5_Etc1 === '')
                return false;

        return true
    }

    const saveSector1Data = () => {
        const sector1DataObject = {
            's1b1': s1b1,
            's1b2': s1b2,
            's1b3': dosis[s1b3_1].name + ' ' + sigungus[s1b3_2].name + ' ' + upmeongdongs[s1b3_3], name,
            's1b4': s1b4,
            's1b5': s1b5 === '1' ? '1,' + s1b5_Etc1 : s1b5,
            's1b6': s1b6,
            's1b7': s1b7,
            's1b8': s1b8,
            's1b9': s1b9,
            's1b10': s1b10,
            's1b11': s1b11_1 + s1b11_2 + s1b11_3,
        }

        console.log(sector1DataObject);

        localStorage.setItem('sector1', JSON.stringify(sector1DataObject))

    }

    const moveNextSector = () => {
        if (!validateAllWritten()) {
            setAlertOpen(true)
            return
        }

        saveSector1Data()
        navigate('/2')
    }

    return (
        <Background>
            <TextBlock>
                <BigText>
                    청년농업인 농지이용실태 및 <br/>
                    「농업스타트업단지조성사업」수요설문조사
                </BigText>
            </TextBlock>
            <TextBlock start>
                안녕하십니까? <br/>
                <br/>
                <strong><em>한국농어촌공사 농어촌연구원은 『농업 스타트업 단지 조성계획 수립』을 위하여 설문 조사를 진행하고 있습니다.</em></strong> 응답해 주신 정보는 연구의
                목적으로만
                사용될 것이며, <strong><em>본 조사의 설문 내용 및 개인
                신상은 통계법 제33조에 의해 비밀이 보장</em></strong>됨을 알려드립니다. 귀한 시간을 내어 응답해 주신 분께는 추첨을 통해 소정의 모바일 상품권을 보내드리고자 하오니
                설문지
                내에
                연락처를 기재해주시기를 바라며,
                조사에 대하여 문의 사항이 있으시면 아래로 연락하여 주십시오.<br/>
                <br/>
                <br/>
                ※ 연구수행기관 : <em>한국농어촌공사 농어촌연구원</em><br/>
                ※ 연 구 책 임 자 : <em>이향미 책임연구원(061-338-5467)</em><br/>
                <br/>
                <br/>
                <BoldText>
                    2022년 6월
                </BoldText>
                <br/>
                <BoldText big>
                    한국농어촌공사 농어촌연구원
                </BoldText>
            </TextBlock>


            <TitleBlock>
                1. 응답자 정보
            </TitleBlock>


            <strong><em>(2021년 12월 31일 기준으로 응답 부탁드립니다.)</em></strong>
            <SmallQuestionBlock title={<div>1. 성별</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b1}>
                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='남'/>
                            <FormControlLabel value='2' control={<Radio/>} label='여'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>


            <SmallQuestionBlock title={<div>2. 출생연도</div>}>
                <FormControl fullWidth>
                    <Grid gridColumnProperty={"repeat(3,1fr)"}>
                        <Select value={s1b2} onChange={handleS1b2}>
                            <MenuItem value={'1970'}>1970</MenuItem>
                            <MenuItem value={'1971'}>1971</MenuItem>
                            <MenuItem value={'1972'}>1972</MenuItem>
                            <MenuItem value={'1973'}>1973</MenuItem>
                            <MenuItem value={'1974'}>1974</MenuItem>
                            <MenuItem value={'1975'}>1975</MenuItem>
                            <MenuItem value={'1976'}>1976</MenuItem>
                            <MenuItem value={'1977'}>1977</MenuItem>
                            <MenuItem value={'1978'}>1978</MenuItem>
                            <MenuItem value={'1979'}>1979</MenuItem>
                            <MenuItem value={'1980'}>1980</MenuItem>
                            <MenuItem value={'1981'}>1981</MenuItem>
                            <MenuItem value={'1982'}>1982</MenuItem>
                            <MenuItem value={'1983'}>1983</MenuItem>
                            <MenuItem value={'1984'}>1984</MenuItem>
                            <MenuItem value={'1985'}>1985</MenuItem>
                            <MenuItem value={'1986'}>1986</MenuItem>
                            <MenuItem value={'1987'}>1987</MenuItem>
                            <MenuItem value={'1988'}>1988</MenuItem>
                            <MenuItem value={'1989'}>1989</MenuItem>
                            <MenuItem value={'1990'}>1990</MenuItem>
                            <MenuItem value={'1991'}>1991</MenuItem>
                            <MenuItem value={'1992'}>1992</MenuItem>
                            <MenuItem value={'1993'}>1993</MenuItem>
                            <MenuItem value={'1994'}>1994</MenuItem>
                            <MenuItem value={'1995'}>1995</MenuItem>
                            <MenuItem value={'1996'}>1996</MenuItem>
                            <MenuItem value={'1997'}>1997</MenuItem>
                            <MenuItem value={'1998'}>1998</MenuItem>
                            <MenuItem value={'1999'}>1999</MenuItem>
                            <MenuItem value={'2000'}>2000</MenuItem>
                            <MenuItem value={'2001'}>2001</MenuItem>
                            <MenuItem value={'2002'}>2002</MenuItem>
                            <MenuItem value={'2003'}>2003</MenuItem>
                            <MenuItem value={'2004'}>2004</MenuItem>
                            <MenuItem value={'2005'}>2005</MenuItem>
                        </Select>
                    </Grid>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>3. 거주지 주소</div>}>
                <Grid gridColumnProperty={"3fr 1fr 3fr 1fr 3fr"}>
                    <FormControl fullWidth>
                        <Select displayEmpty value={s1b3_1} onChange={handleS1b3_1}>
                            <MenuItem disabled value={''}>도·시</MenuItem>
                            {
                                dosis.map((dosi, idx) => <MenuItem key={dosi.code} value={idx}>{dosi.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <div/>
                    <FormControl fullWidth>
                        <Select displayEmpty value={s1b3_2} onChange={handleS1b3_2}>
                            <MenuItem disabled value={''}>시·군·구</MenuItem>
                            {
                                sigungus.map((sigungu, idx) => <MenuItem key={sigungu.code}
                                                                         value={idx}>{sigungu.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <div/>
                    <FormControl fullWidth>
                        <Select displayEmpty value={s1b3_3} onChange={handleS1b3_3}>
                            <MenuItem disabled value={''}>읍·면·동</MenuItem>
                            {
                                upmeongdongs.map((upmeongdong, idx) => <MenuItem key={upmeongdong.code}
                                                                                 value={idx}>{upmeongdong.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>4. 영농지 위치</div>}
                                announcement={<em>※ 영농지는 가장 큰 규모의 농지를 기준으로 응답해주세요.</em>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b4}>
                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='거주지 인근(도보 10분이내)'/>
                            <FormControlLabel value='2' control={<Radio/>} label='차로 10분 이내'/>
                            <FormControlLabel value='3' control={<Radio/>} label='차로 20분 이내'/>
                            <FormControlLabel value='4' control={<Radio/>} label='차로 30분 이내'/>
                            <FormControlLabel value='5' control={<Radio/>} label='차로 40분 이내'/>
                            <FormControlLabel value='6' control={<Radio/>} label='차로 50분 이내'/>
                            <FormControlLabel value='7' control={<Radio/>} label='차로 1시간 이상'/>
                            <FormControlLabel value='8' control={<Radio/>} label='차로 1시간 이내'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>5. 영농 시작연도</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b5}>
                        <Stack direction='row'>
                            <FormControlLabel value='1' control={<Radio/>}/>
                            <TextField type='number' value={s1b5_Etc1} onChange={(e) => setS1b5_Etc1(e.target.value)}
                                       style={{marginRight: 10}}/>
                            <CenterBox>년에 농사 시작</CenterBox>
                        </Stack>
                        <FormControlLabel value='2' control={<Radio/>} label='아직 농사지은 경험이 없음'/>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>6. 영농형태<br/><strong>(중복답변 가능)</strong></div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b6}>
                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                            <FormControlLabel control={<Checkbox name='1' checked={s1b6Data[1]} onChange={handleS1b6}/>}
                                              label='논 (벼)'/>
                            <FormControlLabel control={<Checkbox name='2' checked={s1b6Data[2]} onChange={handleS1b6}/>}
                                              label='논 (타작물)'/>
                            <FormControlLabel control={<Checkbox name='3' checked={s1b6Data[3]} onChange={handleS1b6}/>}
                                              label='시설원예'/>
                            <FormControlLabel control={<Checkbox name='4' checked={s1b6Data[4]} onChange={handleS1b6}/>}
                                              label='밭 (노지)'/>
                            <FormControlLabel control={<Checkbox name='5' checked={s1b6Data[5]} onChange={handleS1b6}/>}
                                              label='괴수'/>
                            <FormControlLabel control={<Checkbox name='6' checked={s1b6Data[6]} onChange={handleS1b6}/>}
                                              label='축산'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>7. 주요 생산 품목 <strong>(최대 3개 선택 가능)</strong></div>}>
                <FormControl fullWidth>
                    <Grid gridColumnProperty={"repeat(5,1fr)"}>
                        <FormControlLabel control={<Checkbox name='1' checked={s1b7Data[1]} onChange={handleS1b7}/>}
                                          label='미곡'/>
                        <FormControlLabel control={<Checkbox name='2' checked={s1b7Data[2]} onChange={handleS1b7}/>}
                                          label='맥류'/>
                        <FormControlLabel control={<Checkbox name='3' checked={s1b7Data[3]} onChange={handleS1b7}/>}
                                          label='잡곡'/>
                        <FormControlLabel control={<Checkbox name='4' checked={s1b7Data[4]} onChange={handleS1b7}/>}
                                          label='두류'/>
                        <FormControlLabel control={<Checkbox name='5' checked={s1b7Data[5]} onChange={handleS1b7}/>}
                                          label='서류'/>
                        <FormControlLabel control={<Checkbox name='6' checked={s1b7Data[6]} onChange={handleS1b7}/>}
                                          label='채소'/>
                        <FormControlLabel control={<Checkbox name='7' checked={s1b7Data[7]} onChange={handleS1b7}/>}
                                          label='과수'/>
                        <FormControlLabel control={<Checkbox name='8' checked={s1b7Data[8]} onChange={handleS1b7}/>}
                                          label='화훼'/>
                        <FormControlLabel control={<Checkbox name='9' checked={s1b7Data[9]} onChange={handleS1b7}/>}
                                          label='특용작물'/>
                        <FormControlLabel
                            control={<Checkbox name='10' checked={s1b7Data[10]} onChange={handleS1b7}/>}
                            label='축산'/>
                    </Grid>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>8. 농가소득 수준 <br/><strong>(연소득 기준)</strong></div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b8}>
                        <Grid gridColumnProperty={"repeat(4,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='1천만원 미안'/>
                            <FormControlLabel value='2' control={<Radio/>} label='1-2천만원'/>
                            <FormControlLabel value='3' control={<Radio/>} label='2-3천만원'/>
                            <FormControlLabel value='4' control={<Radio/>} label='3-4천만원'/>
                            <FormControlLabel value='5' control={<Radio/>} label='4-5천만원'/>
                            <FormControlLabel value='6' control={<Radio/>} label='5-6천만원'/>
                            <FormControlLabel value='7' control={<Radio/>} label='6-7천만원'/>
                            <FormControlLabel value='8' control={<Radio/>} label='7-8천만원'/>
                            <FormControlLabel value='9' control={<Radio/>} label='8-9천만원'/>
                            <FormControlLabel value='10' control={<Radio/>} label='9천만원-1억원'/>
                            <FormControlLabel value='11' control={<Radio/>} label='1억원 이상'/>
                            <FormControlLabel value='12' control={<Radio/>} label='미취업 또는 소득없음'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>9. 농가형태</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b9}>
                        <FormControlLabel value='1' control={<Radio/>} label='전업농가 (영리목적으로 30일 이상 농사 이외의 일에 종사한 가구원 없음)'/>
                        <FormControlLabel value='2' control={<Radio/>} label='1종겸업농가 (농업수입이 농외소득보다 많음)'/>
                        <FormControlLabel value='3' control={<Radio/>} label='2종겸업농가 (농업수입이 농외소득보다 적음)'/>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>10. 영농 승계 여부<br/><strong>(부모·친지·지인으로 부터)</strong></div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b10}>
                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='예'/>
                            <FormControlLabel value='2' control={<Radio/>} label='아니요'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>11. 연락처(휴대폰)</div>}>
                <FormControl fullWidth>
                    <Grid gridColumnProperty={"repeat(5,1fr)"}>
                        <TextField type='number' value={s1b11_1} onChange={handleS1b11_1}/>
                        <CenterBox size={20}>-</CenterBox>
                        <TextField type='number' value={s1b11_2} onChange={handleS1b11_2}/>
                        <CenterBox size={20}>-</CenterBox>
                        <TextField type='number' value={s1b11_3} onChange={handleS1b11_3}/>
                    </Grid>
                </FormControl>
            </SmallQuestionBlock>

            <SectorFooter sector={1} moveNextSector={moveNextSector} alertOpen={alertOpen}
                          setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

const BigText = styled.div`
  font-size: 25px;
  line-height: 28px;
`

const BoldText = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.big ? 25 : 20}px;
  font-weight: bold;
`

export default Sector1;
