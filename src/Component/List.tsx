// import React from "react";
// interface IProps {
//   people: { name: string; age: number; url: string; note?: string }[];
// }

// const List: React.FC<IProps> = ({ people }) => {
//   const renderList = () => {
//     return people.map((person) => {
//       return (
//         <li className="List" key={person.name}>
//           <div className="List-header">
//             <img className="List-img" src={person.url} alt="" />
//             <h2>{person.name}</h2>
//           </div>
//           <p>{person.age} year old</p>
//           <p className="List-note">{person.note}</p>
//         </li>
//       );
//     });
//   };

//   return <>{renderList()}</>;
// };

// export default List;

import React from "react";
import { IState as IProps } from "../App";



const List: React.FC<IProps> = ({ people }) => {
  const renderList = () => {
    return people.map((person) => {
      return (
        <li className="List" key={person.name}>
          <div className="List-header">
            <img src={person.url} className="List-img" alt="" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age}</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;
