import React from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators,State } from './state';




function App() {

  const dispatch = useDispatch();

  const {depositMoney,withDrawMoney,bankruptMoney} = bindActionCreators(actionCreators,dispatch)
  const amount =  useSelector((state:State)=>state.bank)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=>depositMoney(1000)}>Deposit</button><br/><br/>
      <button onClick={()=> withDrawMoney(50)}>Withdraw</button><br/><br/>
      <button onClick={()=>bankruptMoney()}>BankRupt</button>
    </div>
  );
}

export default App;
