
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleList from './Components/ArticleList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/articles' element={<ArticleList />}/>
        <Route path='/articles/:topic' element={<ArticleList />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
