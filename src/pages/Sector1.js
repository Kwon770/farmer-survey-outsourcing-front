import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Background from "../components/Background";
import SmallQuestionBlock from "../components/SmallQuestionBlock";
import {
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    Radio,
    Select, Slider, Stack, TextField,
} from "@mui/material";
import CenterBox from "../components/CenterBox";
import SectorFooter from "../components/SectorFooter";

const Sector1 = () => {
    const [q1b1, setQ1b1] = useState('');
    const [q1b2, setQ1b2] = useState('');
    const [q1b3, setQ1b3] = useState('');
    const [q1b4, setQ1b4] = useState('');
    const [q1b5, setQ1b5] = useState('');
    const [q1b6, setQ1b6] = useState('');
    const [q1b6Data, setQ1b6Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false  // 6
    ]);
    const [q1b7, setQ1b7] = useState('');
    const [q1b7Data, setQ1b7Data] = useState([
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
    const [q1b8, setQ1b8] = useState('');
    const [q1b9, setQ1b9] = useState('');
    const [q1b10, setQ1b10] = useState('');
    const [q1b11, setQ1b11] = useState('');

    useEffect(() => {
        console.log(q1b10)
    }, [q1b10])

    const handleQ1b1 = (e) => {
        setQ1b1(e.target.value);
    }
    const handleQ1b2 = (e) => {
        setQ1b2(e.target.value);
    }
    const handleQ1b3 = (e) => {
        setQ1b3(e.target.value);
    }
    const handleQ1b4 = (e) => {
        setQ1b4(e.target.value);
    }
    const handleQ1b5 = (e) => {
        setQ1b5(e.target.value);
    }
    const handleQ1b6 = (e) => {
        setQ1b6Data(q1b6Data.map((b, idx) => {
            if (idx === parseInt(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))
        setQ1b6(q1b6Data.map((b, idx) => { if (b) return idx}).filter(a => a).toString());
    }
    const handleQ1b7 = (e) => {
        // 최대 3개 선택 유효성 확인
        let checking = false;
        let checkedCount = 0;
        let checkable = false;
        q1b7Data.map((b, idx) => {
            if (b) checkedCount++
            if (!b && idx === parseInt(e.target.name)) checking = true;
        })
        if (checkedCount < 3) checkable = true;
        // 최대 3개시 중단
        if (checking && !checkable) {
            return
        }
        //

        setQ1b7Data(q1b7Data.map((b, idx) => {
            if (idx === parseInt(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))
        setQ1b7(q1b7Data.map((b, idx) => { if (b) return idx}).filter(a => a).toString());
    }
    const handleQ1b8 = (e) => {
        setQ1b8(e.target.value);
    }
    const handleQ1b9 = (e) => {
        setQ1b9(e.target.value);
    }
    const handleQ1b10 = (e) => {
        setQ1b10(e.target.value);
    }
    const handleQ1b11 = (e) => {
        setQ1b11(e.target.value);
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
                신상은 통계법 제33조에 의해 비밀이 보장</em></strong>됨을 알려드립니다. 귀한 시간을 내어 응답해 주신 분께는 추첨을 통해 소정의 모바일 상품권을 보내드리고자 하오니 설문지
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
            <SmallQuestionBlock title={<div>1) 성별</div>}
                                gridColumnProperty={"repeat(2,1fr)"}
                                onChange={handleQ1b1}
            >
                <FormControlLabel value='1' control={<Radio/>} label='남'/>
                <FormControlLabel value='2' control={<Radio/>} label='여'/>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>2) 출생연도</div>}
                                gridColumnProperty={"repeat(2,2fr)"}
                                onChange={handleQ1b2}
            >
                <Select value={q1b2} onChange={handleQ1b2}>
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
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>3) 거주지 주소</div>}
                                gridColumnProperty={"repeat(2,1fr)"}
                                onChange={handleQ1b3}
            >
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>4) 영농지 위치</div>}
                                gridColumnProperty={"repeat(3,1fr)"}
                                onChange={handleQ1b4}
                                announcement={<em>※ 영농지는 가장 큰 규모의 농지를 기준으로 응답해주세요.</em>}
            >
                <FormControlLabel value='1' control={<Radio/>} label='거주지 인근(도보 10분이내)'/>
                <FormControlLabel value='2' control={<Radio/>} label='차로 10분 이내'/>
                <FormControlLabel value='3' control={<Radio/>} label='차로 20분 이내'/>
                <FormControlLabel value='4' control={<Radio/>} label='차로 30분 이내'/>
                <FormControlLabel value='5' control={<Radio/>} label='차로 40분 이내'/>
                <FormControlLabel value='6' control={<Radio/>} label='차로 50분 이내'/>
                <FormControlLabel value='7' control={<Radio/>} label='차로 1시간 이상'/>
                <FormControlLabel value='8' control={<Radio/>} label='차로 1시간 이내'/>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>5) 영농 시작연도</div>}
                                gridColumnProperty={"repeat(1,1fr)"}
                                onChange={handleQ1b5}
            >
                <FormControlLabel value='1' control={<Radio/>} label='년에 농사 시작'/>
                <FormControlLabel value='2' control={<Radio/>} label='아직 농사지은 경험이 없음'/>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>6) 영농형태<br/><strong>(중복답변 가능)</strong></div>}
                                gridColumnProperty={"repeat(3,1fr)"}
                                onChange={handleQ1b6}
            >
                <FormControlLabel control={<Checkbox name='1' checked={q1b6Data[1]} onChange={handleQ1b6}/>} label='논 (벼)'/>
                <FormControlLabel control={<Checkbox name='2' checked={q1b6Data[2]} onChange={handleQ1b6}/>} label='논 (타작물)'/>
                <FormControlLabel control={<Checkbox name='3' checked={q1b6Data[3]} onChange={handleQ1b6}/>} label='시설원예'/>
                <FormControlLabel control={<Checkbox name='4' checked={q1b6Data[4]} onChange={handleQ1b6}/>} label='밭 (노지)'/>
                <FormControlLabel control={<Checkbox name='5' checked={q1b6Data[5]} onChange={handleQ1b6}/>} label='괴수'/>
                <FormControlLabel control={<Checkbox name='6' checked={q1b6Data[6]} onChange={handleQ1b6}/>} label='축산'/>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>7) 주요 생산 품목 <strong>(최대 3개 선택 가능)</strong></div>}
                                gridColumnProperty={"repeat(5,1fr)"}
                                onChange={handleQ1b7}
            >
                <FormControlLabel control={<Checkbox name='1' checked={q1b7Data[1]} onChange={handleQ1b7}/>} label='미곡'/>
                <FormControlLabel control={<Checkbox name='2' checked={q1b7Data[2]} onChange={handleQ1b7}/>} label='맥류'/>
                <FormControlLabel control={<Checkbox name='3' checked={q1b7Data[3]} onChange={handleQ1b7}/>} label='잡곡'/>
                <FormControlLabel control={<Checkbox name='4' checked={q1b7Data[4]} onChange={handleQ1b7}/>} label='두류'/>
                <FormControlLabel control={<Checkbox name='5' checked={q1b7Data[5]} onChange={handleQ1b7}/>} label='서류'/>
                <FormControlLabel control={<Checkbox name='6' checked={q1b7Data[6]} onChange={handleQ1b7}/>} label='채소'/>
                <FormControlLabel control={<Checkbox name='7' checked={q1b7Data[7]} onChange={handleQ1b7}/>} label='과수'/>
                <FormControlLabel control={<Checkbox name='8' checked={q1b7Data[8]} onChange={handleQ1b7}/>} label='화훼'/>
                <FormControlLabel control={<Checkbox name='9' checked={q1b7Data[9]} onChange={handleQ1b7}/>} label='특용작물'/>
                <FormControlLabel control={<Checkbox name='10' checked={q1b7Data[10]} onChange={handleQ1b7}/>} label='축산'/>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>8) 농가소득 수준 <strong>(연소득 기준)</strong></div>}
                                gridColumnProperty={"repeat(4,1fr)"}
                                onChange={handleQ1b8}
            >
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
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>9) 농가형태</div>}
                                gridColumnProperty={"repeat(1,1fr)"}
                                onChange={handleQ1b9}
            >
                <FormControlLabel value='1' control={<Radio/>} label='전업농가 (영리목적으로 30일 이상 농사 이외의 일에 종사한 가구원 없음)'/>
                <FormControlLabel value='2' control={<Radio/>} label='1종겸업농가 (농업수입이 농외소득보다 많음)'/>
                <FormControlLabel value='3' control={<Radio/>} label='2종겸업농가 (농업수입이 농외소득보다 적음)'/>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>10) 영농 승계 여부<br/><strong>(부모·친지·지인으로 부터)</strong></div>}
                                gridColumnProperty={"repeat(2,1fr)"}
                                onChange={handleQ1b10}
            >
                <FormControlLabel value='1' control={<Radio/>} label='예'/>
                <FormControlLabel value='2' control={<Radio/>} label='아니요'/>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>11) 연락처(휴대폰)</div>}
                                gridColumnProperty={"repeat(5,1fr)"}
                                onChange={handleQ1b1}
            >
                <TextField type='number' maxlength='2' />
                <CenterBox size={20}>-</CenterBox>
                <TextField type='number' maxlength='2' />
                <CenterBox size={20}>-</CenterBox>
                <TextField type='number' maxlength='2' />
            </SmallQuestionBlock>

            <SectorFooter />
        </Background>
    )
}

const TextBlock = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.blockPadding};
  text-align: ${(props) => props.start ? "start" : "center"};
  font-size: 18px;
  line-height: 25px;

  background-color: white;
  border-radius: ${(props) => props.theme.blockBorder};
  border: 1px solid ${(props) => props.theme.borderShadowColor};

  margin-bottom: ${(props) => props.theme.blockMargin};

  display: inline-block;
  line-break: normal;
`

const TitleBlock = styled.div`
  width: 100%;
  padding: 13px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: white;

  background-color: ${(props) => props.theme.highlightColor};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderShadowColor};

  margin-top: 60px;
  margin-bottom: 40px;
`

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
