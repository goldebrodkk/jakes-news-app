import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleList from './Components/ArticleList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/articles' element={<ArticleList />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
