import React, { useRef } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createWord } from "./redux/modules/word"


const AddPost = () => {
    const history = useHistory()
    const back = () => {
        history.goBack()
    }
    const wordInput = useRef(null)
    const instructionIput = useRef(null)
    const exampleInput = useRef(null)

    const InputObj = () => {
        const word = wordInput.current.value
        const desc = instructionIput.current.value
        const ex = exampleInput.current.value
        const obj = {
            word,
            desc,
            ex,
        }
        return obj
    }
    const dispatch = useDispatch()
    const addList = () => {
        dispatch(createWord(InputObj()))
        back()
    }

    return (
        <>
            <AddText>단어 추가하기</AddText>
            <InputList>
                <InputText>단어</InputText>
                <InputBox  ref={wordInput} type="text" />
            </InputList>
            <InputList>
                <InputText>설명</InputText>
                <InputBox  ref={instructionIput} type="text" />
            </InputList>
            <InputList>
                <InputText>예시</InputText>
                <InputBox  ref={exampleInput} type="text" />
            </InputList>
            <AddButton onClick={addList}
            >추가하기</AddButton>
        </>

    )
}

const AddText = styled.p`
font-size : 25px;
font-weight: bold;
margin-left:30px ;
`;

const InputList = styled.div`
width: 85%;
height: 100px;
margin: 20px auto 0px auto;
background-color: white;
flex-direction:column ;
`;

const InputText = styled.p`
font-size: 20px;
text-decoration: underline;
margin: 10px 0px 10px 10px;
`;

const InputBox = styled.input`
border: 1px solid black;
margin: auto;
width: 90%;
height: 35px;
margin:5px 10px 0px 10px ;
font-size: 15px;
`;

const AddButton = styled.button`
margin: 50px 8% auto 8% ;
width : 85%;
height: 50px;
background-color: #A566FF;
color: white;
font-size: 25px;
border: 1px solid #A566FF ;
font-weight: bold;
`;
export default AddPost