import './App.css';
import Problem from './subcomp/problem';

function App() {
  return (
    <div className="App">
      <header id="banner">
        <div class="title">
          <h1>WebQuest</h1>
        </div>
      </header>

      <div class="tempP">
        <Problem/>
      </div>
    </div>
  );
}

export default App;
