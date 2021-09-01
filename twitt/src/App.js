import './App.css';
import Feed from './components/feed/Feed';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/widget/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
