import data from '../data.json';
import './App.css';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  const { videos } = data;

  return (
    <div className='App'>
      <Header />
      <div className='Body'>
        <Sidebar />
        <Content videos={videos} />
      </div>
    </div>
  );
}

export default App;
