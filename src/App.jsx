import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewPostForm from './components/NewPostform'
import Header from './components/Header'
import Post from './components/Post'
import Feed from './pages/Feed'
import PostDetail from './pages/PostDetail'

function App() {
  const [count, setCount] = useState(0)

  const post = {
    author: 'Lucas Santos',
    content: 'Teste de publicação'
  }

  return (
    <>
    <Header />
    <PostDetail />
    </>
  )
}

export default App
