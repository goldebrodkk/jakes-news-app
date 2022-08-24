
import './App.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleList from './Components/ArticleList';
import Home from './Components/Home';
import NavBar from './Components/Nav';
import SingleArticle from './Components/SingleArticle';
import { UserContext } from './Components/UserContext ';

function App() {
  const [user, setUser] = useState({
    username: 'tickle122',
    name: 'Tom Tickle',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
  })

  return (
    <BrowserRouter>
    <UserContext.Provider value={{ user, setUser }}>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles' element={<ArticleList />}/>
        <Route path='/articles/:topic' element={<ArticleList />}/>
        <Route path='/article/:article_id' element={<SingleArticle />}/>
      </Routes>
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
