import { ActionType } from "../actionType/index"
import { Dispatch } from "redux"
import { Action } from "../actions/index"



export const depositMoney = (amount:number) =>{
    return (despatch:Dispatch<Action>) =>{
        despatch({
            type:ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withDrawMoney = (amount:number) =>{
    return (despatch:Dispatch<Action>) =>{
        despatch({
            type:ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankruptMoney = () =>{
    return (despatch:Dispatch<Action>) =>{
        despatch({
            type:ActionType.BANKRUPT,
        })
    }
}