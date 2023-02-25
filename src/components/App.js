import './App.css';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='Body'>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
