import React from 'react';
import ReactDOM from 'react-dom';
  
var name = "Learner";
  
var element = <h1>Hello, { name }.Welcome to GeeksforGeeks.</h1>;
   
ReactDOM.render(
    element, 
    document.getElementById("root")
);
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