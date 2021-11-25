import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"




const PostList = () => {
    const history = useHistory()
    const Data = useSelector((state) => state.word.wordList)
    console.log(Data)


    return (
        <>
            <DictionaryText>MY DITIONARY</DictionaryText>
            {Data.map((list, index) => {
                return (<ListBox key={index}>
                    <Content>
                        <ListText>단어</ListText>
                        <TextContent>{list.word}</TextContent>
                    </Content>
                    <Content>
                        <ListText>설명</ListText>
                        <TextContent>{list.desc} </TextContent>
                    </Content>
                    <Content>
                        <ListText>예시</ListText>
                        <ExampleText>{list.ex}</ExampleText>
                    </Content>
                </ListBox>)
            })}
            <AddButton onClick={() => {
                history.push('/addPost')
            }}>+</AddButton>

        </>

    )
}


const DictionaryText = styled.p`
font-size: 25px;
font-weight: bold;
text-align:center
`;

const ListBox = styled.div`
background-color: white;
width: 80%;
height: 20%;
margin: 25px auto 0px auto ;
padding: 0px ;
flex-direction:column;
overflow: auto;
border-radius: 20px;
`;

const Content = styled.div`
 width: 100%;

`;

const ListText = styled.p`
font-size: 15px;
text-decoration: underline;
margin: 10px 0px 10px 0px;
`;

const TextContent = styled.p`
font-size:15px;
`;

const ExampleText = styled.p`
font-size:15px;
color: darkblue;
`;

const AddButton = styled.button`
width: 60px;
height: 60px;
border-radius: 100px;
border: 1px solid #A566FF;
background-color: #A566FF;
background-position:center;
font-size: 50px;
bottom:5%;
right:40%;
position: fixed;
color: #fff;
cursor: pointer;
    

`;


export default PostList