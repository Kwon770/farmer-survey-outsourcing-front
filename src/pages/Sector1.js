import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Background from "../components/Background";
import SmallQuestionBlock from "../components/SmallQuestionBlock";
import {FormControl, FormControlLabel, Radio, RadioGroup, useRadioGroup} from "@mui/material";

const Sector1 = () => {
    const [q1b1, setQ1b1] = useState(undefined);

    useEffect(() => {
        console.log(q1b1)
    }, [q1b1])

    const handleQ1b1 = (e) => {
        setQ1b1(e.target.value);
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
            <SmallQuestionBlock title={<div>10) 영농 승계 여부<br/><strong>(부모·친지·지인으로 부터)</strong></div>}
                                gridColumnProperty={"repeat(2,1fr)"}
                                announcement={<div><em>※ 영농지는 가장 큰 규모의 농지를 기준으로 응답해주세요.</em></div>}
                                onChange={handleQ1b1}
            >
                <FormControlLabel value='1' control={<Radio/>} label='예'/>
                <FormControlLabel value='2' control={<Radio/>} label='아니요'/>
            </SmallQuestionBlock>
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
