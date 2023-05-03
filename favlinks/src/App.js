import React, { useEffect } from 'react'
import LinkContainer from './components/LinkContainer'

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/api')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
  })

  return (
    <div className="App">
      <LinkContainer />
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
