import React from 'react'
import Feed from './Feed'
import { useContext } from 'react'
import DataContext from './context/DataContext'
import posts from './api/posts'

const Home = () => {
  const {posts,fetchError,isLoading} = useContext(DataContext) 
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color:'red'}}>
      {fetchError}</p>}
      {!isLoading && !fetchError && (posts.length ?  <Feed posts = {posts}/>:<p
      className='statusMsg'>No posts to display.</p>)}
    </main>
  )
}

export default Home