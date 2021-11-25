// word.js

// Actions
// const LOAD   = 'word/LOAD';
const CREATE = 'word/CREATE';

// const initialState = 
const initialState = { wordList: 
  [ { word: "dictionary", desc: "사전", ex: "dictionary이다." },{ word: "dictionary", desc: "사전", ex: "dictionary이다." }
  ], lastValue: 0, };
    

export function createWord(word) {
  return { type: CREATE, word };
}


// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "word/CREATE": {
          const new_post_Word = [...state.wordList,action.word]
           return {wordList:new_post_Word}
        
              }
      default: return state;
    }
  }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }