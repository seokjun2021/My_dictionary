// word.js
import {db} from "../../firebase"
import { collection,getDoc, getDocs,addDoc } from "firebase/firestore"; 

// Actions
const LOAD = 'word/LOAD';
const CREATE = 'word/CREATE';

// const initialState = 
const initialState = {
  wordList:
    [{ word: "dictionary", desc: "사전", ex: "dictionary이다." }, { word: "dictionary", desc: "사전", ex: "dictionary이다." }
    ], lastValue: 0,
};

export function loadWord(word_list) {
  return { type: LOAD, word_list }
}

export function createWord(word) {
  return { type: CREATE, word };
}

// middlewares -> redux thunk
export const load_word = () => {
  return  async function (dispatch) {
    const word_data =  await getDocs(collection(db,"my_dictionary" ))

    
    let word_list = []

    word_data.forEach((doc) => {
     word_list.push({id:doc.id,...doc.data()})


    })
    console.log(word_list)
    dispatch(loadWord(word_list))
  }

}

export const add_word = (word) =>{
  return async function(dispatch){
    const docRef = await addDoc(collection(db,"my_dictionary"),word)
    const _word = await getDoc(docRef)
    const word_data = {id: _word.id, ..._word.data()}
    console.log(word_data)

    dispatch(createWord(word_data))
  } 
} 


// Reducer
export default function reducer(state = initialState, action={}) {
  switch (action.type) {

    case "word/LOAD" : {
      return {wordList :action.word_list}
    
    }
    case "word/CREATE": {
      const new_post_Word = [...state.wordList, action.word]
      return { wordList: new_post_Word }

    }
    default: return state;
  }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }