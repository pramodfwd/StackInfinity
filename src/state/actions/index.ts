import { ActionType } from "../actionType/index"


type DepositAction = {
    type: ActionType.DEPOSIT,
    payload: number
}
type WithdrawAction = {
    type: ActionType.WITHDRAW,
    payload: number
}
type Bankrupt = {
    type: ActionType.BANKRUPT
}

export type Action = DepositAction | WithdrawAction | Bankrupt
