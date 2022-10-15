import './App.css';
import Problem from './subcomp/problem';

function App() {
  return (
    <div className="App">
      <header className="bg-teal-400 py-4">
        <h1 className="ml-5 text-xl font-bold">WebQuest</h1>
      </header>

      <div className="grid grid-cols-9 grid-rows-1 mt-20">
        <div className="col-start-2 col-span-7">
          <Problem/>
        </div>
      </div>
    </div>
  );
}

export default App;
