import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux"

import PostList from './postList';
import AddPost from './addPost'
import { load_word } from "./redux/modules/word"


// import {db} from "./firebase"; 
// import { collection, getDoc, getDocs,addDoc } from "firebase/firestore"; 
//  파이어베이스 db를 가져올때 



function App(props) {
  
  const dispatch = useDispatch()

  const Data = useSelector((state) => state.word.wordList)

  // // * 파이어스토어에 있는 데이터 가져오기*
  // React.useEffect(async() => {
  //   console.log(db)

  //   const query = await getDocs(collection(db, "my_dictionary"))
  //    // 파이어베이스에서 데이터를 가져올때는 collection을 먼저 가져온다.
  //    // db를 먼저 쓰고 어떤 collection인지 적는다.
  //    //wait는 작업을 끝내고 결과를 기다린다 async는 awit와 한쌍으로 쓰이고 async안에서 wait 사용이 가능하다.

  //   console.log(query)
  //   //async wait를 쓰지 않았을 시 콘솔에 찍어봤을 때 Promiss 라는 것이 뜬다. 서버-클라이언트 통신에서는 클라이언트에서 데이터를 달라고 요청을 보냈을때 그 요청을 Promise 라고 한다.
  //   // 바로 데이터를 가져오지 않고 promiss라고 뜨는 이유는  답을 줄지,언제 줄지 확신할수 없는 상태이다.  이러한 통신을 '비동기 통신'이라고 한다.
  //   // -> async wait를 사용해야 Pomiss안에 요청의 결과 데이터를 볼수 있다.
  //   query.forEach((doc) => { // query는 배열이 아니기때문에  forEach라는  객체의 내장함수를 사용해야한다.
  //     // 내장함수 forEach는 반복문으로서 collection 안에 있는 document(doc)에게 접근한다
  //     console.log(doc.id,doc.data())  // doc의 id와 doc의 data를 가져온다.
  //   })   
  // },[])

  // // * 파이어스토어에 있는 데이터 추가하기*
  // addDoc(collection(db,"my_dictionary"),{text:"new"}) // collection을 먼저 적고 addDoc안에 넣는다
  //  

  // 어떤 collection인지 적고 추가할 데이터를 적는다.
  useEffect( () => {
    dispatch(load_word())
},[])

  return (
    <Wrap>
      <DictionaryBox>
        <Route path="/" exact component={() => <PostList data = {Data}/>}/>
        <Route path="/addPost" exact component={AddPost} />
      </DictionaryBox>
    </Wrap>

  );
}

const Wrap = styled.div`
background-color: #eee;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;

`;

const DictionaryBox = styled.div`
width: 25%;
height:95%;
background-color: #CCFFE5;
flex-direction: column;
margin: auto;
position: relative;
display: block;
overflow: auto
`;



export default App;
