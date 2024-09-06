import './index.css';
import * as ReactDOM from "react-dom/client";
import App from './App';

// function Hello({name, age}) {
//   console.log(name);
//   // const name = props.name;
//   // const age = props.age;

//   //var destructuring

//   // const {name, age} = props;

//   return (
//     <div>
//       <h1>Hello, I'm {name}, {age} years</h1>
//     </div>
//   );
// }

const rootContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);
