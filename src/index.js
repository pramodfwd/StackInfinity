import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Redux/store';
import { taskAdded, taskDeleted } from './Redux/task';

//


// const unsubscribe=store.subscribe(()=>{
//   console.log("state change", store.getState())
// })

store.dispatch(taskAdded
  ({
    id: 1,
    description: "Gym",
    status: "complete"
  })
)

store.dispatch(taskAdded
  ({
    id: 2,
    description: "gone",
    status: "complete"
  })
)

store.dispatch(taskAdded
  ({
    id: 3,
    description: "went",
    status: "complete"
  })
)

store.dispatch(taskDeleted(2))

// store.dispatch({
//   type:ADD,
//   payload: {
//     id:1,
//     description: "client meeting",
//     status :"pending"
//   }
// })

// store.dispatch({
//   type:ADD,
//   payload: {
//     id:2,
//     description: "Gym",
//     status :"complete"
//   }
// })

// store.dispatch({
//   type:ADD,
//   payload: {
//     id:3,
//     description: "Morning",
//     status :"complete"
//   }
// })

// store.dispatch({
//   type:REMOVE,
//   payload: {
//     id:2,
//   }
// })


console.log(store.getState())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
