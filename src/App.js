// import logo from './logo.svg';
import './App.css';
import Hobi from './Hobi';
import Profile from './Profile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Profile/>
        <Hobi/>
      </header>
    </div>
    
  );
}

export default App;
