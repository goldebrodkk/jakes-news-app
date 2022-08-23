
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleList from './Components/ArticleList';
import Home from './Components/Home';
import NavBar from './Components/Nav';
import SingleArticle from './Components/SingleArticle';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles' element={<ArticleList />}/>
        <Route path='/articles/:topic' element={<ArticleList />}/>
        <Route path='/article/:article_id' element={<SingleArticle />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
