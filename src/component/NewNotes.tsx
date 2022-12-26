import React, { ChangeEvent, useState } from "react"


interface newnotesProps {
    addnote(note: string):any
}


export const NewNotes: React.FC<newnotesProps> = ({ addnote }) => {

    const [note, setnote] = useState("")

    const updatenote = (e: ChangeEvent<HTMLInputElement>) => {
        setnote(e.target.value)
    }

    const changehandler = () => {
        addnote(note)
        setnote("")
    }

    return (
        <div>
            <input type="text" placeholder='note' value={note} onChange={updatenote} />
            <button onClick={changehandler}>Add note</button>
        </div>

    )

}