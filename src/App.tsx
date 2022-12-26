import React from 'react';
import './App.css';
import  {NewNotes}  from './component/NewNotes';
import {useSelector,useDispatch} from "react-redux"
import { noteState } from './Redux/reducer';




function App() {

  const note = useSelector<noteState,noteState["note"]> ((state)=> state.note)
  
  const dispatch = useDispatch()

  const addnote = (note:string) => {
    dispatch({
      type:"ADD",
      payload:note
    })
  }


  return (
    <div className="App">
      <NewNotes addnote={addnote}/>
      <hr/>
      <ul>
        {
          note.map((str)=>(
            <li key={str}>{str}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
