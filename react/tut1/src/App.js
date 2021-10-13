import './App.css';
import {add,sub, Multiplication,Division} from "./Calc"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Calculator in react!</h1>
        <ol>
          <li>Sum of two no is : { add (2,4)}</li>
          <li>subtract  of two no is : { sub (4,4)}</li>
          <li>Multiplication of two no is : { Multiplication (4,2)}</li>
          <li>Division of two no is : { Division (3,4)}</li>   
        </ol>
      </header>
    </div>
  );
}
export default App;