import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {Checkbox, FormControlLabel, Radio, Stack} from "@mui/material";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import TextBlock from "../components/TextBlock";
import SectorFooter from "../components/SectorFooter";
import QuestionBlock from "../components/QuestionBlock";
import ColorCenterBlock from "../components/ColorCenterBlock";

const Sector2 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    const [s2b1, setS2b1] = useState('');

    const [s2b2, setS2b2] = useState('');
    const [s2b2b1, setS2b2b1] = useState('');

    const [s2b2b2_1, setS2b2b2_1] = useState('');
    const [s2b2b2_1Data, setS2b2b2_1Data] = useState([
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
        false // 10
    ]);
    const [s2b2b2_2, setS2b2b2_2] = useState('');
    const [s2b2b2_2Data, setS2b2b2_2Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false // 4
    ]);
    const [s2b2b2_3, setS2b2b2_3] = useState('');

    const [s2b2b3, setS2b2b3] = useState('');
    const [s2b2b4, setS2b2b4] = useState('');
    const [s2b2b5, setS2b2b5] = useState('');
    const [s2b2b6, setS2b2b6] = useState('');

    const [s2b3_1, setS2b3_1] = useState('');
    const [s2b3_2, setS2b3_2] = useState('');
    const [s2b3_Etc9, setS2b3_Etc9] = useState('');
    const [s2b3_Etc10, setS2b3_Etc10] = useState('');
    const [s2b3Data, setS2b3Data] = useState([
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
        false, // 10
    ]);

    const [s2b4_1, setS2b4_1] = useState('');
    const [s2b4_2, setS2b4_2] = useState('');
    const [s2b4_3, setS2b4_3] = useState('');
    const [s2b4_Etc12, setS2b4_Etc12] = useState('');
    const [s2b4_Etc13, setS2b4_Etc13] = useState('');
    const [s2b4_Etc14, setS2b4_Etc14] = useState('');
    const [s2b4Data, setS2b4Data] = useState([
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
        false,
        false, // 12
        false,
        false // 14
    ]);

    const [s2b5, setS2b5] = useState('');


    const handleS2b1 = (e) => {
        setS2b1(e.target.value);
    }

    const handleS2b2 = (e) => {
        setS2b2(e.target.value);
    }
    const handleS2b2b1 = (e) => {
        setS2b2b1(e.target.value);
    }

    useEffect(() => {
        setS2b2b2_1(s2b2b2_1Data.map((element, i) => {
            if (element) return i;
        }).filter((e) => e).toString());
    }, [s2b2b2_1Data])
    const handleS2b2b2_1 = (e) => {
        setS2b2b2_1Data(s2b2b2_1Data.map((element, i) => {
            if (i === parseInt(e.target.name)) return !element;
            else return element;
        }))
    }
    useEffect(() => {
        setS2b2b2_2(s2b2b2_2Data.map((element, i) => {
            if (element) return i;
        }).filter((e) => e).toString());
    }, [s2b2b2_2Data])
    const handleS2b2b2_2 = (e) => {
        setS2b2b2_2Data(s2b2b2_2Data.map((element, i) => {
            if (i === parseInt(e.target.name)) return !element;
            else return element;
        }))
    }
    const handleS2b2b2_3 = (e) => {
        setS2b2b2_3(e.target.value);
    }


    const validateAllWritten = () => {
        // return false;
        return true;
    }

    const saveSector2Data = () => {
        const sector2DataObject = {}

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
                2. 농업 스타트업단지 조성사업 참여 의향
            </TitleBlock>

            <TextBlock>
                <strong><em>농업 스타트업단지 조성사업</em></strong>
                <br/>
                <br/>

                농업 스타트업 단지는 청년농업인의 영농기반을 마련하여 농촌에 안정적 으로 정착하고 농지확보 어려움을 해결하고자 저활용 농지(유휴농지, 국·공유지 및 매입비축농지)를 활용해 특수작물 재배
                및 시설영농(스마 트팜 포함)이 가능하도록 생산기반시설을 구축(가공.판매시설 포함)하여 단지를 조성하여 임대 및 분양을 목적으로 설계되었습니다. 아래의 설문 문항을 통해 농업
                스타트업단지에 대한 귀하의 고견을 듣고자 합니다.
            </TextBlock>

            <QuestionBlock title={<div>2-1. 귀하께서는 확장, 이주, 신규 부지로서 농업 스타트업단지가 필요하다고 생각하십니까?</div>}
                           gridColumnProperty={"repeat(5,1fr)"}
                           onChange={handleS2b1}
            >
                <FormControlLabel value='1' control={<Radio/>} label='매우 필요함'/>
                <FormControlLabel value='2' control={<Radio/>} label='대체로 필요함'/>
                <FormControlLabel value='3' control={<Radio/>} label='모르겠음'/>
                <FormControlLabel value='4' control={<Radio/>} label='그다지 필요없음'/>
                <FormControlLabel value='5' control={<Radio/>} label='전혀 필요 없음'/>
            </QuestionBlock>

            <QuestionBlock title={<div>2-2. 귀하께서는 농업 스타트업단지에 입주하실 의향이 있으십니까?</div>}
                           gridColumnProperty={"repeat(5,1fr)"}
                           onChange={handleS2b2}
            >
                <FormControlLabel value='1' control={<Radio/>} label='적극적으로 입주할 것임'/>
                <FormControlLabel value='2' control={<Radio/>} label='입주를 고려할 것 같음'/>
                <FormControlLabel value='3' control={<Radio/>} label='모르겠음'/>
                <FormControlLabel value='4' control={<Radio/>} label='입주를 고려할 것 같지 않음'/>
                <FormControlLabel value='5' control={<Radio/>} label='전혀 없음'/>
            </QuestionBlock>

            {
                (s2b2 === '1' || s2b2 === '2') &&
                <>
                    <strong><em>※ 5-2.문항에서 1, 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-2-1. 귀하의 농업 스타트업단지 입주 혹은 이전을 희망하는 시기는 언제입니까?</div>}
                                   gridColumnProperty={"repeat(3,1fr)"}
                                   onChange={handleS2b2b1}
                    >
                        <FormControlLabel value='1' control={<Radio/>} label='단지 조성 후 즉시'/>
                        <FormControlLabel value='2' control={<Radio/>} label='1년 이내'/>
                        <FormControlLabel value='3' control={<Radio/>} label='3년 이내'/>
                        <FormControlLabel value='4' control={<Radio/>} label='5년 이내'/>
                        <FormControlLabel value='5' control={<Radio/>} label='시기 상관없음'/>
                    </QuestionBlock>
                </>
            }

            <strong><em>※ 아래 3개 질문(재배희망작물, 영농형태, 스마트팜 여부)에 모두 답변해주세요.</em></strong>
            <QuestionBlock title={<div>2-2-2. 귀하께서는 농업 스타트업단지에 입주하신다면, 재배를 희망하는 작물 부문과 영농형태는 무엇입니까?</div>}
                           gridColumnProperty={"repeat(1,1fr)"}
            >
                <QuestionBlock title={<ColorCenterBlock>재배희망작물</ColorCenterBlock>}
                               gridColumnProperty={"repeat(10,1fr)"}
                >
                    <FormControlLabel
                        control={<Checkbox name='1' checked={s2b2b2_1Data[1]} onChange={handleS2b2b2_1}/>}
                        label='미곡'/>
                    <FormControlLabel
                        control={<Checkbox name='2' checked={s2b2b2_1Data[2]} onChange={handleS2b2b2_1}/>}
                        label='맥류'/>
                    <FormControlLabel
                        control={<Checkbox name='3' checked={s2b2b2_1Data[3]} onChange={handleS2b2b2_1}/>}
                        label='잡곡'/>
                    <FormControlLabel
                        control={<Checkbox name='4' checked={s2b2b2_1Data[4]} onChange={handleS2b2b2_1}/>}
                        label='두류'/>
                    <FormControlLabel
                        control={<Checkbox name='5' checked={s2b2b2_1Data[5]} onChange={handleS2b2b2_1}/>}
                        label='서류'/>
                    <FormControlLabel
                        control={<Checkbox name='6' checked={s2b2b2_1Data[6]} onChange={handleS2b2b2_1}/>}
                        label='채소'/>
                    <FormControlLabel
                        control={<Checkbox name='7' checked={s2b2b2_1Data[7]} onChange={handleS2b2b2_1}/>}
                        label='과수'/>
                    <FormControlLabel
                        control={<Checkbox name='8' checked={s2b2b2_1Data[8]} onChange={handleS2b2b2_1}/>}
                        label='화훼'/>
                    <FormControlLabel
                        control={<Checkbox name='9' checked={s2b2b2_1Data[9]} onChange={handleS2b2b2_1}/>}
                        label='특용작물'/>
                    <FormControlLabel
                        control={<Checkbox name='10' checked={s2b2b2_1Data[10]} onChange={handleS2b2b2_1}/>}
                        label='축산'/>

                </QuestionBlock>
            </QuestionBlock>

            <SectorFooter sector={2} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

export default Sector2;