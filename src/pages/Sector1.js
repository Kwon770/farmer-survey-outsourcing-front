import React from "react";
import styled from "styled-components";

const Sector1 = () => {
    return <Background>
        <TextBlock>
            <TitleText>
                청년농업인 농지이용실태 및 <br/>
                「농업스타트업단지조성사업」수요설문조사
            </TitleText>
        </TextBlock>
        <TextBlock start>
            안녕하십니까? <br/>
            <br/>
            <strong><em>한국농어촌공사 농어촌연구원은 『농업 스타트업 단지 조성계획 수립』을 위하여 설문 조사를 진행하고 있습니다.</em></strong> 응답해 주신 정보는 연구의 목적으로만 사용될 것이며, <strong><em>본 조사의 설문 내용 및 개인
            신상은 통계법 제33조에 의해 비밀이 보장</em></strong>됨을 알려드립니다. 귀한 시간을 내어 응답해 주신 분께는 추첨을 통해 소정의 모바일 상품권을 보내드리고자 하오니 설문지 내에 연락처를 기재해주시기를 바라며,
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
    </Background>
}

const Background = styled.div`
  width: 750px;
  padding-top: 60px;
`;

const TextBlock = styled.div`
  width: 100%;
  padding: 30px;
  text-align: ${(props) => props.start ? "start" : "center"};
  font-size: 18px;
  line-height: 25px;

  background-color: white;
  border-radius: 8px;
  border: 1px solid #D5D7DB;

  margin-bottom: 20px;

  display: inline-block;
  line-break: normal;
`

const TitleText = styled.div`
  font-size: 25px;
  line-height: 28px;
`

const BoldText = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.big ? 25: 20}px;
  font-weight: bold;
`

export default Sector1;
