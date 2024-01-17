import './App.css';

function App() {
  let name = "React App"
  let className = "App-header"
  console.log('App');
  return (
    <div className="App">
    <div className={className}>
      {name}
      <Demo></Demo>
    </div>
      
    </div>
  );
}
function Demo() {
  console.log('Demo');
  return (
    <div className="App">
    <div className="App-header">Demo</div>
      Demo
    </div>
  );
}

export default App;
