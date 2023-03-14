// import React,{useState,useEffect} from 'react';
// import './App.css';



// function App() {

//   const [counter,setCounter] = useState(0);

//   const [state,setState] = useState({
//     title: 'Счетчик',
//     date: Date.now()
//   }) 

//   function increment(){
//     // setCounter(counter + 1)
//     setCounter((prevCounter)=>{
//       return prevCounter + 1
//     })
//   }

//   function decrement(){
//     // setCounter(counter - 1)
//     setCounter((prevCounter)=>{
//       return prevCounter - 1
//     })
//   }
//   function updateTitle(){
//      setState(rev=>{
//       return{
//         ...prev,
//         {title:"Новое название"}
//       }
//      }
//       )
//   }

//   return (
//     <div className="App">
//       <header className="App-header">

//         <h1>Счeтчик:{counter}</h1>

//           <button onClick={increment}>добавить</button>
//           <button onClick={decrement}>убавить</button>
//           <button onClick={updateTitle}>Изменить название</button>
//       </header>
//       <pre>{JSON.stringify(state,null,2)}</pre>
//     </div>
//   );
// }

// export default App;
