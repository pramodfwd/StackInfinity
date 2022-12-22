import React, { useState } from 'react'
import { IState as props } from "../App";


interface IProps{
    people:props["people"]
    setPeople: React.Dispatch<React.SetStateAction<props["people"]>>
}


const AddToList:React.FC<IProps> = ({people,setPeople}) => {

    const [input,setInput] = useState({
        name:"",
        age:"",
        url:"",
        note:""
    })


    const changeHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const addHandler =() =>{
        if(
            !input.name || !input.age || !input.url
        ){
            return
        }
        setPeople([
            ...people,

            {
            name:input.name,
            age:parseInt(input.age),
            url:input.url,
            note:input.note
        }
        ])
    }

  return (
    <div className='AddToList'>
      <input 
        type="text"
        placeholder='Name'
        className='AddToList-input'
        value={input.name}
        name="name"
        onChange={changeHandler}
      />
        <input 
        type="number"
        placeholder='Age'
        className='AddToList-input'
        value={input.age}
        name="age"
        onChange={changeHandler}
      />
        <input 
        type="text"
        placeholder='Image URL'
        className='AddToList-input'
        value={input.url}
        name="url"
        onChange={changeHandler}
      />
        <textarea 
        placeholder='Note'
        className='AddToList-input'
        value={input.note}
        name="note"
        onChange={changeHandler}
      />
      <button
        onClick={addHandler} className="AddToList-btn"
      >Add To List</button>
    </div>
  )
}

export default AddToList
