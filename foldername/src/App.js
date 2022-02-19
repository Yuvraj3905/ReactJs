import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      var myNew=document.createElement("p");
      myNew.innerHTML="this is a paragraph";
    </div>
  );
}

export default App;
// import React from 'react'
// import "antd/dist/antd.css";
// import { TimePicker } from 'antd';
 
// export default function App() {
 
// return (
//     <div style={{
//     display: 'block', width: 700, padding: 30
//     }}>
//     <h4>ReactJS Ant-Design TimePicker Component</h4>
//     <>
//         <TimePicker onChange={(time) => console.log(time)} />,
//     </>
//     </div>
// );
// }