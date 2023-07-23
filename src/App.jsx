import React from 'react'
import Header from './Header.jsx'
import Entry from './Entry.jsx'
import data from '../data.js'
import './App.css'

function App() {
  const entries = data.map(post => {
    return (
      <Entry 
        {...post}
      />
    )
  })
  return (
    <>
      <Header />
      <main>
        <section className="blog-posts">
          {entries}
        </section>
      </main>
    </>
  )
}

export default App
