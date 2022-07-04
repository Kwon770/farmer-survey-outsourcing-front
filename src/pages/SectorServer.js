import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import TextBlock from "../components/TextBlock";
import axios from 'axios';
import {Button} from "@mui/material";

const SectorServer = () => {
    const navigate = useNavigate();

    const [admin, setAdmin] = useState(false);
    const [surveyCount, setSurveyCount] = useState('');
    const [surveyList, setSurveyList] = useState([]);

    useEffect(() => {
        const passwd = prompt("어드민 비밀번호를 입력하세요");
        if (passwd === process.env.REACT_APP_ADMIN_SECRET) {
            setAdmin(true);
        }

        getSurveyCount();
    }, [])

    async function getSurveyCount() {
        const response = await axios.get(process.env.REACT_APP_SERVER_API_URL + "/count?secret=" + process.env.REACT_APP_SERVER_SECRET);
        setSurveyCount(response?.data);
    }

    async function getSurveyList() {
        const response = await axios.get(process.env.REACT_APP_SERVER_API_URL + "/list?secret=" + process.env.REACT_APP_SERVER_SECRET);
        setSurveyList(response?.data);
    }

    return (
        <Background>
            <TitleBlock>데이터 체크, 서버</TitleBlock>

            {
                admin &&
                <>
                    <TextBlock start>
                        {surveyCount}
                    </TextBlock>

                    <Button variant='contained' onClick={getSurveyList} >데이터들 전부 불러오기</Button>
                    {
                        surveyList.map((s) => (
                            <TextBlock start>
                                <pre>{JSON.stringify(s, null, 2)}</pre>
                            </TextBlock>
                        ))
                    }
                </>
            }

        </Background>
    )
}

export default SectorServer;