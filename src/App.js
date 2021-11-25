import PostList from './postList';
import AddPost from './addPost'
import styled from 'styled-components';
import {Route} from 'react-router-dom'

function App() {
  return (
    <Wrap>
      <DictionaryBox>
        <Route path = "/" exact component = {PostList} />
        <Route path = "/addPost" exact component = {AddPost}/>
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
