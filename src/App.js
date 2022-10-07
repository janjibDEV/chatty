import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Chatty
      </h1>
      <div className='chats'>
        
      </div>
      <div className='text-box'>
        <textarea className='text-box-comp' />
        <button className='send-button'>Send</button>
      </div>
    </div>
  );
}

export default App;
